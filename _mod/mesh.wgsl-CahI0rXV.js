const a = new WeakMap();
function s(r, o) {
  const t = { source: o, onFrame: null, onDrop: null, resize: null };
  return (
    a.set(r, t),
    {
      publish() {
        if (!t.onFrame) return !1;
        const e = o.frame();
        return e && t.onFrame(e), !0;
      },
      defer(e) {
        return t.onFrame ? ((t.resize = e), !0) : !1;
      },
      drop() {
        if (!t.onFrame) return;
        const e = t.onDrop;
        i(t), e?.();
      },
      unregister() {
        (t.onFrame = t.onDrop = t.resize = null), a.delete(r);
      },
    }
  );
}
function c(r, o, t) {
  const e = a.get(r);
  if (!e || e.onFrame) return null;
  (e.onFrame = o), (e.onDrop = t ?? null), e.source.clear();
  const n = e.source.frame();
  return (
    n && o(n),
    () => {
      e.onFrame === o && i(e);
    }
  );
}
function i(r) {
  r.onFrame = r.onDrop = null;
  const o = r.resize;
  (r.resize = null), o?.(), r.source.redraw();
}
const l = `
const PI = 3.141592653589793;
// Must match MAX_PANELS in meshRenderer.ts.
const MAX_PANELS = 8u;
// three's floor on roughness: the sharpest level its PMREM keeps.
const MIN_ROUGHNESS = 0.0525;
// A 1.5 IOR dielectric, the base layer's and the clearcoat's.
const DIELECTRIC_F0 = vec3f(0.04);

struct Light {
  // The direction the light travels, in world space.
  direction: vec3f,
  intensity: f32,
  color: vec3f,
};

// A rectangular emitter facing the origin, measured in angles seen from there.
struct Panel {
  // xyz: unit direction from the origin to its centre; w: unused.
  centre: vec4f,
  // xyz: its width axis; w: the angle its half-width subtends.
  across: vec4f,
  // xyz: its height axis; w: the angle its half-height subtends.
  up: vec4f,
  // x: its radiance over the room's, so the room shows through where it is not.
  radiance: vec4f,
  // xyz: unit directions to its corners, wound so its form factor is positive.
  corners: array<vec4f, 4>,
};

struct Environment {
  // x: the room's radiance; y: the floor's; z: the floor's depth below the
  // origin over the room's half-width; w: the scene's own blur, in radians.
  room: vec4f,
  count: u32,
  // The floor as a polygon, wound like a panel's corners.
  floor: array<vec4f, 4>,
  panels: array<Panel, MAX_PANELS>,
};

// A fragment's colour, tone mapped, in linear sRGB: its normal as interpolated,
// which side of it faces the eye, and its and the eye's positions in the
// studio's world. The includer encodes it for its canvas.
fn shade(
  normal: vec3f,
  front: bool,
  world: vec3f,
  camera: vec3f,
  baseColor: vec3f,
  factors: vec4f,
  light: Light,
) -> vec3f {
  // The models are double-sided: a back face shades with its flipped normal.
  let n = normalize(normal) * select(-1.0, 1.0, front);
  // Specular antialiasing, as three does it: curvature across the pixel adds
  // roughness. Derivatives need uniform control flow, so this comes first.
  let dxy = max(abs(dpdx(n)), abs(dpdy(n)));
  let geometryRoughness = max(max(dxy.x, dxy.y), dxy.z);
  let v = normalize(camera - world);
  let color = computePBRColor(n, v, geometryRoughness, baseColor, factors, light);
  return neutral(color);
}

fn computePBRColor(
  n: vec3f,
  v: vec3f,
  geometryRoughness: f32,
  baseColor: vec3f,
  factors: vec4f,
  light: Light,
) -> vec3f {
  let metallic = factors.x;
  let roughness = min(max(factors.y, MIN_ROUGHNESS) + geometryRoughness, 1.0);
  let clearcoat = saturate(factors.z);
  let clearcoatRoughness = min(max(factors.w, MIN_ROUGHNESS) + geometryRoughness, 1.0);

  let diffuseColor = baseColor * (1.0 - metallic);
  let specularColor = mix(DIELECTRIC_F0, baseColor, metallic);
  let NdotV = saturate(dot(n, v));
  let dfg = environmentBRDF(NdotV, roughness);

  // The key light. Multiple scattering returns the energy a single GGX
  // bounce loses at high roughness; light the coat reflects never reaches
  // the diffuse layer.
  let l = normalize(-light.direction);
  let NdotL = saturate(dot(n, l));
  let irradiance = NdotL * light.color * light.intensity;
  let VdotH = saturate(dot(v, normalize(l + v)));
  let compensation = 1.0 + specularColor * (1.0 / (dfg.x + dfg.y) - 1.0);
  var specular = irradiance * specularBRDF(n, v, l, specularColor, roughness) * compensation;
  var diffuse = irradiance * diffuseColor / PI * (1.0 - specularReflection(DIELECTRIC_F0, VdotH));

  // The studio. 'ambient' is its irradiance over PI, which three reads from
  // its roughest level.
  let radiance = studio(reflection(n, v, roughness), roughness);
  let ambient = vec3f(studioIrradiance(n));
  let dielectric = multipleScattering(dfg, DIELECTRIC_F0);
  let metal = multipleScattering(dfg, baseColor);
  specular += radiance * mix(dielectric.single, metal.single, metallic);
  specular += ambient * mix(dielectric.multiple, metal.multiple, metallic);
  diffuse += ambient * diffuseColor * (1.0 - dielectric.single - dielectric.multiple);

  var color = diffuse + specular;
  if (clearcoat > 0.0) {
    let coatDfg = environmentBRDF(NdotV, clearcoatRoughness);
    let coat =
      irradiance * specularBRDF(n, v, l, DIELECTRIC_F0, clearcoatRoughness) +
      studio(reflection(n, v, clearcoatRoughness), clearcoatRoughness) *
        (DIELECTRIC_F0 * coatDfg.x + coatDfg.y);
    let coatFresnel = specularReflection(DIELECTRIC_F0, NdotV);
    color = color * (1.0 - clearcoat * coatFresnel) + clearcoat * coat;
  }
  return color;
}

// GGX, Smith-correlated visibility and Schlick Fresnel, with f90 = 1.
fn specularBRDF(n: vec3f, v: vec3f, l: vec3f, f0: vec3f, roughness: f32) -> vec3f {
  let alpha = roughness * roughness;
  let h = normalize(l + v);
  let NdotL = saturate(dot(n, l));
  let NdotV = saturate(dot(n, v));
  let F = specularReflection(f0, saturate(dot(v, h)));
  let V = visibility(alpha, NdotL, NdotV);
  let D = microfacetDistribution(alpha, saturate(dot(n, h)));
  return F * (V * D);
}

// Schlick, with three's spherical Gaussian approximation of the fifth power.
fn specularReflection(f0: vec3f, VdotH: f32) -> vec3f {
  let fresnel = exp2((-5.55473 * VdotH - 6.98316) * VdotH);
  return f0 * (1.0 - fresnel) + fresnel;
}

// Height-correlated Smith G2, divided by 4 NdotL NdotV.
fn visibility(alpha: f32, NdotL: f32, NdotV: f32) -> f32 {
  let a2 = alpha * alpha;
  let gv = NdotL * sqrt(a2 + (1.0 - a2) * NdotV * NdotV);
  let gl = NdotV * sqrt(a2 + (1.0 - a2) * NdotL * NdotL);
  return 0.5 / max(gv + gl, 1e-6);
}

fn microfacetDistribution(alpha: f32, NdotH: f32) -> f32 {
  let a2 = alpha * alpha;
  let f = NdotH * NdotH * (a2 - 1.0) + 1.0;
  return a2 / (PI * f * f);
}

// The split-sum scale and bias for a specular colour (x) and for f90 (y).
// Karis's analytic fit, which three used before r186's lookup texture.
fn environmentBRDF(NdotV: f32, roughness: f32) -> vec2f {
  let c0 = vec4f(-1.0, -0.0275, -0.572, 0.022);
  let c1 = vec4f(1.0, 0.0425, 1.04, -0.04);
  let r = roughness * c0 + c1;
  let a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
  return vec2f(-1.04, 1.04) * a004 + r.zw;
}

struct Scattering {
  single: vec3f,
  multiple: vec3f,
};

// Fdez-Agüera's multiple-scattering model for image-based light.
fn multipleScattering(dfg: vec2f, f0: vec3f) -> Scattering {
  let single = f0 * dfg.x + dfg.y;
  let energy = dfg.x + dfg.y;
  let average = f0 + (1.0 - f0) * 0.047619;
  let multiple = single * average / (1.0 - (1.0 - energy) * average);
  return Scattering(single, multiple * (1.0 - energy));
}

// The mirror direction, bent toward the normal as roughness grows, as three's
// getIBLRadiance does, so rough surfaces don't gather light from behind them.
fn reflection(n: vec3f, v: vec3f, roughness: f32) -> vec3f {
  let r2 = roughness * roughness;
  return normalize(mix(reflect(-v, n), n, r2 * r2));
}

// The studio's radiance along 'direction', averaged over a reflection lobe
// of 'roughness'. Directions are from the origin, as an environment map's are.
fn studio(direction: vec3f, roughness: f32) -> vec3f {
  let room = environment.room;
  // A GGX reflection lobe as the Gaussian with its half-width, ~1.1 alpha
  // radians, over the blur the scene was captured with.
  let alpha = roughness * roughness;
  let sigma = min(sqrt(1.21 * alpha * alpha + room.w * room.w), 1.2);
  // The floor fills directions steep enough to reach it before the walls.
  let reach = room.z * max(abs(direction.x), abs(direction.z));
  let ground = 0.5 + 0.5 * erf((-direction.y - reach) / (sqrt(2.0) * sigma));
  var radiance = mix(room.x, room.y, ground);
  for (var i = 0u; i < environment.count; i++) {
    let panel = environment.panels[i];
    // The direction's angles from the panel's centre along its two axes. A
    // rectangle is exactly a box in these, and blurring it there in angle,
    // rather than on its plane, keeps its energy when the lobe is wide.
    let facing = dot(direction, panel.centre.xyz);
    let x = atan2(dot(direction, panel.across.xyz), facing);
    let y = atan2(dot(direction, panel.up.xyz), facing);
    radiance +=
      panel.radiance.x *
      blurredBox(x, panel.across.w, sigma) *
      blurredBox(y, panel.up.w, sigma);
  }
  return vec3f(radiance);
}

// The studio's irradiance over PI on a surface facing 'n': the cosine-weighted
// mean radiance it sees. The room fills the sphere, and the floor and each
// panel replace their share of it.
fn studioIrradiance(n: vec3f) -> f32 {
  let room = environment.room;
  let floor = environment.floor;
  var irradiance =
    room.x +
    (room.y - room.x) *
      formFactor(floor[0].xyz, floor[1].xyz, floor[2].xyz, floor[3].xyz, n);
  for (var i = 0u; i < environment.count; i++) {
    let panel = environment.panels[i];
    let c = panel.corners;
    irradiance +=
      panel.radiance.x * formFactor(c[0].xyz, c[1].xyz, c[2].xyz, c[3].xyz, n);
  }
  return irradiance;
}

// A quad's form factor seen from a surface facing 'n', by Lambert's formula
// from its corners' directions. Where it dips below the surface's horizon,
// its vector form factor stands in for a sphere, as three's area lights do.
fn formFactor(a: vec3f, b: vec3f, c: vec3f, d: vec3f, n: vec3f) -> f32 {
  let f = (edgeFactor(a, b) + edgeFactor(b, c) + edgeFactor(c, d) + edgeFactor(d, a)) / (2.0 * PI);
  let l = length(f);
  return max((l * l + dot(f, n)) / (l + 1.0), 0.0);
}

// One edge's term: the angle it subtends, along its plane's normal.
fn edgeFactor(a: vec3f, b: vec3f) -> vec3f {
  let normal = cross(a, b);
  let sine = length(normal);
  return atan2(sine, dot(a, b)) / max(sine, 1e-7) * normal;
}

// A box of half-width 'extent' convolved with a unit Gaussian of deviation
// 'sigma': 1 deep inside, falling to 0 over a few sigma past its edge.
fn blurredBox(x: f32, extent: f32, sigma: f32) -> f32 {
  let scale = 1.0 / (sqrt(2.0) * sigma);
  return 0.5 * (erf((extent - x) * scale) + erf((extent + x) * scale));
}

// Winitzki's approximation, within 0.0002.
fn erf(x: f32) -> f32 {
  let x2 = x * x;
  let ax2 = 0.147 * x2;
  return sign(x) * sqrt(1.0 - exp(-x2 * (1.2732395 + ax2) / (1.0 + ax2)));
}

// Khronos PBR Neutral, as three's NeutralToneMapping applies it at exposure 1.
fn neutral(input: vec3f) -> vec3f {
  let start = 0.8 - 0.04;
  let desaturation = 0.15;
  let low = min(input.r, min(input.g, input.b));
  let offset = select(0.04, low - 6.25 * low * low, low < 0.08);
  var color = input - offset;
  let peak = max(color.r, max(color.g, color.b));
  if (peak < start) {
    return color;
  }
  let d = 1.0 - start;
  let newPeak = 1.0 - d * d / (peak + d - start);
  color *= newPeak / peak;
  let g = 1.0 - 1.0 / (desaturation * (peak - newPeak) + 1.0);
  return mix(color, vec3f(newPeak), g);
}

fn encodeSrgb(linear: vec3f) -> vec3f {
  let c = clamp(linear, vec3f(0.0), vec3f(1.0));
  return select(
    1.055 * pow(c, vec3f(1.0 / 2.4)) - 0.055,
    c * 12.92,
    c <= vec3f(0.0031308),
  );
}
`,
  f = `${l}
struct Frame {
  viewProjection: mat4x4f,
  // xyz: the camera's world position.
  camera: vec4f,
  light: Light,
};

struct Draw {
  world: mat4x4f,
  // Inverse transpose of the world matrix's 3x3, so scaled normals stay normal.
  normal: mat3x3f,
  // Linear RGB base colour; alpha unused.
  color: vec4f,
  // x: metallic; y: roughness; z: clearcoat; w: clearcoat roughness.
  factors: vec4f,
};

@group(0) @binding(0) var<uniform> frame: Frame;
@group(0) @binding(1) var<uniform> environment: Environment;
@group(1) @binding(0) var<uniform> draw: Draw;

struct VertexOutput {
  @builtin(position) position: vec4f,
  @location(0) world: vec3f,
  @location(1) normal: vec3f,
};

@vertex
fn vertexMain(
  @location(0) position: vec3f,
  @location(1) normal: vec3f,
) -> VertexOutput {
  var out: VertexOutput;
  let world = draw.world * vec4f(position, 1.0);
  out.position = frame.viewProjection * world;
  out.world = world.xyz;
  out.normal = draw.normal * normal;
  return out;
}

@fragment
fn fragmentMain(
  in: VertexOutput,
  @builtin(front_facing) front: bool,
) -> @location(0) vec4f {
  let color = shade(
    in.normal,
    front,
    in.world,
    frame.camera.xyz,
    draw.color.rgb,
    draw.factors,
    frame.light,
  );
  return vec4f(encodeSrgb(color), 1.0);
}
`;
export { f as M, l as P, s as r, c as t };
