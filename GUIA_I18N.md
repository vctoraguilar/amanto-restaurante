# Guía de Implementación de i18n en Astro 4.0

Esta guía explica cómo se ha implementado la internacionalización (i18n) en tu sitio web usando las capacidades nativas de Astro 4.0.

## 📋 Resumen de la Implementación

Se ha configurado el sistema de internacionalización con las siguientes características:

- ✅ Configuración de rutas con prefijos de idioma (`/es`, `/en`)
- ✅ Middleware para detectar idioma del navegador
- ✅ Archivos JSON de traducción
- ✅ Componente para cambiar idioma
- ✅ Utilidades helper para generar enlaces localizados

---

## 1. Configuración de Rutas (astro.config.mjs)

La configuración de i18n se ha añadido a `astro.config.mjs`:

```javascript
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'es'],
  routing: {
    prefixDefaultLocale: true, // Todos los idiomas tienen prefijo
  },
}
```

**Características:**
- Idioma por defecto: `en` (inglés)
- Idiomas disponibles: `en` y `es`
- Todos los idiomas tienen prefijo: `/en` y `/es` (no hay ruta sin prefijo)

---

## 2. Middleware para Detección de Idioma (src/middleware.ts)

El middleware intercepta las peticiones a la raíz (`/`) y:

1. Lee la cabecera `Accept-Language` del navegador
2. Detecta si el idioma preferido es español (`es`)
3. Redirige a `/es` si es español, o a `/en` en caso contrario

**Funcionamiento:**
- Si el navegador tiene español como idioma preferido → redirige a `/es`
- Para cualquier otro idioma → redirige a `/en`

**Nota:** El middleware solo actúa en la raíz. Una vez que el usuario está en una ruta con prefijo (ej: `/es/carta`), el enrutamiento normal de Astro se encarga del resto.

---

## 3. Archivos de Traducción (src/i18n/)

Los archivos JSON de traducción se encuentran en:

- `src/i18n/es.json` - Traducciones en español
- `src/i18n/en.json` - Traducciones en inglés

**Estructura de las traducciones:**
```json
{
  "nav": {
    "home": "Inicio",
    "about": "NOSOTROS",
    "menu": "CARTA",
    "reserve": "RESERVA"
  },
  "about": { ... },
  "reserve": { ... },
  "menu": { ... },
  "footer": { ... }
}
```

Astro carga automáticamente estos archivos según el prefijo de idioma en la URL.

---

## 4. Uso del Módulo `astro:i18n`

### Funciones Disponibles

#### `getI18nInfo(url)`
Retorna información sobre la configuración de i18n:
```typescript
import { getI18nInfo } from 'astro:i18n';

const { locale, defaultLocale, locales } = getI18nInfo(Astro.url);
// locale: 'es' | 'en' (idioma actual)
// defaultLocale: 'en' (idioma por defecto)
// locales: ['en', 'es'] (todos los idiomas disponibles)
```

#### `t(key, url)`
Obtiene una traducción del archivo JSON:
```typescript
import { t } from 'astro:i18n';

const texto = t('nav.home', Astro.url); // Retorna 'Inicio' o 'HOME' según el idioma
```

#### `getRelativeLocaleUrl(locale, path, url)`
Genera una URL relativa para otro idioma:
```typescript
import { getRelativeLocaleUrl } from 'astro:i18n';

const url = getRelativeLocaleUrl('es', '/carta', Astro.url);
// Retorna '/es/carta' si estás en /en/carta
```

---

## 5. Ejemplo de Página (src/pages/[lang]/index.astro)

Ejemplo completo de cómo usar i18n en una página:

```astro
---
import { getI18nInfo, t } from 'astro:i18n';
import LanguageSwitcher from '../../components/LanguageSwitcher.astro';

const { locale: currentLocale } = getI18nInfo(Astro.url);
const pageTitle = t('nav.home', Astro.url);
const aboutText = t('nav.about', Astro.url);
---

<Layout title={pageTitle}>
  <h1>{pageTitle}</h1>
  <LanguageSwitcher />
  <a href={`/${currentLocale}/nosotros`}>{aboutText}</a>
</Layout>
```

**Puntos importantes:**
- Usa `[lang]` en el nombre del archivo para crear rutas dinámicas
- Importa `getI18nInfo` y `t` de `astro:i18n`
- Pasa `Astro.url` como argumento a `getI18nInfo()` y `t()`
- Usa `t('clave', Astro.url)` para obtener traducciones
- Usa `locale` (renombrado como `currentLocale`) para generar enlaces con prefijo

---

## 6. Componente LanguageSwitcher (src/components/LanguageSwitcher.astro)

Este componente permite cambiar de idioma manteniendo la página actual.

**Características:**
- Detecta automáticamente el idioma actual
- Muestra un enlace al otro idioma
- Preserva la ruta actual al cambiar de idioma
- Ejemplo: desde `/es/carta` → `/en/carta`

