import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CWC5ilFc.mjs';
import { manifest } from './manifest_CTJjCWm7.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/techs.astro.mjs');
const _page3 = () => import('./pages/rss.xml.astro.mjs');
const _page4 = () => import('./pages/_lang_/blog/_category_/_slug_.astro.mjs');
const _page5 = () => import('./pages/_lang_/blog/_category_.astro.mjs');
const _page6 = () => import('./pages/_lang_/blog.astro.mjs');
const _page7 = () => import('./pages/_lang_.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/techs.ts", _page2],
    ["src/pages/rss.xml.js", _page3],
    ["src/pages/[lang]/blog/[category]/[slug].astro", _page4],
    ["src/pages/[lang]/blog/[category]/index.astro", _page5],
    ["src/pages/[lang]/blog/index.astro", _page6],
    ["src/pages/[lang]/index.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b1dc9c6f-7731-44eb-9670-0d4a684ed40e",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
