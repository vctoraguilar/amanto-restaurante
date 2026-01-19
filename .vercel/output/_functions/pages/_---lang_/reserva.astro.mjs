/* empty css                                    */
import { a as createAstro, c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_BPEG-9I1.mjs';
import 'kleur/colors';
import { $ as $$Layout, e as esTranslations, a as enTranslations, b as $$LanguageSwitcher } from '../../chunks/en_D7yQ0LHX.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { c as cn } from '../../chunks/utils_B05Dmz_H.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState("TOP");
  const rotateDirection = (currentDirection) => {
    const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise ? (currentIndex - 1 + directions.length) % directions.length : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };
  const movingMap = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, #f49f13 0%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, #f49f13 0%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, #f49f13 0%, rgba(255, 255, 255, 0) 100%)",
    RIGHT: "radial-gradient(16.2% 41.199999999999996% at 100% 50%, #f49f13 0%, rgba(255, 255, 255, 0) 100%)"
  };
  const highlight = "radial-gradient(75% 181.15942028985506% at 50% 50%, #f49f13 0%, rgba(255, 255, 255, 0) 100%)";
  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1e3);
      return () => clearInterval(interval);
    }
  }, [hovered]);
  return /* @__PURE__ */ jsxs(
    Tag,
    {
      onMouseEnter: (event) => {
        setHovered(true);
      },
      onMouseLeave: () => setHovered(false),
      className: cn(
        "relative flex rounded-full border  content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
        containerClassName
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]",
              className
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: cn(
              "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
            ),
            style: {
              filter: "blur(2px)",
              position: "absolute",
              width: "100%",
              height: "100%"
            },
            initial: { background: movingMap[direction] },
            animate: {
              background: hovered ? [movingMap[direction], highlight] : movingMap[direction]
            },
            transition: { ease: "linear", duration: duration ?? 1 }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]" })
      ]
    }
  );
}

