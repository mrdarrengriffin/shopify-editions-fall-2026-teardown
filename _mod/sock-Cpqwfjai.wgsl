// The knit is drawn from the sock's own coordinates rather than sampled, so its
// stitches sharpen as the sock grows on screen and fade to their average before
// they would shimmer.

struct Sock {
  matrix: mat4x4f,
  rotation: mat3x3f,
  leg: vec4f,
  foot: vec4f,
  center: vec3f,
  // The back print, from the renderer: a turn round the leg and a drop down it,
  // each in prints, and how far below the cuff it starts.
  calf: vec3f,
}

struct SockVertexOutput {
  @builtin(position) clip: vec4f,
  @location(0) position: vec3f,
  @location(1) normal: vec3f,
}

struct Knit {
  height: f32,
  slope: vec2f,
  shade: f32,
}

@group(0) @binding(0) var<uniform> sock: Sock;
@group(0) @binding(1) var artworkSampler: sampler;
@group(0) @binding(2) var calfArtwork: texture_2d<f32>;
@group(0) @binding(3) var toeArtwork: texture_2d<f32>;

const PI = 3.14159265;
// Needles round the leg and the foot, and a course's height in sock units:
// about 2 mm a stitch on a sock some 30 cm tall.
const LEG_WALES = 144.0;
const FOOT_WALES = 120.0;
const COURSE = 0.0046;
// A wale is this many courses wide.
const WALE_ASPECT = 1.32;
// Relief in sock units, of the yarn's strands and of the cotton's fuzz.
const YARN_DEPTH = 0.0015;
const FUZZ_DEPTH = 0.0005;
const KNIT = vec3f(0.0137, 0.0497, 0.5776); // #1f3fc8
const ART = vec3f(0.8228, 0.8228, 0.7992); // #eaeae7
// Camera-space studio lights let the sock turn through the light. A raking key
// and restrained fill reveal the knit without washing out its shaded side.
const KEY = vec3f(0.7442, 0.4961, 0.4472);
const KEY_COLOR = vec3f(2.8);
const RIM = vec3f(-0.82, 0.25, -0.515);
const RIM_COLOR = vec3f(0.85, 0.9, 1.0) * 0.6;
const ENVIRONMENT_INTENSITY = 0.55;
const ROUGHNESS = 0.94;
// Reflectance face-on and at grazing, from three's 0.04 scaled by the
// prototype's specularIntensity of 0.6.
const F0 = 0.024;
const F90 = 0.6;
const SHEEN = 0.25;
const SHEEN_ROUGHNESS = 0.4;

@vertex
fn vertexMain(@location(0) position: vec3f, @location(1) normal: vec3f) -> SockVertexOutput {
  var output: SockVertexOutput;
  output.position = position;
  output.normal = sock.rotation * normal;
  output.clip = sock.matrix * vec4f(position - sock.center, 1.0);
  return output;
}

fn artwork(artworkMap: texture_2d<f32>, uv: vec2f) -> f32 {
  let inside = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
  return textureSample(artworkMap, artworkSampler, uv).a * inside;
}

fn hash(cell: vec2f) -> f32 {
  let p = bitcast<vec2u>(vec2i(cell));
  var h = (p.x * 1597334677u) ^ (p.y * 3812015801u);
  h = (h ^ (h >> 16u)) * 2246822519u;
  return f32(h ^ (h >> 13u)) / 4294967295.0;
}

// Wraps cells round the tube so the knit has no seam where atan does.
fn wrap(cell: vec2f, period: f32) -> vec2f {
  return vec2f(cell.x - period * floor(cell.x / period), cell.y);
}

// Jersey V stitches, in stitches: each leg a round strand of yarn, rising from
// under the loop below and dipping under the one above. Mirrored about the wale
// so one leg covers both halves; the courses either side reach into this one.
fn jersey(stitch: vec2f, wales: f32) -> Knit {
  let cell = floor(stitch);
  let local = (stitch - cell - 0.5) * vec2f(WALE_ASPECT, 1.0);
  let side = select(-1.0, 1.0, local.x >= 0.0);
  let start = vec2f(0.06 * WALE_ASPECT, -0.55);
  let leg = vec2f(0.44 * WALE_ASPECT, 1.3);
  let radius = 0.35;
  var knit = Knit(0.0, vec2f(0.0), 0.0);
  for (var course = -1; course <= 1; course++) {
    let p = vec2f(abs(local.x), local.y - f32(course)) - start;
    let along = clamp(dot(p, leg) / dot(leg, leg), 0.0, 1.0);
    let offset = p - leg * along;
    let lift = mix(0.35, 1.0, sin(PI * along));
    let height = (1.0 - dot(offset, offset) / (radius * radius)) * lift;
    if (height > knit.height) {
      knit = Knit(
        height,
        -2.0 * lift * offset * vec2f(side * WALE_ASPECT, 1.0) / (radius * radius),
        hash(wrap(cell + vec2f(0.0, f32(course)), wales)),
      );
    }
  }
  return knit;
}

