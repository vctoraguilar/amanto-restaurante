import 'cookie';
import 'kleur/colors';
import './chunks/astro-designed-error-pages_CSCekMU8.mjs';
import 'es-module-lexer';
import { f as decodeKey } from './chunks/astro/server_BPEG-9I1.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_DGrkUfmS.mjs';

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
    isIndex: rawRouteData.isIndex
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

const manifest = deserializeManifest({"hrefRoot":"file:///F:/Amanto/web_amanto/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D5rzttB6.js"}],"styles":[{"type":"external","src":"/_astro/carta.Cz9SShdI.css"},{"type":"external","src":"/_astro/carta.DT3McgGL.css"}],"routeData":{"route":"/[...lang]/carta","isIndex":false,"type":"page","pattern":"^(?:\\/(.*?))?\\/carta\\/?$","segments":[[{"content":"...lang","dynamic":true,"spread":true}],[{"content":"carta","dynamic":false,"spread":false}]],"params":["...lang"],"component":"src/pages/[...lang]/carta.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BxLcit7J.js"}],"styles":[{"type":"external","src":"/_astro/carta.Cz9SShdI.css"},{"type":"inline","content":".nav-link[data-astro-cid-3eoq6qem]:after{content:\"\";position:absolute;bottom:0;left:50%;transform:translate(-50%);width:0;height:2px;background:linear-gradient(90deg,#f59e0b,#d97706,#b45309);transition:width .5s ease-in-out}.nav-link[data-astro-cid-3eoq6qem]:hover:after{width:100px}.active-link[data-astro-cid-3eoq6qem]:after{width:100px}body{overflow:hidden}.scrollbar-hide[data-astro-cid-3eoq6qem]::-webkit-scrollbar{display:none}.scrollbar-hide[data-astro-cid-3eoq6qem]{-ms-overflow-style:none;scrollbar-width:none}#section-title[data-astro-cid-3eoq6qem],#section-content[data-astro-cid-3eoq6qem]{transition:opacity .6s cubic-bezier(.25,.46,.45,.94);position:relative}#section-title-wrapper[data-astro-cid-3eoq6qem],#section-content-wrapper[data-astro-cid-3eoq6qem]{position:relative;min-height:1.5em}@media (max-width: 767px){#section-title[data-astro-cid-3eoq6qem]{white-space:normal;word-break:break-word}#section-content-wrapper[data-astro-cid-3eoq6qem]{width:100%;max-width:100%}#section-content-wrapper[data-astro-cid-3eoq6qem] p[data-astro-cid-3eoq6qem]{flex:1;min-width:0}#section-content[data-astro-cid-3eoq6qem]{margin-left:.5rem;margin-right:.5rem}}\n"}],"routeData":{"route":"/[...lang]/nosotros","isIndex":false,"type":"page","pattern":"^(?:\\/(.*?))?\\/nosotros\\/?$","segments":[[{"content":"...lang","dynamic":true,"spread":true}],[{"content":"nosotros","dynamic":false,"spread":false}]],"params":["...lang"],"component":"src/pages/[...lang]/nosotros.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BAfEkor5.js"}],"styles":[{"type":"external","src":"/_astro/carta.Cz9SShdI.css"},{"type":"inline","content":".nav-link[data-astro-cid-sdjklkv5]:after{content:\"\";position:absolute;bottom:0;left:50%;transform:translate(-50%);width:0;height:2px;background:linear-gradient(90deg,#f59e0b,#d97706,#b45309);transition:width .5s ease-in-out}.nav-link[data-astro-cid-sdjklkv5]:hover:after{width:100px}.active-link[data-astro-cid-sdjklkv5]:after{width:100px}body{overflow:hidden}.scrollbar-hide[data-astro-cid-sdjklkv5]::-webkit-scrollbar{display:none}.scrollbar-hide[data-astro-cid-sdjklkv5]{-ms-overflow-style:none;scrollbar-width:none}\n"}],"routeData":{"route":"/[...lang]/reserva","isIndex":false,"type":"page","pattern":"^(?:\\/(.*?))?\\/reserva\\/?$","segments":[[{"content":"...lang","dynamic":true,"spread":true}],[{"content":"reserva","dynamic":false,"spread":false}]],"params":["...lang"],"component":"src/pages/[...lang]/reserva.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CBuI8C2v.js"}],"styles":[{"type":"external","src":"/_astro/carta.Cz9SShdI.css"},{"type":"inline","content":".nav-link[data-astro-cid-mj6ar3np]:after{content:\"\";position:absolute;bottom:0;left:50%;transform:translate(-50%);width:0;height:2px;background:linear-gradient(90deg,#f59e0b,#d97706,#b45309);transition:width .5s ease-in-out}.nav-link[data-astro-cid-mj6ar3np]:hover:after{width:100px}body{overflow:hidden}\n"}],"routeData":{"route":"/[...lang]","isIndex":true,"type":"page","pattern":"^(?:\\/(.*?))?\\/?$","segments":[[{"content":"...lang","dynamic":true,"spread":true}]],"params":["...lang"],"component":"src/pages/[...lang]/index.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://amantorestaurante.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["F:/Amanto/web_amanto/src/pages/[...lang]/carta.astro",{"propagation":"none","containsHead":true}],["F:/Amanto/web_amanto/src/pages/[...lang]/index.astro",{"propagation":"none","containsHead":true}],["F:/Amanto/web_amanto/src/pages/[...lang]/nosotros.astro",{"propagation":"none","containsHead":true}],["F:/Amanto/web_amanto/src/pages/[...lang]/reserva.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:src/pages/[...lang]/nosotros@_@astro":"pages/_---lang_/nosotros.astro.mjs","\u0000@astro-page:src/pages/[...lang]/index@_@astro":"pages/_---lang_.astro.mjs","\u0000@astro-page:src/pages/[...lang]/carta@_@astro":"pages/_---lang_/carta.astro.mjs","\u0000@astro-page:src/pages/[...lang]/reserva@_@astro":"pages/_---lang_/reserva.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","F:/Amanto/web_amanto/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_4x8w4NkH.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.D5rzttB6.js","/astro/hoisted.js?q=1":"_astro/hoisted.BAfEkor5.js","/astro/hoisted.js?q=2":"_astro/hoisted.CBuI8C2v.js","@astrojs/react/client.js":"_astro/client.CLNex8iQ.js","F:/Amanto/web_amanto/src/components/ui/TracingBeamContainer.tsx":"_astro/TracingBeamContainer.CuMkVcU2.js","F:/Amanto/web_amanto/src/components/ui/HoverBorderGradient":"_astro/HoverBorderGradient.Bs0QQclt.js","/astro/hoisted.js?q=3":"_astro/hoisted.BxLcit7J.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/carta.Cz9SShdI.css","/_astro/carta.DT3McgGL.css","/favicon.svg","/social-preview.png","/images/arrow.svg","/images/bebida1.webp","/images/bebida2.webp","/images/bebida3.webp","/images/interior1.webp","/images/interior2.webp","/images/interior3.webp","/images/logo-full.svg","/images/logo.svg","/images/mesa.webp","/images/nosotros.webp","/images/plato1.webp","/images/plato2.webp","/images/plato3.webp","/images/plato4.webp","/images/plato5.webp","/images/README.md","/images/servicio.webp","/images/tartaleta-sauco-airampo.webp","/_astro/client.CLNex8iQ.js","/_astro/hoisted.BAfEkor5.js","/_astro/hoisted.BxLcit7J.js","/_astro/hoisted.CBuI8C2v.js","/_astro/hoisted.D5rzttB6.js","/_astro/HoverBorderGradient.Bs0QQclt.js","/_astro/index.BKN2WBQQ.js","/_astro/TracingBeamContainer.CuMkVcU2.js","/_astro/utils.D2P7wVsF.js","/_astro/ViewTransitions.astro_astro_type_script_index_0_lang.BScVxmeO.js"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-other-locales","locales":["en","es"],"defaultLocale":"en","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"H8ebg/g71PB76TNMB0P8Lq8SudQV1UgwYh2Hop9v2fw=","experimentalEnvGetSecretEnabled":false});

export { manifest };
