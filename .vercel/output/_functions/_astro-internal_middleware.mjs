import 'es-module-lexer';
import './chunks/astro-designed-error-pages_CSCekMU8.mjs';
import 'cookie';
import { s as sequence } from './chunks/index_DUE1viE2.mjs';

const onRequest$1 = async (context, next) => {
  const { url, request } = context;
  if (url.pathname === "/") {
    const acceptLanguage = request.headers.get("accept-language") || "";
    const isSpanish = /^es\b/i.test(acceptLanguage) || /\bes\b/i.test(acceptLanguage.split(",")[0]);
    if (isSpanish) {
      return new Response(null, {
        status: 307,
        // Temporary Redirect
        headers: {
          "Location": "/es"
        }
      });
    }
    return next();
  }
  return next();
};

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