// A wale averaged over its courses, in stitches: a low rounded column of yarn,
// grooved at either side. Too fine to draw the Vs, the knit still reads as these.
fn rib(stitch: vec2f) -> vec2f {
  return vec2f(0.4 * PI * sin(2.0 * PI * stitch.x), 0.0);
}

// The slope of value noise.
fn noise(p: vec2f, period: f32) -> vec2f {
  let i = floor(p);
  let f = p - i;
  let u = f * f * (3.0 - 2.0 * f);
  let a = hash(wrap(i, period));
  let b = hash(wrap(i + vec2f(1.0, 0.0), period));
  let c = hash(wrap(i + vec2f(0.0, 1.0), period));
  let d = hash(wrap(i + vec2f(1.0, 1.0), period));
  return 6.0 * f * (1.0 - f) * (vec2f(b - a, c - a) + (a - b - c + d) * u.yx);
}

// The slope of the cotton's fuzz from eight stitches across down to two, each
// octave fading out before it would shimmer.
fn fuzz(stitch: vec2f, wales: f32, footprint: f32) -> vec2f {
  var sum = vec2f(0.0);
  var size = 8.0;
  var weight = 0.5;
  for (var octave = 0; octave < 3; octave++) {
    let fade = 1.0 - smoothstep(0.25, 0.5, footprint / size);
    sum += noise(stitch / size, wales / size) / size * weight * fade;
    size *= 0.5;
    weight *= 0.7;
  }
  return sum;
}

// Camera-space studio fill, irradiance over π, from a second-order spherical
// harmonic fitted to the prototype's RoomEnvironment. Turn its bright side
// opposite the key so the shaded yarn stays readable.
fn environment(direction: vec3f) -> f32 {
  let n = direction * vec3f(-1.0, 1.0, -1.0);
  return ENVIRONMENT_INTENSITY * (0.6802 + 0.3083 * n.x + 0.3697 * n.y - 0.0242 * n.z
    + 0.3705 * n.x * n.y - 0.0415 * n.y * n.z + 0.0751 * n.x * n.z
    - 0.1092 * (3.0 * n.z * n.z - 1.0) - 0.0489 * (n.x * n.x - n.y * n.y));
}

// How much of the stitches' own relief is drawn at a footprint, fading before they shimmer.
fn knitDetail(footprint: f32) -> f32 {
  return 1.0 - smoothstep(0.2, 0.35, footprint);
}

// A tube's knit slope, in stitches: its Vs while they can be drawn, its wale columns a little
// further, and the cotton's fuzz.
fn relief(knit: vec2f, stitch: vec2f, wales: f32, footprint: f32) -> vec2f {
  let detail = knitDetail(footprint);
  // A wale is wider than a course, so its columns hold on further before they would shimmer.
  let columns = (1.0 - detail) * (1.0 - smoothstep(0.22, 0.38, footprint / WALE_ASPECT));
  return (knit * detail + rib(stitch) * columns) * YARN_DEPTH + fuzz(stitch, wales, footprint) * FUZZ_DEPTH;
}

// What follows ports three's physical BRDF as the prototype uses it, with the
// view along +z. GGX specular with Smith visibility:
fn specular(normal: vec3f, light: vec3f) -> f32 {
  let halfway = normalize(light + vec3f(0.0, 0.0, 1.0));
  let NoL = max(dot(normal, light), 0.0);
  let NoV = max(normal.z, 0.0);
  let NoH = max(dot(normal, halfway), 0.0);
  let fresnel = exp2((-5.55473 * halfway.z - 6.98316) * halfway.z);
  let alpha = ROUGHNESS * ROUGHNESS;
  let a2 = alpha * alpha;
  let visibility = 0.5 / max(NoL * sqrt(a2 + (1.0 - a2) * NoV * NoV) + NoV * sqrt(a2 + (1.0 - a2) * NoL * NoL), 0.000001);
  let denominator = NoH * NoH * (a2 - 1.0) + 1.0;
  return mix(F0, F90, fresnel) * visibility * a2 / (PI * denominator * denominator);
}