const $$Astro = createAstro("https://amantorestaurante.com");
const $$Reserva = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Reserva;
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
  const pageTitle = t("reserve.title", currentLocale);
  const description = t("reserve.description", currentLocale);
  const buttonText = t("reserve.button", currentLocale);
  const aboutText = t("nav.about", currentLocale);
  const menuText = t("nav.menu", currentLocale);
  const reserveText = t("nav.reserve", currentLocale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Reserva - Amanto`, "description": description, "lang": currentLocale, "data-astro-cid-sdjklkv5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-black overflow-hidden w-screen h-screen relative" data-astro-cid-sdjklkv5> <!-- Imagen de fondo --> <img class="absolute top-0 left-0 w-full h-full object-cover z-0" alt="Amanto Restaurante" src="/images/interior1.webp" data-astro-cid-sdjklkv5> <!-- Capa oscura semi-transparente --> <div class="absolute top-0 left-0 md:left-[18.9%] w-full md:w-[81.1%] h-full md:h-[86%] z-10" style="background-color: rgba(0, 0, 0, 0.9);" data-astro-cid-sdjklkv5> <!-- Contenido central --> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] md:w-[29%] flex flex-col items-center px-4 md:px-0" data-astro-cid-sdjklkv5> <!-- Título principal --> <h1 class="font-medium text-white text-sm md:text-base text-center tracking-[0.06em] md:tracking-[0.096em] leading-normal" style="font-family: 'Figtree', -apple-system, BlinkMacSystemFont, sans-serif; font-weight: 500;" data-astro-cid-sdjklkv5> ${pageTitle} </h1> <!-- Descripción --> <p class="mt-[40px] md:mt-[63px] w-full font-normal text-white text-sm md:text-base text-center tracking-[0.03em] md:tracking-[0.048em] leading-5 md:leading-6" style="font-family: 'Questrial', -apple-system, BlinkMacSystemFont, sans-serif;" data-astro-cid-sdjklkv5> ${description} </p> <!-- Botón de reserva --> ${renderComponent($$result2, "HoverBorderGradient", HoverBorderGradient, { "as": "a", "containerClassName": "mt-[70px] md:mt-[70px]", "className": "", "duration": 1.5, "client:load": true, "client:component-hydration": "load", "client:component-path": "F:/Amanto/web_amanto/src/components/ui/HoverBorderGradient", "client:component-export": "HoverBorderGradient", "data-astro-cid-sdjklkv5": true }, { "default": ($$result3) => renderTemplate` <span class="text-sm md:text-base tracking-[0.03em] md:tracking-[0.048em] whitespace-nowrap" style="font-family: 'Figtree', -apple-system, BlinkMacSystemFont, sans-serif; font-weight: 500;" data-astro-cid-sdjklkv5> ${buttonText} </span> ` })} </div> </div> <!-- Logo superior izquierdo --> <a${addAttribute(`/${currentLocale}`, "href")} class="absolute top-[3.5vh] left-[3.4vw] w-[60px] md:w-[9.8vw] h-auto z-50 cursor-pointer logo-container" role="img" aria-label="Amanto logo" data-astro-cid-sdjklkv5> <!-- Logo para desktop --> <img src="/images/logo.svg" alt="Amanto" class="hidden md:block w-full h-full object-contain logo-img" style="transition: filter 0.3s ease;" data-astro-cid-sdjklkv5> <!-- Favicon para móvil --> <svg class="block md:hidden w-[50%] h-[50%] transition-colors duration-300" viewBox="0 0 32 31.72" xmlns="http://www.w3.org/2000/svg" data-astro-cid-sdjklkv5> <path class="logo-icon" fill="#ffffff" d="M16,14.98C8,9.26,0,3.83,0,0v31.72h6.43c1.13-3.05,5.3-6.21,9.57-9.16,4.26,2.95,8.44,6.11,9.57,9.16h6.43V0c0,3.83-8,9.26-16,14.98ZM6.43,22.31v-6.99c.94,1.08,2.46,2.28,4.24,3.56-1.5,1.15-2.94,2.29-4.24,3.43ZM21.33,18.88c1.78-1.27,3.3-2.47,4.24-3.56v6.99c-1.3-1.14-2.73-2.28-4.24-3.43Z" data-astro-cid-sdjklkv5></path> </svg> </a> <!-- Selector de idioma superior derecho --> ${renderComponent($$result2, "LanguageSwitcher", $$LanguageSwitcher, { "currentLocale": currentLocale, "data-astro-cid-sdjklkv5": true })} <!-- Navegación inferior --> <nav id="bottom-nav" class="absolute bottom-[6vh] left-0 right-0 flex md:justify-center justify-start md:gap-[8.5vw] gap-[8vw] z-50 md:overflow-visible overflow-x-auto px-4 md:px-0 scrollbar-hide" role="navigation" aria-label="Main navigation" data-astro-cid-sdjklkv5> <a${addAttribute(`/${currentLocale}/nosotros`, "href")} class="nav-link text-white md:text-2xl text-sm md:tracking-[14.40px] tracking-[6px] leading-normal font-light whitespace-nowrap relative inline-block pb-1" style="font-family: 'Figtree', -apple-system, BlinkMacSystemFont, sans-serif; font-weight: 300;" data-astro-cid-sdjklkv5> ${aboutText} </a> <a${addAttribute(`/${currentLocale}/carta`, "href")} class="nav-link text-white md:text-2xl text-sm md:tracking-[14.40px] tracking-[6px] leading-normal font-light whitespace-nowrap relative inline-block pb-1" style="font-family: 'Figtree', -apple-system, BlinkMacSystemFont, sans-serif; font-weight: 300;" data-astro-cid-sdjklkv5> ${menuText} </a> <a${addAttribute(`https://amanto.meitre.com/`, "href")} class="nav-link active-link text-white md:text-2xl text-sm md:tracking-[14.40px] tracking-[6px] leading-normal font-light whitespace-nowrap relative inline-block pb-1" style="font-family: 'Figtree', -apple-system, BlinkMacSystemFont, sans-serif; font-weight: 300;" data-astro-cid-sdjklkv5> ${reserveText} </a> </nav> </div>   ` })}`;
}, "F:/Amanto/web_amanto/src/pages/[...lang]/reserva.astro", void 0);

const $$file = "F:/Amanto/web_amanto/src/pages/[...lang]/reserva.astro";
const $$url = "/[...lang]/reserva";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Reserva,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
