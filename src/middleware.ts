import type { MiddlewareHandler } from 'astro';

/**
 * Middleware para detectar el idioma del navegador y redirigir desde la raíz (/)
 * 
 * Este middleware intercepta las peticiones a la raíz y:
 * - Detecta el idioma preferido del navegador (cabecera Accept-Language)
 * - Redirige a /es si el idioma es español
 * - Redirige a /en para cualquier otro idioma
 */
export const onRequest: MiddlewareHandler = async (context, next) => {
  const { url, request } = context;
  
  // Solo procesar si la URL es exactamente la raíz
  if (url.pathname === '/') {
    // Obtener el idioma preferido del navegador
    const acceptLanguage = request.headers.get('accept-language') || '';
    
    // Detectar si el idioma preferido es español
    // Buscar 'es' en los primeros caracteres de la cabecera Accept-Language
    const isSpanish = /^es\b/i.test(acceptLanguage) || 
                     /\bes\b/i.test(acceptLanguage.split(',')[0]);
    
    // Redirigir según el idioma detectado
    const locale = isSpanish ? 'es' : 'en';
    
    return new Response(null, {
      status: 307, // Temporary Redirect
      headers: {
        'Location': `/${locale}`,
      },
    });
  }
  
  // Continuar con la petición normal para otras rutas
  return next();
};