// Charlie sheen (Estevez and Kulla) with Neubelt's visibility, for cloth whose
// fibres catch light at grazing angles.
fn sheen(normal: vec3f, light: vec3f) -> f32 {
  let NoL = max(dot(normal, light), 0.0);
  let NoV = max(normal.z, 0.0);
  let NoH = max(dot(normal, normalize(light + vec3f(0.0, 0.0, 1.0))), 0.0);
  let alpha = SHEEN_ROUGHNESS * SHEEN_ROUGHNESS;
  let sin2 = max(1.0 - NoH * NoH, 0.0078125);
  let distribution = (2.0 + 1.0 / alpha) * pow(sin2, 0.5 / alpha) / (2.0 * PI);
  return SHEEN * distribution * clamp(1.0 / (4.0 * (NoL + NoV - NoL * NoV)), 0.0, 1.0);
}

// The sheen's share of the environment, three's curve fit of the Charlie lobe
// integrated over the hemisphere.
fn ambientSheen(NoV: f32) -> f32 {
  let r = SHEEN_ROUGHNESS;
  let a = -8.48 * r * r + 14.3 * r - 9.95;
  let b = 1.97 * r * r - 3.27 * r + 0.72;
  return SHEEN * clamp((exp(a * NoV + b) + 0.1 * (r - 0.25)) / PI, 0.0, 1.0);
}

// Single and multiple scattering of the environment off the specular lobe,
// from Karis' analytic fit and Fdez-Agüera's energy compensation.
fn ambientSpecular(NoV: f32) -> vec2f {
  let r = ROUGHNESS * vec4f(-1.0, -0.0275, -0.572, 0.022) + vec4f(1.0, 0.0425, 1.04, -0.04);
  let a004 = min(r.x * r.x, exp2(-9.28 * NoV)) * r.x + r.y;
  let scale = vec2f(-1.04, 1.04) * a004 + r.zw;
  let single = F0 * scale.x + F90 * scale.y;
  let lost = 1.0 - scale.x - scale.y;
  let average = F0 + (1.0 - F0) / 21.0;
  return vec2f(single, single * average / (1.0 - lost * average) * lost);
}