**Uso:**
```astro
---
import LanguageSwitcher from '../components/LanguageSwitcher.astro';
---

<LanguageSwitcher />
```

**Funcionamiento interno:**
1. Obtiene el idioma actual con `getI18nInfo()`
2. Encuentra el otro idioma disponible
3. Extrae la ruta actual sin prefijo
4. Genera la URL del otro idioma usando `getLocalizedPath()`

---

## 7. Utilidades Helper (src/lib/i18n-utils.ts)

Funciones helper para trabajar con rutas localizadas:

### `getLocalizedPath(locale, path)`
Genera una URL con el prefijo de idioma:
```typescript
import { getLocalizedPath } from '../lib/i18n-utils';

getLocalizedPath('es', '/carta'); // Retorna '/es/carta'
getLocalizedPath('en', '/nosotros'); // Retorna '/en/nosotros'
getLocalizedPath('es', '/'); // Retorna '/es'
```

### `removeLocalePrefix(pathname, locales)`
Elimina el prefijo de idioma de una ruta:
```typescript
import { removeLocalePrefix } from '../lib/i18n-utils';

removeLocalePrefix('/es/carta', ['es', 'en']); // Retorna '/carta'
removeLocalePrefix('/en', ['es', 'en']); // Retorna '/'
```

---

## 8. Mejores Prácticas para Enlaces

### Enlaces Internos

Siempre incluye el prefijo de idioma en los enlaces internos:

```astro
---
import { getI18nInfo } from 'astro:i18n';
import { getLocalizedPath } from '../lib/i18n-utils';

const { currentLocale } = getI18nInfo();
---

<!-- ✅ Correcto -->
<a href={getLocalizedPath(currentLocale, '/carta')}>Carta</a>

<!-- ❌ Incorrecto (sin prefijo) -->
<a href="/carta">Carta</a>
```

### Enlaces Relativos

Para enlaces relativos, Astro automáticamente añade el prefijo:

```astro
<!-- ✅ Funciona automáticamente -->
<a href="/carta">Carta</a>
```

Sin embargo, es mejor ser explícito usando las utilidades helper.

---

## 9. Estructura de Carpetas Recomendada

```
src/
├── i18n/
│   ├── es.json          # Traducciones en español
│   └── en.json          # Traducciones en inglés
├── pages/
│   └── [lang]/          # Páginas con prefijo de idioma
│       ├── index.astro
│       ├── carta.astro
│       ├── nosotros.astro
│       └── reserva.astro
├── components/
│   └── LanguageSwitcher.astro
├── lib/
│   └── i18n-utils.ts
└── middleware.ts
```

---

## 10. Migración de Páginas Existentes

Para migrar una página existente a usar i18n:

1. **Mover el archivo a `[lang]/`**
   ```
   De: src/pages/carta.astro
   A:  src/pages/[lang]/carta.astro
   ```

2. **Importar las funciones de i18n**
   ```astro
   ---
   import { getI18nInfo, t } from 'astro:i18n';
   
   const { currentLocale } = getI18nInfo();
   ---
   ```

3. **Reemplazar textos hardcodeados con `t()`**
   ```astro
   <!-- Antes -->
   <h1>Carta</h1>
   
   <!-- Después -->
   <h1>{t('menu.title')}</h1>
   ```

4. **Actualizar enlaces para incluir prefijo**
   ```astro
   <!-- Antes -->
   <a href="/nosotros">Nosotros</a>
   
   <!-- Después -->
   <a href={`/${currentLocale}/nosotros`}>Nosotros</a>
   ```

---

## 11. Solución de Problemas

### El middleware no redirige
- Verifica que `src/middleware.ts` exista
- Asegúrate de que el middleware exporte `onRequest`
- Verifica que la configuración de i18n en `astro.config.mjs` sea correcta

### Las traducciones no se cargan
- Verifica que los archivos JSON estén en `src/i18n/`
- Asegúrate de que las claves en `t('clave')` coincidan con las del JSON
- Verifica que la estructura del JSON sea válida

### Los enlaces no mantienen el idioma
- Usa `getLocalizedPath()` para generar enlaces
- Asegúrate de incluir el prefijo de idioma en todas las URLs
- Verifica que `currentLocale` esté disponible en el contexto

---

## 12. Próximos Pasos

1. **Migrar todas las páginas** a la estructura `[lang]/`
2. **Añadir más traducciones** a los archivos JSON según sea necesario
3. **Actualizar componentes** para usar `t()` en lugar de textos hardcodeados
4. **Probar la navegación** entre idiomas en todas las páginas
5. **Verificar SEO** con herramientas como Google Search Console

---

## 📚 Recursos Adicionales

- [Documentación oficial de Astro i18n](https://docs.astro.build/en/guides/internationalization/)
- [Guía de rutas en Astro](https://docs.astro.build/en/core-concepts/routing/)
- [Middleware en Astro](https://docs.astro.build/en/guides/middleware/)

