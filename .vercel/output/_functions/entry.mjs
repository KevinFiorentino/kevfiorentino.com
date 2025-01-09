import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CWC5ilFc.mjs';
import { manifest } from './manifest_BfO_bUK0.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/techs.astro.mjs');
const _page3 = () => import('./pages/_lang_/blog/_collection_/_slug_.astro.mjs');
const _page4 = () => import('./pages/_lang_/blog/_collection_.astro.mjs');
const _page5 = () => import('./pages/_lang_/blog.astro.mjs');
const _page6 = () => import('./pages/_lang_.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/techs.ts", _page2],
    ["src/pages/[lang]/blog/[collection]/[slug].astro", _page3],
    ["src/pages/[lang]/blog/[collection]/index.astro", _page4],
    ["src/pages/[lang]/blog/index.astro", _page5],
    ["src/pages/[lang]/index.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "12d0c298-4916-4500-aa45-329f90239be8",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