@fragment
fn fragmentMain(input: SockVertexOutput, @builtin(front_facing) frontFacing: bool) -> @location(0) vec4f {
  let inside = !frontFacing;
  let facing = normalize(input.normal);

  // Stitches run round and along each tube, a whole number of wales round so
  // the knit meets itself where atan wraps; their gradients are analytic for
  // the same reason.
  let legRadial = input.position.xz - sock.leg.xy;
  let angle = atan2(legRadial.y, legRadial.x);
  let legStitch = vec2f(angle * LEG_WALES / (2.0 * PI), input.position.y / COURSE);
  let legAround = vec3f(-legRadial.y, 0.0, legRadial.x) * LEG_WALES / (2.0 * PI * max(dot(legRadial, legRadial), 0.00000001));
  let footRadial = vec2f(input.position.y - sock.foot.x, input.position.z - sock.foot.y);
  let footStitch = vec2f(atan2(footRadial.y, footRadial.x) * FOOT_WALES / (2.0 * PI), input.position.x / COURSE);
  let footAround = vec3f(0.0, -footRadial.y, footRadial.x) * FOOT_WALES / (2.0 * PI * max(dot(footRadial, footRadial), 0.00000001));
  let onLeg = smoothstep(sock.leg.w - 0.08, sock.leg.w + 0.12, input.position.y);

  let dx = dpdx(input.position);
  let dy = dpdy(input.position);
  let size = max(length(dx), length(dy)) / COURSE;
  // A tube's wales gather towards its axis and meet where the toe closes the foot, so a pixel
  // there spans far more stitches round it than its size alone says.
  let legFootprint = max(size, max(abs(dot(legAround, dx)), abs(dot(legAround, dy))));
  let footFootprint = max(size, max(abs(dot(footAround, dx)), abs(dot(footAround, dy))));
  let detail = mix(knitDetail(footFootprint), knitDetail(legFootprint), onLeg);
  let legKnit = jersey(legStitch, LEG_WALES);
  let footKnit = jersey(footStitch, FOOT_WALES);
  let height = mix(footKnit.height, legKnit.height, onLeg);
  let shade = mix(footKnit.shade, legKnit.shade, onLeg);
  let legSlope = relief(legKnit.slope, legStitch, LEG_WALES, legFootprint);
  let footSlope = relief(footKnit.slope, footStitch, FOOT_WALES, footFootprint);
  var gradient = sock.rotation * mix(
    footSlope.x * footAround + vec3f(footSlope.y / COURSE, 0.0, 0.0),
    legSlope.x * legAround + vec3f(0.0, legSlope.y / COURSE, 0.0),
    onLeg,
  );
  var normal = select(facing, -facing, inside);
  gradient -= normal * dot(normal, gradient);
  normal = normalize(normal - gradient);

  // Round from the back of the leg, where atan wraps, and down from the cuff.
  let fromBack = select(angle + PI, angle - PI, angle > 0.0);
  let calfUv = vec2f(
    0.5 - fromBack * sock.calf.x,
    (sock.leg.z - sock.calf.z - input.position.y) * sock.calf.y,
  );
  let calfArt = artwork(calfArtwork, calfUv) * step(sock.leg.w, input.position.y);
  // Across the top of the foot and back from the toe, so the formula reads the
  // right way round on this sock, which is modelled as a left one.
  let toeUv = vec2f(
    0.5 - (input.position.z - sock.foot.y) / 0.180752,
    0.5 + (input.position.x - sock.foot.w + 0.18) / 0.048348,
  );
  let toeArt = artwork(toeArtwork, toeUv) * step(input.position.y, sock.leg.w) * step(sock.foot.x, input.position.y);
  let art = max(calfArt, toeArt) * mix(1.0, smoothstep(0.0, 0.6, height), 0.35 * detail);
  // Stitch gaps fall to the knit's mean occlusion where they are too fine to
  // draw. Like the prototype's stitch map they darken the yarn's colour, not
  // its sheen.
  let occlusion = mix(0.9, mix(0.5, 1.0, sqrt(max(height, 0.0))), detail);
  let albedo = mix(KNIT, ART, art) * mix(1.0, mix(0.96, 1.04, shade), detail) * occlusion;

  let NoV = max(normal.z, 0.0);
  let scattering = ambientSpecular(NoV);
  let ambient = environment(normal);
  let reflection = normalize(mix(reflect(vec3f(0.0, 0.0, -1.0), normal), normal, ROUGHNESS * ROUGHNESS));
  let keyLight = max(dot(normal, KEY), 0.0) * KEY_COLOR;
  let rimLight = max(dot(normal, RIM), 0.0) * RIM_COLOR;
  var color = albedo * (1.0 - scattering.x - scattering.y) * ambient
    + scattering.x * environment(reflection) + scattering.y * ambient
    + keyLight * (albedo / PI + specular(normal, KEY)) + rimLight * (albedo / PI + specular(normal, RIM));
  let cloth = PI * ambient * ambientSheen(NoV) + keyLight * sheen(normal, KEY) + rimLight * sheen(normal, RIM);
  color = color * (1.0 - 0.157 * SHEEN) + cloth;
  color = select(color, albedo * 0.3, inside);
  return vec4f(srgb(neutral(color)), 1.0);
}

// Khronos' PBR Neutral tone mapping, the prototype's.
fn neutral(value: vec3f) -> vec3f {
  let low = min(value.r, min(value.g, value.b));
  var color = value - select(0.04, low - 6.25 * low * low, low < 0.08);
  let peak = max(color.r, max(color.g, color.b));
  if (peak < 0.76) {
    return color;
  }
  let compressed = 1.0 - 0.0576 / (peak - 0.52);
  color *= compressed / peak;
  return mix(color, vec3f(compressed), 1.0 - 1.0 / (0.15 * (peak - compressed) + 1.0));
}

fn srgb(value: vec3f) -> vec3f {
  return select(1.055 * pow(value, vec3f(1.0 / 2.4)) - 0.055, 12.92 * value, value <= vec3f(0.0031308));
}
