/* empty css                                    */
import { a as createAstro, c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_BPEG-9I1.mjs';
import 'kleur/colors';
import { $ as $$Layout, e as esTranslations, a as enTranslations, b as $$LanguageSwitcher } from '../../chunks/en_D7yQ0LHX.mjs';
import { $ as $$TranslationScript } from '../../chunks/TranslationScript_DavLuZwl.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';
import { useMotionValue, useSpring, useTransform, motion } from 'framer-motion';
import { c as cn } from '../../chunks/utils_B05Dmz_H.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const TracingBeamContainer = ({
  children,
  className,
  containerId
}) => {
  const ref = useRef(null);
  const contentRef = useRef(null);
  const [svgHeight, setSvgHeight] = useState(0);
  const scrollYProgress = useMotionValue(0);
  useEffect(() => {
    if (contentRef.current) {
      const updateHeight = () => {
        if (contentRef.current) {
          setSvgHeight(contentRef.current.offsetHeight);
        }
      };
      updateHeight();
      const resizeObserver = new ResizeObserver(() => {
        updateHeight();
      });
      resizeObserver.observe(contentRef.current);
      let container = null;
      if (containerId) {
        const cleanId = containerId.startsWith(".") ? containerId : `.${containerId}`;
        container = document.querySelector(cleanId);
      } else {
        container = ref.current?.closest(".custom-scrollbar") || ref.current?.closest('[style*="overflow-y"]') || document.querySelector(".custom-scrollbar");
      }
      if (!container) {
        console.warn("TracingBeamContainer: No scroll container found");
        return () => resizeObserver.disconnect();
      }
      const handleScroll = () => {
        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight - container.clientHeight;
        const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
        scrollYProgress.set(progress);
      };
      container.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => {
        container?.removeEventListener("scroll", handleScroll);
        resizeObserver.disconnect();
      };
    }
  }, [containerId, scrollYProgress]);
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90
    }
  );
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      ref,
      className: cn("relative w-full", className),
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -left-16 md:-left-16 top-0 z-50 pointer-events-none", style: { width: "20px" }, children: /* @__PURE__ */ jsxs(
          "svg",
          {
            viewBox: `0 0 20 ${Math.max(svgHeight, 100)}`,
            width: "20",
            height: Math.max(svgHeight, 100),
            className: "block",
            style: { minHeight: "100vh" },
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ jsx(
                motion.path,
                {
                  d: `M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`,
                  fill: "none",
                  stroke: "#9091A0",
                  strokeOpacity: "0.3",
                  transition: {
                    duration: 10
                  }
                }
              ),
              /* @__PURE__ */ jsx(
                motion.path,
                {
                  d: `M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`,
                  fill: "none",
                  stroke: "url(#gradient)",
                  strokeWidth: "1.5",
                  className: "motion-reduce:hidden",
                  transition: {
                    duration: 10
                  }
                }
              ),
              /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs(
                motion.linearGradient,
                {
                  id: "gradient",
                  gradientUnits: "userSpaceOnUse",
                  x1: "0",
                  x2: "0",
                  y1,
                  y2,
                  children: [
                    /* @__PURE__ */ jsx("stop", { stopColor: "#fbbf24", stopOpacity: "0" }),
                    /* @__PURE__ */ jsx("stop", { stopColor: "#f59e0b" }),
                    /* @__PURE__ */ jsx("stop", { offset: "0.325", stopColor: "#d97706" }),
                    /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#d97706", stopOpacity: "0" })
                  ]
                }
              ) })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { ref: contentRef, className: "pl-0 md:pl-0", children })
      ]
    }
  );
};

