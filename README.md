# Fall '26 Lab

Runs Shopify's real Editions Fall '26 code and assets from this folder.

```
cd C:\Users\darre\shopify\fall2026
python lab\server.py
```

- http://127.0.0.1:8765/ — the whole original page, booted from the local mirror
- http://127.0.0.1:8765/lab/ — each feature's real module mounted on its own, with inspectors and notes

Tabs: `#hero` `#plaza` `#sock` `#surfacing` `#checkpoint` `#widgets` `#source`

The sock, product explode and hero renderers need WebGPU (current Chrome/Edge).

`server.py` rewrites `cdn.shopify.com` URLs to localhost on the fly. The mirrored files are never edited.
Anything not yet mirrored is fetched once and saved to `mirror/`.
