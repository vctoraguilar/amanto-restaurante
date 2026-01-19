import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BVASpFPJ.mjs';
import { manifest } from './manifest_4x8w4NkH.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_---lang_/carta.astro.mjs');
const _page2 = () => import('./pages/_---lang_/nosotros.astro.mjs');
const _page3 = () => import('./pages/_---lang_/reserva.astro.mjs');
const _page4 = () => import('./pages/_---lang_.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/[...lang]/carta.astro", _page1],
    ["src/pages/[...lang]/nosotros.astro", _page2],
    ["src/pages/[...lang]/reserva.astro", _page3],
    ["src/pages/[...lang]/index.astro", _page4]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "a1e3a668-e0e6-4753-934d-3e1daa7403de",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
