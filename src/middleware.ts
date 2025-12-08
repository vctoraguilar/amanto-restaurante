import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
  const { url, request } = context;
  
  // 1. Solo interceptamos la raíz exacta
  if (url.pathname === '/') {
    
    // 2. Detectamos el idioma
    const acceptLanguage = request.headers.get('accept-language') || '';
    const isSpanish = /^es\b/i.test(acceptLanguage) || 
                      /\bes\b/i.test(acceptLanguage.split(',')[0]);
    
    // 3. Lógica NUEVA:
    // Si es español, lo mandamos a /es
    if (isSpanish) {
       return new Response(null, {
         status: 307, // Temporary Redirect
         headers: {
           'Location': '/es',
         },
       });
    }

    // 4. Si NO es español (es inglés, francés, etc.), NO hacemos nada.
    // Dejamos que Astro renderice la página de inicio (que será la versión en inglés
    // gracias a tu config prefixDefaultLocale: false).
    return next();
  }
  
  return next();
};