const $$Astro = createAstro("https://amantorestaurante.com");
const $$Carta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Carta;
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
  const pageTitle = t("menu.title", currentLocale);
  const pageDescription = t("menu.description", currentLocale);
  const aboutText = t("nav.about", currentLocale);
  const menuText = t("nav.menu", currentLocale);
  const reserveText = t("nav.reserve", currentLocale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${pageTitle} - Amanto Restaurante`, "description": pageDescription, "lang": currentLocale, "data-astro-cid-jyl5l3e5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-black overflow-hidden w-screen h-screen relative" data-astro-cid-jyl5l3e5> <!-- Imagen de fondo --> <img class="absolute top-0 left-0 w-full h-full object-cover z-0" alt="Amanto Carta" src="/images/plato4.webp" data-astro-cid-jyl5l3e5> <!-- Capa oscura semi-transparente con scroll --> <div class="absolute top-0 left-0 md:left-[18.9%] w-full md:w-[81.1%] h-full md:h-[86%] z-10 overflow-y-auto custom-scrollbar" style="background-color: rgba(0, 0, 0, 0.7);" data-astro-cid-jyl5l3e5> <section class="py-20 px-4" id="menu-section" data-astro-cid-jyl5l3e5> <div class="container mx-auto max-w-7xl" data-astro-cid-jyl5l3e5> <div class="lg:grid lg:grid-cols-[250px_1fr] lg:gap-12" data-astro-cid-jyl5l3e5> <!-- Left Column - Categories Navigation (Fixed) --> <div class="lg:relative" data-astro-cid-jyl5l3e5> <aside class="categories-sidebar mb-8 lg:mb-0" data-astro-cid-jyl5l3e5> <h3 class="text-sm font-semibold text-white/80 uppercase tracking-wider mb-6" data-astro-cid-jyl5l3e5>Categorías</h3> <nav class="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide" data-astro-cid-jyl5l3e5> <a href="#aperitivos" class="menu-category-link whitespace-nowrap" data-category="aperitivos" data-astro-cid-jyl5l3e5> <span data-translate="menu.appetizers" data-astro-cid-jyl5l3e5>Aperitivos</span> </a> <a href="#sopas" class="menu-category-link whitespace-nowrap" data-category="sopas" data-astro-cid-jyl5l3e5> <span data-translate="menu.soups" data-astro-cid-jyl5l3e5>Sopas</span> </a> <a href="#fondos" class="menu-category-link whitespace-nowrap" data-category="fondos" data-astro-cid-jyl5l3e5> <span data-translate="menu.mainCourses" data-astro-cid-jyl5l3e5>Fondos</span> </a> <a href="#postres" class="menu-category-link whitespace-nowrap" data-category="postres" data-astro-cid-jyl5l3e5> <span data-translate="menu.desserts" data-astro-cid-jyl5l3e5>Postres</span> </a> <a href="#compartir" class="menu-category-link whitespace-nowrap" data-category="compartir" data-astro-cid-jyl5l3e5> <span data-translate="menu.toShare" data-astro-cid-jyl5l3e5>Para Compartir</span> </a> <a href="#cocteles" class="menu-category-link whitespace-nowrap" data-category="cocteles" data-astro-cid-jyl5l3e5> <span data-translate="menu.cocktails" data-astro-cid-jyl5l3e5>Cócteles</span> </a> <a href="#vinos" class="menu-category-link whitespace-nowrap" data-category="vinos" data-astro-cid-jyl5l3e5> <span data-translate="menu.wines" data-astro-cid-jyl5l3e5>Vinos</span> </a> <a href="#bebidas" class="menu-category-link whitespace-nowrap" data-category="bebidas" data-astro-cid-jyl5l3e5> <span data-translate="menu.refreshing" data-astro-cid-jyl5l3e5>Refrescantes</span> </a> </nav> </aside> </div> <!-- Right Column - Menu Content with Tracing Beam --> ${renderComponent($$result2, "TracingBeamContainer", TracingBeamContainer, { "client:load": true, "containerId": "custom-scrollbar", "className": "relative z-0", "client:component-hydration": "load", "client:component-path": "F:/Amanto/web_amanto/src/components/ui/TracingBeamContainer.tsx", "client:component-export": "TracingBeamContainer", "data-astro-cid-jyl5l3e5": true }, { "default": ($$result3) => renderTemplate` <div data-astro-cid-jyl5l3e5> <div class="space-y-20" data-astro-cid-jyl5l3e5> <!-- Aperitivos --> <div id="aperitivos" class="scroll-mt-24" data-astro-cid-jyl5l3e5> <div class="relative h-64 rounded-2xl overflow-hidden mb-8" data-astro-cid-jyl5l3e5> <img src="/images/plato1.webp" alt="Aperitivos Amanto" class="w-full h-full object-cover" data-astro-cid-jyl5l3e5> <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end" data-astro-cid-jyl5l3e5> <h2 class="text-3xl md:text-4xl font-bold text-white p-8" data-translate="menu.appetizers" data-astro-cid-jyl5l3e5>
Aperitivos
</h2> </div> </div> <div class="grid grid-cols-1 gap-6" data-astro-cid-jyl5l3e5> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text" data-translate="menu.dishes.tiradito_alpaca" data-astro-cid-jyl5l3e5>TIRADITO DE ALPACA</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 40</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.tiradito_alpaca_desc" data-astro-cid-jyl5l3e5>
Finos trozos de alpaca bañadas con leche de tigre de castañas, acompañadas de chalaquita, llullucha, trozos de camote, choclo desgranado.
</p> </div> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text" data-translate="menu.dishes.berenjena" data-astro-cid-jyl5l3e5>BERENJENA EMPANIZADA</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 30</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.berenjena_desc" data-astro-cid-jyl5l3e5>
Berenjena empanizada en una capa de panko, bañadas en salsa de pesto de tomate, acompañadas con Kallampas.
</p> </div> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text" data-translate="menu.dishes.ensalada_amanto" data-astro-cid-jyl5l3e5>ENSALADA AMANTO</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 35</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.ensalada_amanto_desc" data-astro-cid-jyl5l3e5>
Una mezcla de hojas del valle acompañadas de trozos de manzana, tomate cherry, palta, palmito, espárragos, flor de trucha y vinagreta de la casa.
</p> </div> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text" data-translate="menu.dishes.langostinos_andinos" data-astro-cid-jyl5l3e5>LANGOSTINOS ANDINOS</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 45</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.langostinos_andinos_desc" data-astro-cid-jyl5l3e5>
Langostinos empanizados en una fina capa de quinua acompañados de boli camotes rellenos de queso, chalaquita de quinua y una dulce mermelada de ají amarillo.
</p> </div> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text" data-translate="menu.dishes.causa_langostinos" data-astro-cid-jyl5l3e5>CAUSA DE LANGOSTINOS</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 42</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.causa_langostinos_desc" data-astro-cid-jyl5l3e5>
Langostinos en salsa golf, palta, masa de causa, huevo de codorniz, tomate cherry, todo acompañado con salsa de tumbo o maracuyá.
</p> </div> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text" data-translate="menu.dishes.tiradito_trucha" data-astro-cid-jyl5l3e5>TIRADITO DE TRUCHA</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 38</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.tiradito_trucha_desc" data-astro-cid-jyl5l3e5>
Láminas de trucha en leche de tigre estilo Amanto. Acompañado de choclo, camote crocante y chulpi.
</p> </div> </div> </div> <!-- Sopas --> <div id="sopas" class="scroll-mt-24" data-astro-cid-jyl5l3e5> <div class="relative h-64 rounded-2xl overflow-hidden mb-8" data-astro-cid-jyl5l3e5> <img src="/images/plato2.webp" alt="Sopas Amanto" class="w-full h-full object-cover" data-astro-cid-jyl5l3e5> <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end" data-astro-cid-jyl5l3e5> <h2 class="text-3xl md:text-4xl font-bold text-white p-8" data-translate="menu.soups" data-astro-cid-jyl5l3e5>
Sopas
</h2> </div> </div> <div class="grid grid-cols-1 gap-6" data-astro-cid-jyl5l3e5> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text" data-translate="menu.dishes.crema_maiz" data-astro-cid-jyl5l3e5>CREMA DE MAÍZ</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 25</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.crema_maiz_desc" data-astro-cid-jyl5l3e5>
Receta ancestral de nuestros abuelos basada en el uso del grano del maíz acompañada de habas, olluco, queso, zanahoria, huevo.
</p> </div> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text" data-translate="menu.dishes.sopa_pollo" data-astro-cid-jyl5l3e5>SOPA DE POLLO</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 22</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.sopa_pollo_desc" data-astro-cid-jyl5l3e5>
Ligero consomé de pechuga de pollo, vegetales de temporada, cabello de ángel y lascas de pollo.
</p> </div> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text" data-translate="menu.dishes.chupe_quinua" data-astro-cid-jyl5l3e5>CHUPE DE QUINUA</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 28</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.chupe_quinua_desc" data-astro-cid-jyl5l3e5>
Mix de quinuas sumergidos con vegetales de temporada, haba, papa, leche y queso.
</p> </div> </div> </div> <!-- Fondos --> <div id="fondos" class="scroll-mt-24" data-astro-cid-jyl5l3e5> <div class="relative h-64 rounded-2xl overflow-hidden mb-8" data-astro-cid-jyl5l3e5> <img src="/images/plato3.webp" alt="Fondos Amanto" class="w-full h-full object-cover" data-astro-cid-jyl5l3e5> <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end" data-astro-cid-jyl5l3e5> <h2 class="text-3xl md:text-4xl font-bold text-white p-8" data-translate="menu.mainCourses" data-astro-cid-jyl5l3e5>
Fondos
</h2> </div> </div> <div class="grid grid-cols-1 gap-6" data-astro-cid-jyl5l3e5> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text flex-1" data-translate="menu.dishes.trucha_oriental" data-astro-cid-jyl5l3e5>TRUCHA EN SALSA ORIENTAL Y CAPCHI DE HABAS</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 50</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.trucha_oriental_desc" data-astro-cid-jyl5l3e5>
Trucha empanizada en mix de quinua y chia acompañado de vegetales orientales y un cremoso capchi de habas andinas en escama de espinaca.
</p> </div> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text flex-1" data-translate="menu.dishes.lomo_alpaca" data-astro-cid-jyl5l3e5>LOMO DE ALPACA EN SALSA TRES PIMIENTAS</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 65</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.lomo_alpaca_desc" data-astro-cid-jyl5l3e5>
Fino lomo de res sobre quinoto verde en un espejo de salsa tres pimientas acompañada de una ligera ensalada.
</p> </div> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text flex-1" data-translate="menu.dishes.enrollado_pollo" data-astro-cid-jyl5l3e5>ENROLLADO DE POLLO CON FETTUCCINI</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 45</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.enrollado_pollo_desc" data-astro-cid-jyl5l3e5>
Pollo y jamón envueltos y mezclados con queso andino, espinaca y albahaca, sobre fettuccini cubiertos por una deliciosa salsa huancaína.
</p> </div> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text" data-translate="menu.dishes.huatia_cuy" data-astro-cid-jyl5l3e5>HUATIA CON CUY</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 70</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.huatia_cuy_desc" data-astro-cid-jyl5l3e5>
Cuy al estilo amanto con un acompañamiento de papas al mortero con rocoto, sobre un espejo de glasé de sauco y ensalada criolla.
</p> </div> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text flex-1" data-translate="menu.dishes.cordero_confitado" data-astro-cid-jyl5l3e5>PURÉ RÚSTICO CON CORDERO CONFITADO</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 75</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.cordero_confitado_desc" data-astro-cid-jyl5l3e5>
Tierno costillar de cordero con vegetales grillados acompañado de pastel rústico de papas andinas, todo, sobre un espejo de salsa demi-glace.
</p> </div> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text" data-translate="menu.dishes.lomo_saltado" data-astro-cid-jyl5l3e5>LOMO SALTADO AMANTO</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 48</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.lomo_saltado_desc" data-astro-cid-jyl5l3e5>
Nuestro patriótico lomo de res, cebolla, tomate cherry, ají amarillo, trozos de plata bizcochito, papas y arroz.
</p> </div> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text flex-1" data-translate="menu.dishes.causa_acevichada" data-astro-cid-jyl5l3e5>CAUSA ACEVICHADA AL ESTILO AMANTO</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 55</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.causa_acevichada_desc" data-astro-cid-jyl5l3e5>
Nuestro abanderado ceviche carretillero sobre dos torres de causa rellena de palta, envuelta en una doble textura (suave y crocante) empanizada con mix de quinua.
</p> </div> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text" data-translate="menu.dishes.envoltini_papa" data-astro-cid-jyl5l3e5>ENVOLTINI DE PAPA</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 38</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.envoltini_papa_desc" data-astro-cid-jyl5l3e5>
Papa peruanita rellena de palta cubierta en una escama de espinaca, vegetales salteados y reducción balsámica.
</p> </div> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text" data-translate="menu.dishes.saltado_verduras" data-astro-cid-jyl5l3e5>SALTADO DE VERDURAS</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 35</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.saltado_verduras_desc" data-astro-cid-jyl5l3e5>
Una selección de frescos vegetales del Valle Sagrado acompañados de arroz y papas fritas.
</p> </div> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text" data-translate="menu.dishes.fettuccini_zeta" data-astro-cid-jyl5l3e5>FETTUCCINI CON ZETA</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 42</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.fettuccini_zeta_desc" data-astro-cid-jyl5l3e5>
Tallarines fettuccini en salsa de zetas y un mix de verduras del huerto.
</p> </div> </div> </div> <!-- Postres --> <div id="postres" class="scroll-mt-24" data-astro-cid-jyl5l3e5> <div class="relative h-64 rounded-2xl overflow-hidden mb-8" data-astro-cid-jyl5l3e5> <img src="/images/tartaleta-sauco-airampo.webp" alt="Postres Amanto" class="w-full h-full object-cover" data-astro-cid-jyl5l3e5> <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end" data-astro-cid-jyl5l3e5> <h2 class="text-3xl md:text-4xl font-bold text-white p-8" data-translate="menu.desserts" data-astro-cid-jyl5l3e5>
Postres
</h2> </div> </div> <div class="grid grid-cols-1 gap-6" data-astro-cid-jyl5l3e5> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text flex-1" data-translate="menu.dishes.tartaleta_sauco" data-astro-cid-jyl5l3e5>TARTALETA DE SAUCO Y AIRAMPO</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 22</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.tartaleta_sauco_desc" data-astro-cid-jyl5l3e5>
Bizcotela de canela rellena de frosting de ajíes peruanos, acompañado de frutos rojos del valle caramelizados con toques de sal rosada de Maras.
</p> </div> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text" data-translate="menu.dishes.bomba_chocolate" data-astro-cid-jyl5l3e5>BOMBA DE CHOCOLATE</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 25</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.bomba_chocolate_desc" data-astro-cid-jyl5l3e5>
Un globo de chocolate hecho con cacao quillabambino, relleno de mousse de lúcuma y galletas de coco.
</p> </div> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text" data-translate="menu.dishes.torta_chocolate" data-astro-cid-jyl5l3e5>TORTA DE CHOCOLATE</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 24</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.torta_chocolate_desc" data-astro-cid-jyl5l3e5>
Deliciosa torta húmeda de chocolate con glace de chocolate destellante acompañado de un afrodisíaco helado de copatazú (fruta de la selva) o helado de temporada.
</p> </div> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text" data-translate="menu.dishes.queso_helado" data-astro-cid-jyl5l3e5>QUESO HELADO</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 20</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.queso_helado_desc" data-astro-cid-jyl5l3e5>
Cramble de castañas encima de manzanas laminadas y caramelizadas acompañado de un queso helado.
</p> </div> </div> </div> <!-- Para Compartir --> <div id="compartir" class="scroll-mt-24" data-astro-cid-jyl5l3e5> <div class="relative h-64 rounded-2xl overflow-hidden mb-8" data-astro-cid-jyl5l3e5> <img src="/images/plato4.webp" alt="Para Compartir Amanto" class="w-full h-full object-cover" data-astro-cid-jyl5l3e5> <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end" data-astro-cid-jyl5l3e5> <h2 class="text-3xl md:text-4xl font-bold text-white p-8" data-translate="menu.toShare" data-astro-cid-jyl5l3e5>
Para Compartir
</h2> </div> </div> <p class="text-sm text-foreground/60 mb-6" data-translate="menu.toShareNote" data-astro-cid-jyl5l3e5>
Pide tu piqueo con papas nativas o ensalada de la casa
</p> <div class="grid grid-cols-1 gap-6" data-astro-cid-jyl5l3e5> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text" data-translate="menu.dishes.hamburguesa_res" data-astro-cid-jyl5l3e5>HAMBURGUESA DE RES</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 40</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.hamburguesa_res_desc" data-astro-cid-jyl5l3e5>
Fino lomo de res, lechuga, tocino, tomate, cebolla, queso edan, pickles.
</p> </div> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text" data-translate="menu.dishes.hamburguesa_alpaca" data-astro-cid-jyl5l3e5>HAMBURGUESA DE ALPACA</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 45</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.hamburguesa_alpaca_desc" data-astro-cid-jyl5l3e5>
Fino lomo de alpaca, lechuga, tocino, tomate, cebolla, queso edan, pickles.
</p> </div> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text" data-translate="menu.dishes.hamburguesa_vegetariana" data-astro-cid-jyl5l3e5>HAMBURGUESA VEGETARIANA</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 35</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.hamburguesa_vegetariana_desc" data-astro-cid-jyl5l3e5>
Menestras, espinaca, tomate, palta.
</p> </div> <div class="menu-item-card" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-start mb-2" data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold gradient-text" data-translate="menu.dishes.deditos_pollo" data-astro-cid-jyl5l3e5>DEDITOS DE POLLO</h3> <span class="text-lg font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 32</span> </div> <p class="text-sm text-foreground/70" data-translate="menu.dishes.deditos_pollo_desc" data-astro-cid-jyl5l3e5>
Deditos de pollo empanizado en quinua remojado en salsa ponzu.
</p> </div> </div> </div> <!-- Cócteles --> <div id="cocteles" class="scroll-mt-24" data-astro-cid-jyl5l3e5> <div class="relative h-64 rounded-2xl overflow-hidden mb-8" data-astro-cid-jyl5l3e5> <img src="/images/bebida1.webp" alt="Cócteles Amanto" class="w-full h-full object-cover" data-astro-cid-jyl5l3e5> <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end" data-astro-cid-jyl5l3e5> <h2 class="text-3xl md:text-4xl font-bold text-white p-8" data-translate="menu.cocktails" data-astro-cid-jyl5l3e5>
Cócteles
</h2> </div> </div> <div class="mb-12" data-astro-cid-jyl5l3e5> <h3 class="text-xl font-bold text-foreground/80 mb-6" data-translate="menu.authorCocktails" data-astro-cid-jyl5l3e5>
Cócteles de Autor
</h3> <div class="grid grid-cols-1 gap-4" data-astro-cid-jyl5l3e5> <div class="menu-item-simple" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-center" data-astro-cid-jyl5l3e5> <div class="flex-1" data-astro-cid-jyl5l3e5> <h4 class="font-semibold gradient-text" data-translate="menu.cocktails_list.choquequilca" data-astro-cid-jyl5l3e5>CHOQUEQUILCA</h4> <p class="text-xs text-foreground/60" data-translate="menu.cocktails_list.choquequilca_desc" data-astro-cid-jyl5l3e5>Jack Daniel's, licor de cacao, jarabe de granadina y cordial de uva</p> </div> <span class="font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 28</span> </div> </div> <div class="menu-item-simple" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-center" data-astro-cid-jyl5l3e5> <div data-astro-cid-jyl5l3e5> <h4 class="font-semibold gradient-text" data-translate="menu.cocktails_list.amanto" data-astro-cid-jyl5l3e5>AMANTO</h4> <p class="text-xs text-foreground/60" data-translate="menu.cocktails_list.amanto_desc" data-astro-cid-jyl5l3e5>Gin, concentrado de contreu, cordial de granadina</p> </div> <span class="font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 26</span> </div> </div> <div class="menu-item-simple" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-center" data-astro-cid-jyl5l3e5> <div data-astro-cid-jyl5l3e5> <h4 class="font-semibold gradient-text" data-translate="menu.cocktails_list.drama" data-astro-cid-jyl5l3e5>DRAMA</h4> <p class="text-xs text-foreground/60" data-translate="menu.cocktails_list.drama_desc" data-astro-cid-jyl5l3e5>Vodka, frangélico, curacao, crema de coco</p> </div> <span class="font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 27</span> </div> </div> <div class="menu-item-simple" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-center" data-astro-cid-jyl5l3e5> <div data-astro-cid-jyl5l3e5> <h4 class="font-semibold gradient-text" data-translate="menu.cocktails_list.romance" data-astro-cid-jyl5l3e5>ROMANCE</h4> <p class="text-xs text-foreground/60" data-translate="menu.cocktails_list.romance_desc" data-astro-cid-jyl5l3e5>Ron oscuro, zumo de naranja y campari</p> </div> <span class="font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 25</span> </div> </div> <div class="menu-item-simple" data-astro-cid-jyl5l3e5> <div class="flex justify-between items-center gap-2" data-astro-cid-jyl5l3e5> <div class="flex-1" data-astro-cid-jyl5l3e5> <h4 class="font-semibold gradient-text" data-translate="menu.cocktails_list.amor_prohibido" data-astro-cid-jyl5l3e5>AMOR PROHIBIDO</h4> <p class="text-xs text-foreground/60" data-translate="menu.cocktails_list.amor_prohibido_desc" data-astro-cid-jyl5l3e5>Pisco quebranta, maracuyá, bermout rosso, cordial de manzanilla</p> </div> <span class="font-bold text-amber-500" data-astro-cid-jyl5l3e5>S/. 30</span> </div> </div> </div> </div> <div data-astro-cid-jyl5l3e5> <h3 class="text-xl font-bold text-foreground/80 mb-6" data-translate="menu.mixedDrinks" data-astro-cid-jyl5l3e5>
Cócteles Clásicos
</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-3" data-astro-cid-jyl5l3e5> <div class="menu-item-compact" data-astro-cid-jyl5l3e5> <div class="flex justify-between" data-astro-cid-jyl5l3e5> <span class="font-medium gradient-text" data-translate="menu.cocktails_list.pisco_sour" data-astro-cid-jyl5l3e5>PISCO SOUR</span> <span class="text-amber-500" data-astro-cid-jyl5l3e5>S/. 22</span> </div> </div> <div class="menu-item-compact" data-astro-cid-jyl5l3e5> <div class="flex justify-between" data-astro-cid-jyl5l3e5> <span class="font-medium gradient-text" data-translate="menu.cocktails_list.maracuya_sour" data-astro-cid-jyl5l3e5>MARACUYÁ SOUR</span> <span class="text-amber-500" data-astro-cid-jyl5l3e5>S/. 23</span> </div> </div> <div class="menu-item-compact" data-astro-cid-jyl5l3e5> <div class="flex justify-between" data-astro-cid-jyl5l3e5> <span class="font-medium gradient-text" data-translate="menu.cocktails_list.mojito" data-astro-cid-jyl5l3e5>MOJITO</span> <span class="text-amber-500" data-astro-cid-jyl5l3e5>S/. 20</span> </div> </div> <div class="menu-item-compact" data-astro-cid-jyl5l3e5> <div class="flex justify-between" data-astro-cid-jyl5l3e5> <span class="font-medium gradient-text" data-translate="menu.cocktails_list.pina_colada" data-astro-cid-jyl5l3e5>PIÑA COLADA</span> <span class="text-amber-500" data-astro-cid-jyl5l3e5>S/. 22</span> </div> </div> </div> </div> </div> <!-- Vinos --> <div id="vinos" class="scroll-mt-24" data-astro-cid-jyl5l3e5> <div class="relative h-64 rounded-2xl overflow-hidden mb-8" data-astro-cid-jyl5l3e5> <img src="/images/bebida2.webp" alt="Vinos Amanto" class="w-full h-full object-cover" data-astro-cid-jyl5l3e5> <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end" data-astro-cid-jyl5l3e5> <h2 class="text-3xl md:text-4xl font-bold text-white p-8" data-translate="menu.wines" data-astro-cid-jyl5l3e5>
Vinos
</h2> </div> </div> <p class="text-sm text-foreground/60 mb-6" data-translate="menu.winesNote" data-astro-cid-jyl5l3e5>
Copa - Botella
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-jyl5l3e5> <div data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold text-foreground/80 mb-4" data-translate="menu.redWines" data-astro-cid-jyl5l3e5>Tintos</h3> <div class="space-y-2" data-astro-cid-jyl5l3e5> <div class="flex justify-between text-sm" data-astro-cid-jyl5l3e5> <span data-astro-cid-jyl5l3e5>Viña Aresti Cabernet Sauvignon</span> <span class="text-amber-500" data-astro-cid-jyl5l3e5>S/. 18 - S/. 70</span> </div> <div class="flex justify-between text-sm" data-astro-cid-jyl5l3e5> <span data-astro-cid-jyl5l3e5>Finca El Origen Malbec</span> <span class="text-amber-500" data-astro-cid-jyl5l3e5>S/. 20 - S/. 80</span> </div> </div> </div> <div data-astro-cid-jyl5l3e5> <h3 class="text-lg font-bold text-foreground/80 mb-4" data-translate="menu.whiteWines" data-astro-cid-jyl5l3e5>Blancos</h3> <div class="space-y-2" data-astro-cid-jyl5l3e5> <div class="flex justify-between text-sm" data-astro-cid-jyl5l3e5> <span data-astro-cid-jyl5l3e5>Viña Aresti Sauvignon Blanc</span> <span class="text-amber-500" data-astro-cid-jyl5l3e5>S/. 18 - S/. 70</span> </div> <div class="flex justify-between text-sm" data-astro-cid-jyl5l3e5> <span data-astro-cid-jyl5l3e5>Finca El Origen Chardonnay</span> <span class="text-amber-500" data-astro-cid-jyl5l3e5>S/. 20 - S/. 80</span> </div> </div> </div> </div> </div> <!-- Bebidas Refrescantes --> <div id="bebidas" class="scroll-mt-24" data-astro-cid-jyl5l3e5> <div class="relative h-64 rounded-2xl overflow-hidden mb-8" data-astro-cid-jyl5l3e5> <img src="/images/bebida3.webp" alt="Bebidas Refrescantes Amanto" class="w-full h-full object-cover" data-astro-cid-jyl5l3e5> <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end" data-astro-cid-jyl5l3e5> <h2 class="text-3xl md:text-4xl font-bold text-white p-8" data-translate="menu.refreshing" data-astro-cid-jyl5l3e5>
Refrescantes
</h2> </div> </div> <p class="text-sm text-foreground/60 mb-6" data-translate="menu.refreshingNote" data-astro-cid-jyl5l3e5>
Bebidas sin Alcohol
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-jyl5l3e5> <div class="space-y-2" data-astro-cid-jyl5l3e5> <div class="flex justify-between text-sm" data-astro-cid-jyl5l3e5> <span data-astro-cid-jyl5l3e5>Limonada</span> <span class="text-amber-500" data-astro-cid-jyl5l3e5>S/. 10</span> </div> <div class="flex justify-between text-sm" data-astro-cid-jyl5l3e5> <span data-astro-cid-jyl5l3e5>Infusiones</span> <span class="text-amber-500" data-astro-cid-jyl5l3e5>S/. 8</span> </div> </div> <div class="space-y-2" data-astro-cid-jyl5l3e5> <div class="flex justify-between text-sm" data-astro-cid-jyl5l3e5> <span data-astro-cid-jyl5l3e5>Chicha Morada</span> <span class="text-amber-500" data-astro-cid-jyl5l3e5>S/. 10</span> </div> <div class="flex justify-between text-sm" data-astro-cid-jyl5l3e5> <span data-astro-cid-jyl5l3e5>Gaseosas</span> <span class="text-amber-500" data-astro-cid-jyl5l3e5>S/. 8</span> </div> </div> </div> </div> </div> </div> ` })} </div> </div> </section> </div> <!-- Logo superior izquierdo --> <a${addAttribute(`/${currentLocale}`, "href")} class="absolute top-[3.5vh] left-[3.4vw] w-[60px] md:w-[9.8vw] h-auto z-50 cursor-pointer logo-container" role="img" aria-label="Amanto logo" data-astro-cid-jyl5l3e5> <!-- Logo para desktop --> <img src="/images/logo.svg" alt="Amanto" class="hidden md:block w-full h-full object-contain logo-img" style="transition: filter 0.3s ease;" data-astro-cid-jyl5l3e5> <!-- Favicon para móvil --> <svg class="block md:hidden w-[50%] h-[50%] transition-colors duration-300" viewBox="0 0 32 31.72" xmlns="http://www.w3.org/2000/svg" data-astro-cid-jyl5l3e5> <path class="logo-icon" fill="#ffffff" d="M16,14.98C8,9.26,0,3.83,0,0v31.72h6.43c1.13-3.05,5.3-6.21,9.57-9.16,4.26,2.95,8.44,6.11,9.57,9.16h6.43V0c0,3.83-8,9.26-16,14.98ZM6.43,22.31v-6.99c.94,1.08,2.46,2.28,4.24,3.56-1.5,1.15-2.94,2.29-4.24,3.43ZM21.33,18.88c1.78-1.27,3.3-2.47,4.24-3.56v6.99c-1.3-1.14-2.73-2.28-4.24-3.43Z" data-astro-cid-jyl5l3e5></path> </svg> </a> <!-- Selector de idioma superior derecho --> ${renderComponent($$result2, "LanguageSwitcher", $$LanguageSwitcher, { "currentLocale": currentLocale, "data-astro-cid-jyl5l3e5": true })} <!-- Fondo oscuro para el menú de navegación (solo móvil) --> <div class="nav-background absolute bottom-0 left-0 right-0 h-[25vh] z-40 md:hidden" data-astro-cid-jyl5l3e5></div> <!-- Navegación inferior --> <nav id="bottom-nav" class="absolute bottom-[6vh] left-0 right-0 flex md:justify-center justify-start md:gap-[8.5vw] gap-[8vw] z-50 md:overflow-visible overflow-x-auto px-4 md:px-0 scrollbar-hide" role="navigation" aria-label="Main navigation" data-astro-cid-jyl5l3e5> <a${addAttribute(`/${currentLocale}/nosotros`, "href")} class="nav-link text-white md:text-2xl text-sm md:tracking-[14.40px] tracking-[6px] leading-normal font-light whitespace-nowrap relative inline-block pb-1" style="font-family: 'Figtree', -apple-system, BlinkMacSystemFont, sans-serif; font-weight: 300;" data-astro-cid-jyl5l3e5> ${aboutText} </a> <a${addAttribute(`/${currentLocale}/carta`, "href")} class="nav-link active-link text-white md:text-2xl text-sm md:tracking-[14.40px] tracking-[6px] leading-normal font-light whitespace-nowrap relative inline-block pb-1" style="font-family: 'Figtree', -apple-system, BlinkMacSystemFont, sans-serif; font-weight: 300;" data-astro-cid-jyl5l3e5> ${menuText} </a> <a${addAttribute(`https://amanto.meitre.com/`, "href")} class="nav-link text-white md:text-2xl text-sm md:tracking-[14.40px] tracking-[6px] leading-normal font-light whitespace-nowrap relative inline-block pb-1" style="font-family: 'Figtree', -apple-system, BlinkMacSystemFont, sans-serif; font-weight: 300;" data-astro-cid-jyl5l3e5> ${reserveText} </a> </nav> </div> ${renderComponent($$result2, "TranslationScript", $$TranslationScript, { "data-astro-cid-jyl5l3e5": true })} ` })}  `;
}, "F:/Amanto/web_amanto/src/pages/[...lang]/carta.astro", void 0);

const $$file = "F:/Amanto/web_amanto/src/pages/[...lang]/carta.astro";
const $$url = "/[...lang]/carta";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Carta,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
