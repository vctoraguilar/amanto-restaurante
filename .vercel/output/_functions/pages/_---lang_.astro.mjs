/* empty css                                 */
import { a as createAstro, c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_BPEG-9I1.mjs';
import 'kleur/colors';
import { $ as $$Layout, e as esTranslations, a as enTranslations, b as $$LanguageSwitcher } from '../chunks/en_D7yQ0LHX.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://amantorestaurante.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { lang } = Astro2.params;
  const supportedLangs = ["en", "es"];
  if (lang && !supportedLangs.includes(lang)) {
    return Astro2.redirect("/");
  }
  const currentLocale = lang || "en";
  function getTranslations(locale) {
    return locale === "es" ? esTranslations : enTranslations;
  }
  function t(key, locale) {
    const translations = getTranslations(locale);
    const keys = key.split(".");
    let value = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return typeof value === "string" ? value : key;
  }
  const pageTitle = t("nav.home", currentLocale);
  const aboutText = t("nav.about", currentLocale);
  const menuText = t("nav.menu", currentLocale);
  const reserveText = t("nav.reserve", currentLocale);
  const footerDescription = t("footer.description", currentLocale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Amanto - ${pageTitle}`, "description": footerDescription, "lang": currentLocale, "data-astro-cid-mj6ar3np": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-black overflow-hidden w-screen h-screen relative" data-astro-cid-mj6ar3np> <!-- Imagen de fondo - capa base --> <img id="background-image-1" class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out z-0" alt="Amanto Restaurant" src="/images/mesa.webp" data-astro-cid-mj6ar3np> <!-- Imagen de fondo - capa superior para crossfade --> <img id="background-image-2" class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out z-10 opacity-0" alt="Amanto Restaurant" src="/images/mesa.webp" data-astro-cid-mj6ar3np> <!-- Logo superior izquierdo --> <a${addAttribute(`/${currentLocale}`, "href")} class="absolute top-[3.5vh] left-[3.4vw] w-[60px] md:w-[9.8vw] h-auto z-50 cursor-pointer logo-container" role="img" aria-label="Amanto logo" data-astro-cid-mj6ar3np> <!-- Logo para desktop --> <img src="/images/logo.svg" alt="Amanto" class="hidden md:block w-full h-full object-contain logo-img" style="transition: filter 0.3s ease;" data-astro-cid-mj6ar3np> <!-- Favicon para móvil --> <svg class="block md:hidden w-[50%] h-[50%] transition-colors duration-300" viewBox="0 0 32 31.72" xmlns="http://www.w3.org/2000/svg" data-astro-cid-mj6ar3np> <path class="logo-icon" fill="#ffffff" d="M16,14.98C8,9.26,0,3.83,0,0v31.72h6.43c1.13-3.05,5.3-6.21,9.57-9.16,4.26,2.95,8.44,6.11,9.57,9.16h6.43V0c0,3.83-8,9.26-16,14.98ZM6.43,22.31v-6.99c.94,1.08,2.46,2.28,4.24,3.56-1.5,1.15-2.94,2.29-4.24,3.43ZM21.33,18.88c1.78-1.27,3.3-2.47,4.24-3.56v6.99c-1.3-1.14-2.73-2.28-4.24-3.43Z" data-astro-cid-mj6ar3np></path> </svg> </a> <!-- Selector de idioma superior derecho --> ${renderComponent($$result2, "LanguageSwitcher", $$LanguageSwitcher, { "currentLocale": currentLocale, "data-astro-cid-mj6ar3np": true })} <!-- Navegación inferior --> <nav id="bottom-nav" class="absolute bottom-[10vh] md:bottom-[6vh] left-0 right-0 flex md:flex-row flex-col md:justify-center items-center md:gap-[8.5vw] gap-[4vh] z-50" role="navigation" aria-label="Main navigation" data-astro-cid-mj6ar3np> <a${addAttribute(`/${currentLocale}/nosotros`, "href")} data-bg="/images/nosotros.webp" class="nav-link text-white md:text-2xl text-sm md:tracking-[14.40px] tracking-[6px] leading-normal font-light whitespace-nowrap relative inline-block pb-1" style="font-family: 'Figtree', -apple-system, BlinkMacSystemFont, sans-serif; font-weight: 300;" data-astro-cid-mj6ar3np> ${aboutText} </a> <a${addAttribute(`/${currentLocale}/carta`, "href")} data-bg="/images/plato4.webp" class="nav-link text-white md:text-2xl text-sm md:tracking-[14.40px] tracking-[6px] leading-normal font-light whitespace-nowrap relative inline-block pb-1" style="font-family: 'Figtree', -apple-system, BlinkMacSystemFont, sans-serif; font-weight: 300;" data-astro-cid-mj6ar3np> ${menuText} </a> <a${addAttribute(`https://amanto.meitre.com/`, "href")} data-bg="/images/interior1.webp" class="nav-link text-white md:text-2xl text-sm md:tracking-[14.40px] tracking-[6px] leading-normal font-light whitespace-nowrap relative inline-block pb-1" style="font-family: 'Figtree', -apple-system, BlinkMacSystemFont, sans-serif; font-weight: 300;" data-astro-cid-mj6ar3np> ${reserveText} </a> </nav> </div>   ` })}`;
}, "F:/Amanto/web_amanto/src/pages/[...lang]/index.astro", void 0);

const $$file = "F:/Amanto/web_amanto/src/pages/[...lang]/index.astro";
const $$url = "/[...lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
