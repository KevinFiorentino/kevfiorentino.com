import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BAg9pETs.mjs';
import 'es-module-lexer';
import { i as decodeKey } from './chunks/astro/server_C09QJLpO.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/kevin/KevWorkspace/kevfiorentino.com/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/techs","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/techs\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"techs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/techs.ts","pathname":"/api/techs","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://kevfiorentino.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/kevin/KevWorkspace/kevfiorentino.com/src/components/articles/PrevNext.astro",{"propagation":"in-tree","containsHead":false}],["/home/kevin/KevWorkspace/kevfiorentino.com/src/pages/[lang]/blog/[collection]/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[lang]/blog/[collection]/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/kevin/KevWorkspace/kevfiorentino.com/src/content/config.ts",{"propagation":"in-tree","containsHead":false}],["/home/kevin/KevWorkspace/kevfiorentino.com/src/components/BlogCard.astro",{"propagation":"in-tree","containsHead":false}],["/home/kevin/KevWorkspace/kevfiorentino.com/src/components/home/3. Blog.astro",{"propagation":"in-tree","containsHead":false}],["/home/kevin/KevWorkspace/kevfiorentino.com/src/pages/[lang]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[lang]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/kevin/KevWorkspace/kevfiorentino.com/src/pages/[lang]/blog/[collection]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[lang]/blog/[collection]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/kevin/KevWorkspace/kevfiorentino.com/src/pages/[lang]/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[lang]/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/kevin/KevWorkspace/kevfiorentino.com/src/components/CollectionsList.astro",{"propagation":"in-tree","containsHead":false}],["/home/kevin/KevWorkspace/kevfiorentino.com/src/components/articles/Breadcrumbs.astro",{"propagation":"in-tree","containsHead":false}],["/home/kevin/KevWorkspace/kevfiorentino.com/src/pages/404.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/[lang]/blog/[collection]/index@_@astro":"pages/_lang_/blog/_collection_.astro.mjs","\u0000@astro-page:src/pages/[lang]/blog/index@_@astro":"pages/_lang_/blog.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/[lang]/index@_@astro":"pages/_lang_.astro.mjs","\u0000@astro-page:src/pages/api/techs@_@ts":"pages/api/techs.astro.mjs","\u0000@astro-page:src/pages/[lang]/blog/[collection]/[slug]@_@astro":"pages/_lang_/blog/_collection_/_slug_.astro.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BXTaBTCz.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/.astro/content-modules.mjs":"chunks/content-modules_CmfavxDu.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_CpidAQku.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/bitcoin/architecture.mdx?astroPropagatedAssets":"chunks/architecture_qGZmUzBg.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/bitcoin/blocks.mdx?astroPropagatedAssets":"chunks/blocks_CEkh3sRD.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/bitcoin/cli.mdx?astroPropagatedAssets":"chunks/cli_Z7XMUsAg.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/bitcoin/core.mdx?astroPropagatedAssets":"chunks/core_9PK_P6qM.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/bitcoin/forks.mdx?astroPropagatedAssets":"chunks/forks_Cy40yUsB.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/bitcoin/inputs-outputs.mdx?astroPropagatedAssets":"chunks/inputs-outputs_VuJOwvZ_.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/bitcoin/merkle-trees.mdx?astroPropagatedAssets":"chunks/merkle-trees_CJuo4dP1.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/bitcoin/overview.mdx?astroPropagatedAssets":"chunks/overview_8u4RmENZ.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/bitcoin/script.mdx?astroPropagatedAssets":"chunks/script_beC93Do1.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/bitcoin/transaction-fees.mdx?astroPropagatedAssets":"chunks/transaction-fees_Dn3KQn_7.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/openzeppelin/escrow.mdx?astroPropagatedAssets":"chunks/escrow_D_WFEY-P.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/openzeppelin/governance.mdx?astroPropagatedAssets":"chunks/governance_BR40WJ9h.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/openzeppelin/inspect.mdx?astroPropagatedAssets":"chunks/inspect_Bp9z7ifO.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/openzeppelin/math.mdx?astroPropagatedAssets":"chunks/math_CRKWSHN5.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/openzeppelin/structure.mdx?astroPropagatedAssets":"chunks/structure_GXgRG9om.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/openzeppelin/timelock.mdx?astroPropagatedAssets":"chunks/timelock_DI9ADL5X.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/openzeppelin/upgradeable.mdx?astroPropagatedAssets":"chunks/upgradeable_qwpb5vh6.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/openzeppelin/users.mdx?astroPropagatedAssets":"chunks/users_BfuXSlT-.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/ethereum/erc1155-token.mdx?astroPropagatedAssets":"chunks/erc1155-token_Brsd8-GQ.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/ethereum/erc20-token.mdx?astroPropagatedAssets":"chunks/erc20-token_CKStaIUL.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/ethereum/erc721-token.mdx?astroPropagatedAssets":"chunks/erc721-token_BMWUuKxb.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/blockchain/web2-vs-web3.mdx?astroPropagatedAssets":"chunks/web2-vs-web3_BFRhW-ag.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solana/accounts-archivers.mdx?astroPropagatedAssets":"chunks/accounts-archivers_CCXf3WX-.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solana/behind-solana.mdx?astroPropagatedAssets":"chunks/behind-solana_CA7b7fc5.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solana/cloudbreak.mdx?astroPropagatedAssets":"chunks/cloudbreak_Pq7kCcYI.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solana/ecosystem.mdx?astroPropagatedAssets":"chunks/ecosystem_D9VOJXGo.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solana/gulf-stream.mdx?astroPropagatedAssets":"chunks/gulf-stream_Bc6JomvY.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solana/pipelining.mdx?astroPropagatedAssets":"chunks/pipelining_CV6QYMDz.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solana/proof-of-history.mdx?astroPropagatedAssets":"chunks/proof-of-history_BoZrxL3z.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solana/sealevel.mdx?astroPropagatedAssets":"chunks/sealevel_ikW6fpFH.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solana/solana-vs-ethereum.mdx?astroPropagatedAssets":"chunks/solana-vs-ethereum_Bya2tOTQ.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solana/tower-bft.mdx?astroPropagatedAssets":"chunks/tower-bft_D3LdCuF7.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solidity/cross-reentrancy-attack.mdx?astroPropagatedAssets":"chunks/cross-reentrancy-attack_BehadySZ.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solidity/dos-attack.mdx?astroPropagatedAssets":"chunks/dos-attack_VvXHmhai.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solidity/dos-gas.mdx?astroPropagatedAssets":"chunks/dos-gas_BDZC7VSP.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solidity/external-calls.mdx?astroPropagatedAssets":"chunks/external-calls_CvASPqnp.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solidity/global-variables.mdx?astroPropagatedAssets":"chunks/global-variables_F58WU-WP.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solidity/good-practices.mdx?astroPropagatedAssets":"chunks/good-practices_CzZgmUzJ.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solidity/reentrancy-attack.mdx?astroPropagatedAssets":"chunks/reentrancy-attack_3Dbpwey8.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solidity/self-destruct-attack.mdx?astroPropagatedAssets":"chunks/self-destruct-attack_CdwiS6lE.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solidity/storage.mdx?astroPropagatedAssets":"chunks/storage_DBFyLYRg.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/bitcoin/wallets-and-keys.mdx?astroPropagatedAssets":"chunks/wallets-and-keys_BHVJZWob.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solana/turbine.mdx?astroPropagatedAssets":"chunks/turbine_DIBt7tE1.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solana/wrap-up.mdx?astroPropagatedAssets":"chunks/wrap-up_DVazX2nJ.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/bitcoin/architecture.mdx":"chunks/architecture_CLySfd2d.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/bitcoin/blocks.mdx":"chunks/blocks_Ds6pza9Y.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/bitcoin/cli.mdx":"chunks/cli_B3n1wH1m.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/bitcoin/core.mdx":"chunks/core_CaVwgrds.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/bitcoin/forks.mdx":"chunks/forks_LAIheGF3.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/bitcoin/inputs-outputs.mdx":"chunks/inputs-outputs_DCdzvAbn.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/bitcoin/merkle-trees.mdx":"chunks/merkle-trees_DpVZQ7Jj.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/bitcoin/overview.mdx":"chunks/overview_DVh6nkGp.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/bitcoin/script.mdx":"chunks/script_wqivZ2HW.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/bitcoin/transaction-fees.mdx":"chunks/transaction-fees_BOtcHQ1t.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/openzeppelin/escrow.mdx":"chunks/escrow_B_E2NQlN.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/openzeppelin/governance.mdx":"chunks/governance_B8D47qB3.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/openzeppelin/inspect.mdx":"chunks/inspect_3vZvDohy.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/openzeppelin/math.mdx":"chunks/math_PQoZmqpo.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/openzeppelin/structure.mdx":"chunks/structure_Gb-YaZYF.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/openzeppelin/timelock.mdx":"chunks/timelock_fplImTRV.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/openzeppelin/upgradeable.mdx":"chunks/upgradeable_By_OL2E_.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/openzeppelin/users.mdx":"chunks/users_CJEmGEyY.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/ethereum/erc1155-token.mdx":"chunks/erc1155-token_DKtZvxHc.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/ethereum/erc20-token.mdx":"chunks/erc20-token_BYV_gNDe.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/ethereum/erc721-token.mdx":"chunks/erc721-token_CuqeCDwQ.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/blockchain/web2-vs-web3.mdx":"chunks/web2-vs-web3_DnlNAjby.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solana/accounts-archivers.mdx":"chunks/accounts-archivers_DaDApk4a.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solana/behind-solana.mdx":"chunks/behind-solana_DjDZGHD7.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solana/cloudbreak.mdx":"chunks/cloudbreak_CwOPeRVf.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solana/ecosystem.mdx":"chunks/ecosystem_BXJPu9J8.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solana/gulf-stream.mdx":"chunks/gulf-stream_BtsO__Bb.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solana/pipelining.mdx":"chunks/pipelining_CnlJFpix.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solana/proof-of-history.mdx":"chunks/proof-of-history_C1P705GZ.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solana/sealevel.mdx":"chunks/sealevel_CQmGWeeH.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solana/solana-vs-ethereum.mdx":"chunks/solana-vs-ethereum_D0_o2Lj7.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solana/tower-bft.mdx":"chunks/tower-bft_Boa49Zo2.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solidity/cross-reentrancy-attack.mdx":"chunks/cross-reentrancy-attack_BbSDzqmE.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solidity/dos-attack.mdx":"chunks/dos-attack_BNGCLfsw.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solidity/dos-gas.mdx":"chunks/dos-gas_BiXTqmoI.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solidity/external-calls.mdx":"chunks/external-calls_BAu_bSnw.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solidity/global-variables.mdx":"chunks/global-variables_CCR7_jnR.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solidity/good-practices.mdx":"chunks/good-practices_DASNv-j_.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solidity/reentrancy-attack.mdx":"chunks/reentrancy-attack_C67pJuX3.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solidity/self-destruct-attack.mdx":"chunks/self-destruct-attack_Cp4XEsv6.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solidity/storage.mdx":"chunks/storage_BqOcreJI.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/bitcoin/wallets-and-keys.mdx":"chunks/wallets-and-keys_6ArBl_2L.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solana/turbine.mdx":"chunks/turbine_gQ4ykbkd.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/content/solana/wrap-up.mdx":"chunks/wrap-up_9OVgXnvG.mjs","\u0000@astrojs-manifest":"manifest_BfO_bUK0.mjs","/home/kevin/KevWorkspace/kevfiorentino.com/src/components/articles/ToC.astro?astro&type=script&index=0&lang.ts":"_astro/ToC.astro_astro_type_script_index_0_lang.wRZQZIYU.js","/home/kevin/KevWorkspace/kevfiorentino.com/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.B8_aEpKJ.js","/home/kevin/KevWorkspace/kevfiorentino.com/src/components/Header.astro?astro&type=script&index=1&lang.ts":"_astro/Header.astro_astro_type_script_index_1_lang.Hl_oqrH6.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/kevin/KevWorkspace/kevfiorentino.com/src/components/articles/ToC.astro?astro&type=script&index=0&lang.ts","const i=document.getElementById(\"toc-button\"),r=document.getElementById(\"toc-toggle\"),l=i?.querySelector(\"svg\");i?.addEventListener(\"click\",()=>{r?.classList.toggle(\"toc-toggle-open\"),l?.classList.toggle(\"toc-icon-rotate\")});const a=document.getElementById(\"toc-title\"),g=new IntersectionObserver(e=>{for(const t of e){const o=`#${t.target.id}`,c=document.querySelector(`a[href=\"${o}\"]`);t.target.lastChild?.addEventListener(\"click\",()=>{navigator.clipboard.writeText(window.location.href.split(\"#\")[0]+o)}),t.isIntersecting?(a.innerText=t.target.textContent.split(\"#\")[0],document.querySelector(\".active-toc-item\")?.classList.remove(\"active-toc-item\"),c?.classList.add(\"active-toc-item\")):e.some(n=>n.target.id!==t.target.id&&n.isIntersecting)&&c?.classList.remove(\"active-toc-item\")}},{root:null,rootMargin:\"0px\",threshold:[1]}),d=document.querySelectorAll(\"article > h2, article > h3\");for(const e of d)g.observe(e);"],["/home/kevin/KevWorkspace/kevfiorentino.com/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"kevin\"),s=document.getElementById(\"moon-icon\"),o=document.getElementById(\"sun-icon\"),t=localStorage.getItem(\"kevin-them\");t&&t==\"false\"&&(e?.classList.toggle(\"dark\"),s?.classList.toggle(\"hide-icon\"),o?.classList.toggle(\"hide-icon\"));document.getElementById(\"toggle-dark-mode\")?.addEventListener(\"click\",()=>{e?.classList.toggle(\"dark\"),s?.classList.toggle(\"hide-icon\"),o?.classList.toggle(\"hide-icon\"),localStorage.setItem(\"kevin-them\",e?.classList.contains(\"dark\")?\"true\":\"false\")});"],["/home/kevin/KevWorkspace/kevfiorentino.com/src/components/Header.astro?astro&type=script&index=1&lang.ts","const e=document.getElementById(\"mobile-menu\"),t=document.getElementById(\"menu-open\"),n=document.getElementById(\"menu-close\");document.getElementById(\"toggle-mobile-menu\")?.addEventListener(\"click\",()=>{e?.classList.toggle(\"hidden\"),t?.classList.toggle(\"hidden\"),n?.classList.toggle(\"hidden\")});"]],"assets":["/_astro/_slug_.tm9Ry3pu.css","/_astro/_slug_.CuGFndA2.css","/favicon.ico","/kev-logo-black.svg","/kev-logo-white.svg","/kevin.webp","/cv/kevin-fiorentino.pdf","/images/bitcoin-cli-step1.webp","/images/bitcoin-cli-step2.webp","/images/bitcoin-cli-step3.webp","/images/bitcoin-cli-step4.webp","/images/bitcoin-cli-step6.webp","/images/bitcoin-cli1.png","/images/bitcoin-flujo-bip.webp","/images/bitcoin-forks.png","/images/bitcoin-hd-wallet.webp","/images/bitcoin-inputs-outputs.png","/images/bitcoin-keys.webp","/images/bitcoin-merkle-tree-corrupted.webp","/images/bitcoin-merkle-tree.webp","/images/bitcoin-mnemonic.webp","/images/bitcoin-private-keys.webp","/images/bitcoin-public-keys.webp","/images/bitcoin-script-execution.gif","/images/bitcoin-wallet.webp","/images/openzeppelin-upgradeable1.png","/images/openzeppelin-upgradeable2.png","/images/solana-components.jpg","/images/solana-eclipse-attack.png","/images/solana-generales-bizantinos.png","/images/solana-multiplexacion.png","/images/solana-nodos.png","/images/solana-pipelining.png","/images/solidity-diff-sender-origin.jpg","/tech/angular.webp","/tech/apache.webp","/tech/bitcoin.png","/tech/blockchain.png","/tech/docker.webp","/tech/elasticsearch.webp","/tech/ethereum.webp","/tech/firebase.webp","/tech/heroku.webp","/tech/ibm-cloud.webp","/tech/ipfs.webp","/tech/javascript.webp","/tech/linode.webp","/tech/mongodb.webp","/tech/mysql.webp","/tech/nginx.webp","/tech/nodejs.webp","/tech/openzeppelin.png","/tech/php.webp","/tech/react.webp","/tech/rust.webp","/tech/solana.webp","/tech/solidity.webp","/tech/typescript.webp","/tech/1-front-end/angular.webp","/tech/2-backend/nodejs.webp","/tech/2-backend/rust.webp","/tech/7-blockchain/ethereum.webp","/tech/7-blockchain/solana.webp","/404.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"uGZYLmpOn4yFn8P6JvltyWuopkhL6kpFAJucQ2wO6zk="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
