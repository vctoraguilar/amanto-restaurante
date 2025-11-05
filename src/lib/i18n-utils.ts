/**
 * Utilidades para trabajar con i18n en Astro
 * 
 * Funciones helper para generar enlaces con prefijos de idioma
 */

/**
 * Genera una URL con el prefijo de idioma
 * 
 * @param locale - El código del idioma (ej: 'es', 'en')
 * @param path - La ruta sin prefijo (ej: '/carta', '/nosotros')
 * @returns La URL completa con el prefijo (ej: '/es/carta')
 * 
 * @example
 * getLocalizedPath('es', '/carta') // Retorna '/es/carta'
 * getLocalizedPath('en', '/nosotros') // Retorna '/en/nosotros'
 */
export function getLocalizedPath(locale: string, path: string = '/'): string {
  // Eliminar la barra inicial si existe para evitar dobles barras
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // Si la ruta es solo '/', retornar solo el prefijo del idioma
  if (cleanPath === '/') {
    return `/${locale}`;
  }
  
  // Retornar la ruta con el prefijo del idioma
  return `/${locale}${cleanPath}`;
}

/**
 * Obtiene la ruta sin el prefijo de idioma
 * 
 * @param pathname - La ruta completa (ej: '/es/carta')
 * @param locales - Array de locales disponibles (ej: ['es', 'en'])
 * @returns La ruta sin prefijo (ej: '/carta')
 * 
 * @example
 * removeLocalePrefix('/es/carta', ['es', 'en']) // Retorna '/carta'
 * removeLocalePrefix('/carta', ['es', 'en']) // Retorna '/carta'
 */
export function removeLocalePrefix(pathname: string, locales: string[]): string {
  for (const locale of locales) {
    if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
      return pathname.replace(`/${locale}`, '') || '/';
    }
  }
  return pathname;
}

