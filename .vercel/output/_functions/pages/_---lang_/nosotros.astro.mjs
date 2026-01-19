/* empty css                                    */
import { a as createAstro, c as createComponent, b as renderComponent, r as renderTemplate, d as defineScriptVars, e as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server_BPEG-9I1.mjs';
import 'kleur/colors';
import { $ as $$Layout, e as esTranslations, a as enTranslations, b as $$LanguageSwitcher } from '../../chunks/en_D7yQ0LHX.mjs';
import { $ as $$TranslationScript } from '../../chunks/TranslationScript_DavLuZwl.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://amantorestaurante.com");
const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Nosotros;
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
  const pageTitle = t("about.title", currentLocale);
  const aboutText = t("nav.about", currentLocale);
  const menuText = t("nav.menu", currentLocale);
  const reserveText = t("nav.reserve", currentLocale);
  const addressText = t("footer.address", currentLocale);
  const cityText = t("footer.city", currentLocale);
  const scheduleText = t("footer.scheduleText", currentLocale);
  const scheduleHours = t("footer.scheduleHours", currentLocale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${pageTitle} - Amanto`, "lang": currentLocale, "data-astro-cid-3eoq6qem": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="bg-black overflow-hidden w-screen h-screen relative" data-astro-cid-3eoq6qem> <!-- Imagen de fondo --> <img class="absolute top-0 left-0 w-full h-full object-cover z-0" alt="Amanto Nosotros" src="/images/nosotros.webp" data-astro-cid-3eoq6qem> <!-- Capa oscura semi-transparente --> <div class="absolute top-0 left-0 md:left-[18.9%] w-full md:w-[81.1%] h-full md:h-[86%] bg-black opacity-70 z-10" data-astro-cid-3eoq6qem></div> <!-- Logo superior izquierdo --> <a', ' class="absolute top-[3.5vh] left-[3.4vw] w-[60px] md:w-[9.8vw] h-auto z-50 cursor-pointer logo-container" role="img" aria-label="Amanto logo" data-astro-cid-3eoq6qem> <!-- Logo para desktop --> <img src="/images/logo.svg" alt="Amanto" class="hidden md:block w-full h-full object-contain logo-img" style="transition: filter 0.3s ease;" data-astro-cid-3eoq6qem> <!-- Favicon para m\xF3vil --> <svg class="block md:hidden w-[50%] h-[50%] transition-colors duration-300" viewBox="0 0 32 31.72" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3eoq6qem> <path class="logo-icon" fill="#ffffff" d="M16,14.98C8,9.26,0,3.83,0,0v31.72h6.43c1.13-3.05,5.3-6.21,9.57-9.16,4.26,2.95,8.44,6.11,9.57,9.16h6.43V0c0,3.83-8,9.26-16,14.98ZM6.43,22.31v-6.99c.94,1.08,2.46,2.28,4.24,3.56-1.5,1.15-2.94,2.29-4.24,3.43ZM21.33,18.88c1.78-1.27,3.3-2.47,4.24-3.56v6.99c-1.3-1.14-2.73-2.28-4.24-3.43Z" data-astro-cid-3eoq6qem></path> </svg> </a> <!-- Selector de idioma superior derecho --> ', ` <!-- Contenedor de navegaci\xF3n de secciones --> <div class="relative md:absolute top-1/2 -translate-y-1/2 md:top-[24.5vh] md:translate-y-0 left-0 md:left-[46%] w-full md:w-[28.8%] z-20 flex flex-col items-center justify-center md:justify-start" data-astro-cid-3eoq6qem> <!-- Flecha izquierda desktop --> <button id="prev-section" class="absolute left-[10vw] md:left-[-140px] md:top-[60%] -translate-y-1/2 hidden md:flex items-center justify-center w-[30px] h-[30px] opacity-80 hover:opacity-100 transition-opacity z-30" aria-label="Secci\xF3n anterior" data-astro-cid-3eoq6qem> <img src="/images/arrow.svg" alt="Anterior" class="w-full h-full object-contain transform rotate-[-90deg] filter brightness-0 invert" data-astro-cid-3eoq6qem> </button> <!-- Contenedor del t\xEDtulo y contenido --> <div class="text-center w-[90%] md:w-auto" data-astro-cid-3eoq6qem> <!-- T\xEDtulo din\xE1mico --> <div id="section-title-wrapper" class="flex items-center justify-center" data-astro-cid-3eoq6qem> <h1 id="section-title" class="font-medium text-white text-sm md:text-base tracking-[6px] md:tracking-[9.60px] leading-normal md:whitespace-nowrap z-20" style="font-family: 'Figtree', -apple-system, BlinkMacSystemFont, sans-serif; font-weight: 500;" data-astro-cid-3eoq6qem> `, ` </h1> </div> <!-- Texto principal din\xE1mico --> <article class="mt-[5vh] md:mt-[6vh] z-20 px-6 md:px-0" data-astro-cid-3eoq6qem> <div id="section-content-wrapper" class="flex items-center justify-center gap-3 md:gap-0" data-astro-cid-3eoq6qem> <!-- Flecha izquierda m\xF3vil --> <button id="prev-section-mobile" class="md:hidden flex items-center justify-center w-[20px] h-[20px] opacity-80 hover:opacity-100 transition-opacity z-30" aria-label="Secci\xF3n anterior" data-astro-cid-3eoq6qem> <img src="/images/arrow.svg" alt="Anterior" class="w-full h-full object-contain transform rotate-[-90deg] filter brightness-0 invert" data-astro-cid-3eoq6qem> </button> <p id="section-content" class="font-normal text-white text-sm md:text-base text-center leading-5 md:leading-6" style="font-family: 'Questrial', -apple-system, BlinkMacSystemFont, sans-serif; white-space: pre-line;" data-astro-cid-3eoq6qem> `, ` </p> <!-- Flecha derecha m\xF3vil --> <button id="next-section-mobile" class="md:hidden flex items-center justify-center w-[20px] h-[20px] opacity-80 hover:opacity-100 transition-opacity z-30" aria-label="Secci\xF3n siguiente" data-astro-cid-3eoq6qem> <img src="/images/arrow.svg" alt="Siguiente" class="w-full h-full object-contain transform rotate-[90deg] scale-x-[-1] filter brightness-0 invert" data-astro-cid-3eoq6qem> </button> </div> </article> </div> <!-- Flecha derecha desktop --> <button id="next-section" class="absolute right-[10vw] md:right-[-140px] md:top-[60%] -translate-y-1/2 hidden md:flex items-center justify-center w-[30px] h-[30px] opacity-80 hover:opacity-100 transition-opacity z-30" aria-label="Secci\xF3n siguiente" data-astro-cid-3eoq6qem> <img src="/images/arrow.svg" alt="Siguiente" class="w-full h-full object-contain transform rotate-[90deg] scale-x-[-1] filter brightness-0 invert" data-astro-cid-3eoq6qem> </button> </div> <!-- Informaci\xF3n de contacto - Direcci\xF3n --> <address class="hidden md:block absolute bottom-[18vh] left-[24.3%] font-normal text-white text-sm tracking-[0] leading-[21px] not-italic z-20" style="font-family: 'Questrial', -apple-system, BlinkMacSystemFont, sans-serif;" data-astro-cid-3eoq6qem> `, "<br data-astro-cid-3eoq6qem> ", ` </address> <!-- Informaci\xF3n de contacto - Horarios --> <p class="hidden md:block absolute bottom-[18vh] left-[57%] font-normal text-white text-sm text-center tracking-[0] leading-[21px] z-20" style="font-family: 'Questrial', -apple-system, BlinkMacSystemFont, sans-serif;" data-astro-cid-3eoq6qem> `, "<br data-astro-cid-3eoq6qem> ", ` </p> <!-- Informaci\xF3n de contacto - Tel\xE9fono y Email --> <address class="hidden md:block absolute bottom-[18vh] right-[10.2%] font-normal text-white text-sm text-right tracking-[0] leading-[21px] not-italic z-20" style="font-family: 'Questrial', -apple-system, BlinkMacSystemFont, sans-serif;" data-astro-cid-3eoq6qem> <a href="https://wa.me/+51906919229" target="_blank" rel="noopener noreferrer" class="flex items-center justify-end gap-2 hover:underline transition-all group mb-1" data-astro-cid-3eoq6qem> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp group-hover:text-[#25D366] transition-colors" viewBox="0 0 16 16" data-astro-cid-3eoq6qem> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" data-astro-cid-3eoq6qem></path> </svg>
+51 906 919 229
</a> <a href="mailto:reservas@amantorestaurante.com" class="block hover:underline transition-all" data-astro-cid-3eoq6qem>
reservas@amantorestaurante.com
</a> </address> <!-- Navegaci\xF3n inferior --> <nav id="bottom-nav" class="absolute bottom-[6vh] left-0 right-0 flex md:justify-center justify-start md:gap-[8.5vw] gap-[8vw] z-50 md:overflow-visible overflow-x-auto px-4 md:px-0 scrollbar-hide" role="navigation" aria-label="Main navigation" data-astro-cid-3eoq6qem> <a`, ` class="nav-link active-link text-white md:text-2xl text-sm md:tracking-[14.40px] tracking-[6px] leading-normal font-light whitespace-nowrap relative inline-block pb-1" style="font-family: 'Figtree', -apple-system, BlinkMacSystemFont, sans-serif; font-weight: 300;" data-astro-cid-3eoq6qem> `, " </a> <a", ` class="nav-link text-white md:text-2xl text-sm md:tracking-[14.40px] tracking-[6px] leading-normal font-light whitespace-nowrap relative inline-block pb-1" style="font-family: 'Figtree', -apple-system, BlinkMacSystemFont, sans-serif; font-weight: 300;" data-astro-cid-3eoq6qem> `, " </a> <a", ` class="nav-link text-white md:text-2xl text-sm md:tracking-[14.40px] tracking-[6px] leading-normal font-light whitespace-nowrap relative inline-block pb-1" style="font-family: 'Figtree', -apple-system, BlinkMacSystemFont, sans-serif; font-weight: 300;" data-astro-cid-3eoq6qem> `, " </a> </nav> </div>  ", " <script>(function(){", `
    function initNosotrosPage() {
      // Importar traducciones usando import map o fetch
      const translations = {
        es: {
          about: {
            sectionNombre: 'NOMBRE',
            sectionNombreText: 'Nuestro nombre, "Amanto", honra la leyenda m\xE1s poderosa de Ollantaytambo. Nace de la fusi\xF3n del valiente general Ollantay y su rol como el amante que desafi\xF3 un imperio por amor. Esa es nuestra esencia: un esp\xEDritu de lucha y pasi\xF3n.\\nAdicionalmente, "Amanto" es un gesto: "yo amanto", el acto de abrigar y proteger. As\xED, nuestro nombre tambi\xE9n es una promesa: ser un refugio c\xE1lido en el coraz\xF3n de los Andes.',
            sectionCocina: 'COCINA',
            sectionCocinaText: 'Amanto elabora su propia interpretaci\xF3n de los platos peruanos y su cocina est\xE1 basada en especias locales: verduras cultivadas como la quinua, papa andina; trucha de r\xEDo y carne de res aut\xF3ctona.\\n\\nLa base de nuestra carta es una amplia colecci\xF3n de especias de todo Valle Sagrado, que hemos seleccionado con sumo cuidado para crear experiencias \xFAnicas e inolvidables.',
            sectionProposito: 'PROP\xD3SITO',
            sectionPropositoText: 'Nuestra misi\xF3n es cautivar tus sentidos a trav\xE9s de una experiencia culinaria memorable.\\n\\nNuestra visi\xF3n es ser un destino culinario \xFAnico, reconocido por nuestra excelencia y autenticidad.\\n\\nNuestros valores son la b\xFAsqueda constante de la innovaci\xF3n y la felicidad para atender.',
          }
        },
        en: {
          about: {
            sectionNombre: 'NAME',
            sectionNombreText: 'Our name Amanto, pays tribute to Ollantaytambo\\'s most powerful legend. It is born from the fusion of the brave General Ollantay and his role as the lover who defied an empire for love. That is our essence: a spirit of struggle and passion. Furthermore, "Amanto" is a gesture: "I Amanto," the act of embracing and protecting. In this way, our name is also a promise to be a warm refuge in the heart of the Andes.',
            sectionCocina: 'CUISINE',
            sectionCocinaText: 'Amanto creates its own interpretation of Peruvian cuisine, rooted in local ingredients such as quinoa, Andean potatoes, river trout, and native beef.\\n\\nThe foundation of our menu lies in a diverse collection of spices from across the Sacred Valley, carefully selected to create distinctive and unforgettable flavors.',
            sectionProposito: 'PURPOSE',
            sectionPropositoText: 'Our mission is to captivate your senses through a memorable culinary experience.\\n\\nOur vision is to be a unique culinary destination, recognized for our authenticity and excellence.\\n\\nOur values are the continuous pursuit of innovation and the joy of serving you.',
          }
        }
      };

      // Variable global para almacenar las secciones seg\xFAn el idioma
      let globalSectionsData = [];
      let currentSectionIndex = 0;

      // Obtener secciones seg\xFAn el idioma actual
      function getSections() {
        const t = translations[currentLocale];
        if (!t) return [];
        return [
          { 
            title: t.about.sectionNombre, 
            content: t.about.sectionNombreText
          },
          { 
            title: t.about.sectionCocina, 
            content: t.about.sectionCocinaText
          },
          { 
            title: t.about.sectionProposito, 
            content: t.about.sectionPropositoText
          }
        ];
      }

      function updateSectionsContent() {
        const sections = getSections();
        
        // Actualizar la secci\xF3n actual sin transici\xF3n
        const sectionTitle = document.getElementById('section-title');
        const sectionContent = document.getElementById('section-content');
        
        if (sectionTitle && sectionContent && sections.length > 0) {
          // Desactivar transiciones temporalmente
          const originalTitleTransition = sectionTitle.style.transition;
          const originalContentTransition = sectionContent.style.transition;
          
          sectionTitle.style.transition = 'none';
          sectionContent.style.transition = 'none';
          
          // Cambiar contenido sin animaci\xF3n
          sectionTitle.textContent = sections[currentSectionIndex].title;
          sectionContent.textContent = sections[currentSectionIndex].content;
          
          // Restaurar transiciones
          setTimeout(() => {
            sectionTitle.style.transition = originalTitleTransition;
            sectionContent.style.transition = originalContentTransition;
          }, 50);
        }
        
        // Actualizar el array de secciones global
        globalSectionsData = sections;
      }

      // Inicializar secciones al cargar
      globalSectionsData = getSections();
      updateSectionsContent();

      // Centrar el enlace activo en m\xF3vil
      function centerActiveLink() {
        const nav = document.getElementById('bottom-nav');
        const activeLink = nav?.querySelector('.active-link');
        
        if (nav && activeLink && window.innerWidth < 768) {
          const navRect = nav.getBoundingClientRect();
          const linkRect = activeLink.getBoundingClientRect();
          const scrollLeft = linkRect.left - navRect.left - (navRect.width / 2) + (linkRect.width / 2);
          
          nav.scrollTo({
            left: nav.scrollLeft + scrollLeft,
            behavior: 'smooth'
          });
        }
      }

      // Ejecutar al cargar y al redimensionar
      window.addEventListener('load', centerActiveLink);
      window.addEventListener('resize', centerActiveLink);

      // Navegaci\xF3n entre secciones
      const sectionTitle = document.getElementById('section-title');
      const sectionContent = document.getElementById('section-content');
      const prevBtn = document.getElementById('prev-section');
      const nextBtn = document.getElementById('next-section');
      const prevBtnMobile = document.getElementById('prev-section-mobile');
      const nextBtnMobile = document.getElementById('next-section-mobile');

      function updateSection(index) {
        if (index < 0 || !globalSectionsData || globalSectionsData.length === 0) return;
        
        currentSectionIndex = index;
        
        if (sectionTitle && sectionContent) {
          // Usar un cross-fade suave: fade out primero, luego cambiar contenido y fade in
          
          // Paso 1: Fade out del contenido actual
          sectionTitle.style.transition = 'opacity 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          sectionContent.style.transition = 'opacity 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          sectionTitle.style.opacity = '0';
          sectionContent.style.opacity = '0';
          
          // Paso 2: Despu\xE9s de que termine el fade out, cambiar contenido y fade in
          setTimeout(() => {
            // Usar las secciones actualizadas seg\xFAn el idioma
            let currentSections;
            if (globalSectionsData.length > 0) {
              currentSections = globalSectionsData;
            } else {
              currentSections = getSections();
            }
            
            if (currentSections && currentSections[index]) {
              sectionTitle.textContent = currentSections[index].title;
              sectionContent.textContent = currentSections[index].content;
            }
            
            // Fade in del nuevo contenido
            setTimeout(() => {
              sectionTitle.style.transition = 'opacity 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';
              sectionContent.style.transition = 'opacity 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';
              sectionTitle.style.opacity = '1';
              sectionContent.style.opacity = '1';
            }, 50);
          }, 300);
        }
      }

      function goToNextSection() {
        const sections = globalSectionsData.length > 0 ? globalSectionsData : getSections();
        if (sections.length === 0) return;
        const nextIndex = (currentSectionIndex + 1) % sections.length;
        updateSection(nextIndex);
      }

      function goToPrevSection() {
        const sections = globalSectionsData.length > 0 ? globalSectionsData : getSections();
        if (sections.length === 0) return;
        const prevIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
        updateSection(prevIndex);
      }

      // Event listeners para desktop
      if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
          e.preventDefault();
          goToPrevSection();
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
          e.preventDefault();
          goToNextSection();
        });
      }
      
      // Event listeners para m\xF3vil
      if (prevBtnMobile) {
        prevBtnMobile.addEventListener('click', function(e) {
          e.preventDefault();
          goToPrevSection();
        });
      }
      if (nextBtnMobile) {
        nextBtnMobile.addEventListener('click', function(e) {
          e.preventDefault();
          goToNextSection();
        });
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initNosotrosPage, { once: true });
    } else {
      initNosotrosPage();
    }
  })();<\/script> `], [" ", '<div class="bg-black overflow-hidden w-screen h-screen relative" data-astro-cid-3eoq6qem> <!-- Imagen de fondo --> <img class="absolute top-0 left-0 w-full h-full object-cover z-0" alt="Amanto Nosotros" src="/images/nosotros.webp" data-astro-cid-3eoq6qem> <!-- Capa oscura semi-transparente --> <div class="absolute top-0 left-0 md:left-[18.9%] w-full md:w-[81.1%] h-full md:h-[86%] bg-black opacity-70 z-10" data-astro-cid-3eoq6qem></div> <!-- Logo superior izquierdo --> <a', ' class="absolute top-[3.5vh] left-[3.4vw] w-[60px] md:w-[9.8vw] h-auto z-50 cursor-pointer logo-container" role="img" aria-label="Amanto logo" data-astro-cid-3eoq6qem> <!-- Logo para desktop --> <img src="/images/logo.svg" alt="Amanto" class="hidden md:block w-full h-full object-contain logo-img" style="transition: filter 0.3s ease;" data-astro-cid-3eoq6qem> <!-- Favicon para m\xF3vil --> <svg class="block md:hidden w-[50%] h-[50%] transition-colors duration-300" viewBox="0 0 32 31.72" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3eoq6qem> <path class="logo-icon" fill="#ffffff" d="M16,14.98C8,9.26,0,3.83,0,0v31.72h6.43c1.13-3.05,5.3-6.21,9.57-9.16,4.26,2.95,8.44,6.11,9.57,9.16h6.43V0c0,3.83-8,9.26-16,14.98ZM6.43,22.31v-6.99c.94,1.08,2.46,2.28,4.24,3.56-1.5,1.15-2.94,2.29-4.24,3.43ZM21.33,18.88c1.78-1.27,3.3-2.47,4.24-3.56v6.99c-1.3-1.14-2.73-2.28-4.24-3.43Z" data-astro-cid-3eoq6qem></path> </svg> </a> <!-- Selector de idioma superior derecho --> ', ` <!-- Contenedor de navegaci\xF3n de secciones --> <div class="relative md:absolute top-1/2 -translate-y-1/2 md:top-[24.5vh] md:translate-y-0 left-0 md:left-[46%] w-full md:w-[28.8%] z-20 flex flex-col items-center justify-center md:justify-start" data-astro-cid-3eoq6qem> <!-- Flecha izquierda desktop --> <button id="prev-section" class="absolute left-[10vw] md:left-[-140px] md:top-[60%] -translate-y-1/2 hidden md:flex items-center justify-center w-[30px] h-[30px] opacity-80 hover:opacity-100 transition-opacity z-30" aria-label="Secci\xF3n anterior" data-astro-cid-3eoq6qem> <img src="/images/arrow.svg" alt="Anterior" class="w-full h-full object-contain transform rotate-[-90deg] filter brightness-0 invert" data-astro-cid-3eoq6qem> </button> <!-- Contenedor del t\xEDtulo y contenido --> <div class="text-center w-[90%] md:w-auto" data-astro-cid-3eoq6qem> <!-- T\xEDtulo din\xE1mico --> <div id="section-title-wrapper" class="flex items-center justify-center" data-astro-cid-3eoq6qem> <h1 id="section-title" class="font-medium text-white text-sm md:text-base tracking-[6px] md:tracking-[9.60px] leading-normal md:whitespace-nowrap z-20" style="font-family: 'Figtree', -apple-system, BlinkMacSystemFont, sans-serif; font-weight: 500;" data-astro-cid-3eoq6qem> `, ` </h1> </div> <!-- Texto principal din\xE1mico --> <article class="mt-[5vh] md:mt-[6vh] z-20 px-6 md:px-0" data-astro-cid-3eoq6qem> <div id="section-content-wrapper" class="flex items-center justify-center gap-3 md:gap-0" data-astro-cid-3eoq6qem> <!-- Flecha izquierda m\xF3vil --> <button id="prev-section-mobile" class="md:hidden flex items-center justify-center w-[20px] h-[20px] opacity-80 hover:opacity-100 transition-opacity z-30" aria-label="Secci\xF3n anterior" data-astro-cid-3eoq6qem> <img src="/images/arrow.svg" alt="Anterior" class="w-full h-full object-contain transform rotate-[-90deg] filter brightness-0 invert" data-astro-cid-3eoq6qem> </button> <p id="section-content" class="font-normal text-white text-sm md:text-base text-center leading-5 md:leading-6" style="font-family: 'Questrial', -apple-system, BlinkMacSystemFont, sans-serif; white-space: pre-line;" data-astro-cid-3eoq6qem> `, ` </p> <!-- Flecha derecha m\xF3vil --> <button id="next-section-mobile" class="md:hidden flex items-center justify-center w-[20px] h-[20px] opacity-80 hover:opacity-100 transition-opacity z-30" aria-label="Secci\xF3n siguiente" data-astro-cid-3eoq6qem> <img src="/images/arrow.svg" alt="Siguiente" class="w-full h-full object-contain transform rotate-[90deg] scale-x-[-1] filter brightness-0 invert" data-astro-cid-3eoq6qem> </button> </div> </article> </div> <!-- Flecha derecha desktop --> <button id="next-section" class="absolute right-[10vw] md:right-[-140px] md:top-[60%] -translate-y-1/2 hidden md:flex items-center justify-center w-[30px] h-[30px] opacity-80 hover:opacity-100 transition-opacity z-30" aria-label="Secci\xF3n siguiente" data-astro-cid-3eoq6qem> <img src="/images/arrow.svg" alt="Siguiente" class="w-full h-full object-contain transform rotate-[90deg] scale-x-[-1] filter brightness-0 invert" data-astro-cid-3eoq6qem> </button> </div> <!-- Informaci\xF3n de contacto - Direcci\xF3n --> <address class="hidden md:block absolute bottom-[18vh] left-[24.3%] font-normal text-white text-sm tracking-[0] leading-[21px] not-italic z-20" style="font-family: 'Questrial', -apple-system, BlinkMacSystemFont, sans-serif;" data-astro-cid-3eoq6qem> `, "<br data-astro-cid-3eoq6qem> ", ` </address> <!-- Informaci\xF3n de contacto - Horarios --> <p class="hidden md:block absolute bottom-[18vh] left-[57%] font-normal text-white text-sm text-center tracking-[0] leading-[21px] z-20" style="font-family: 'Questrial', -apple-system, BlinkMacSystemFont, sans-serif;" data-astro-cid-3eoq6qem> `, "<br data-astro-cid-3eoq6qem> ", ` </p> <!-- Informaci\xF3n de contacto - Tel\xE9fono y Email --> <address class="hidden md:block absolute bottom-[18vh] right-[10.2%] font-normal text-white text-sm text-right tracking-[0] leading-[21px] not-italic z-20" style="font-family: 'Questrial', -apple-system, BlinkMacSystemFont, sans-serif;" data-astro-cid-3eoq6qem> <a href="https://wa.me/+51906919229" target="_blank" rel="noopener noreferrer" class="flex items-center justify-end gap-2 hover:underline transition-all group mb-1" data-astro-cid-3eoq6qem> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp group-hover:text-[#25D366] transition-colors" viewBox="0 0 16 16" data-astro-cid-3eoq6qem> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" data-astro-cid-3eoq6qem></path> </svg>
+51 906 919 229
</a> <a href="mailto:reservas@amantorestaurante.com" class="block hover:underline transition-all" data-astro-cid-3eoq6qem>
reservas@amantorestaurante.com
</a> </address> <!-- Navegaci\xF3n inferior --> <nav id="bottom-nav" class="absolute bottom-[6vh] left-0 right-0 flex md:justify-center justify-start md:gap-[8.5vw] gap-[8vw] z-50 md:overflow-visible overflow-x-auto px-4 md:px-0 scrollbar-hide" role="navigation" aria-label="Main navigation" data-astro-cid-3eoq6qem> <a`, ` class="nav-link active-link text-white md:text-2xl text-sm md:tracking-[14.40px] tracking-[6px] leading-normal font-light whitespace-nowrap relative inline-block pb-1" style="font-family: 'Figtree', -apple-system, BlinkMacSystemFont, sans-serif; font-weight: 300;" data-astro-cid-3eoq6qem> `, " </a> <a", ` class="nav-link text-white md:text-2xl text-sm md:tracking-[14.40px] tracking-[6px] leading-normal font-light whitespace-nowrap relative inline-block pb-1" style="font-family: 'Figtree', -apple-system, BlinkMacSystemFont, sans-serif; font-weight: 300;" data-astro-cid-3eoq6qem> `, " </a> <a", ` class="nav-link text-white md:text-2xl text-sm md:tracking-[14.40px] tracking-[6px] leading-normal font-light whitespace-nowrap relative inline-block pb-1" style="font-family: 'Figtree', -apple-system, BlinkMacSystemFont, sans-serif; font-weight: 300;" data-astro-cid-3eoq6qem> `, " </a> </nav> </div>  ", " <script>(function(){", `
    function initNosotrosPage() {
      // Importar traducciones usando import map o fetch
      const translations = {
        es: {
          about: {
            sectionNombre: 'NOMBRE',
            sectionNombreText: 'Nuestro nombre, "Amanto", honra la leyenda m\xE1s poderosa de Ollantaytambo. Nace de la fusi\xF3n del valiente general Ollantay y su rol como el amante que desafi\xF3 un imperio por amor. Esa es nuestra esencia: un esp\xEDritu de lucha y pasi\xF3n.\\\\nAdicionalmente, "Amanto" es un gesto: "yo amanto", el acto de abrigar y proteger. As\xED, nuestro nombre tambi\xE9n es una promesa: ser un refugio c\xE1lido en el coraz\xF3n de los Andes.',
            sectionCocina: 'COCINA',
            sectionCocinaText: 'Amanto elabora su propia interpretaci\xF3n de los platos peruanos y su cocina est\xE1 basada en especias locales: verduras cultivadas como la quinua, papa andina; trucha de r\xEDo y carne de res aut\xF3ctona.\\\\n\\\\nLa base de nuestra carta es una amplia colecci\xF3n de especias de todo Valle Sagrado, que hemos seleccionado con sumo cuidado para crear experiencias \xFAnicas e inolvidables.',
            sectionProposito: 'PROP\xD3SITO',
            sectionPropositoText: 'Nuestra misi\xF3n es cautivar tus sentidos a trav\xE9s de una experiencia culinaria memorable.\\\\n\\\\nNuestra visi\xF3n es ser un destino culinario \xFAnico, reconocido por nuestra excelencia y autenticidad.\\\\n\\\\nNuestros valores son la b\xFAsqueda constante de la innovaci\xF3n y la felicidad para atender.',
          }
        },
        en: {
          about: {
            sectionNombre: 'NAME',
            sectionNombreText: 'Our name Amanto, pays tribute to Ollantaytambo\\\\'s most powerful legend. It is born from the fusion of the brave General Ollantay and his role as the lover who defied an empire for love. That is our essence: a spirit of struggle and passion. Furthermore, "Amanto" is a gesture: "I Amanto," the act of embracing and protecting. In this way, our name is also a promise to be a warm refuge in the heart of the Andes.',
            sectionCocina: 'CUISINE',
            sectionCocinaText: 'Amanto creates its own interpretation of Peruvian cuisine, rooted in local ingredients such as quinoa, Andean potatoes, river trout, and native beef.\\\\n\\\\nThe foundation of our menu lies in a diverse collection of spices from across the Sacred Valley, carefully selected to create distinctive and unforgettable flavors.',
            sectionProposito: 'PURPOSE',
            sectionPropositoText: 'Our mission is to captivate your senses through a memorable culinary experience.\\\\n\\\\nOur vision is to be a unique culinary destination, recognized for our authenticity and excellence.\\\\n\\\\nOur values are the continuous pursuit of innovation and the joy of serving you.',
          }
        }
      };

      // Variable global para almacenar las secciones seg\xFAn el idioma
      let globalSectionsData = [];
      let currentSectionIndex = 0;

      // Obtener secciones seg\xFAn el idioma actual
      function getSections() {
        const t = translations[currentLocale];
        if (!t) return [];
        return [
          { 
            title: t.about.sectionNombre, 
            content: t.about.sectionNombreText
          },
          { 
            title: t.about.sectionCocina, 
            content: t.about.sectionCocinaText
          },
          { 
            title: t.about.sectionProposito, 
            content: t.about.sectionPropositoText
          }
        ];
      }

      function updateSectionsContent() {
        const sections = getSections();
        
        // Actualizar la secci\xF3n actual sin transici\xF3n
        const sectionTitle = document.getElementById('section-title');
        const sectionContent = document.getElementById('section-content');
        
        if (sectionTitle && sectionContent && sections.length > 0) {
          // Desactivar transiciones temporalmente
          const originalTitleTransition = sectionTitle.style.transition;
          const originalContentTransition = sectionContent.style.transition;
          
          sectionTitle.style.transition = 'none';
          sectionContent.style.transition = 'none';
          
          // Cambiar contenido sin animaci\xF3n
          sectionTitle.textContent = sections[currentSectionIndex].title;
          sectionContent.textContent = sections[currentSectionIndex].content;
          
          // Restaurar transiciones
          setTimeout(() => {
            sectionTitle.style.transition = originalTitleTransition;
            sectionContent.style.transition = originalContentTransition;
          }, 50);
        }
        
        // Actualizar el array de secciones global
        globalSectionsData = sections;
      }

      // Inicializar secciones al cargar
      globalSectionsData = getSections();
      updateSectionsContent();

      // Centrar el enlace activo en m\xF3vil
      function centerActiveLink() {
        const nav = document.getElementById('bottom-nav');
        const activeLink = nav?.querySelector('.active-link');
        
        if (nav && activeLink && window.innerWidth < 768) {
          const navRect = nav.getBoundingClientRect();
          const linkRect = activeLink.getBoundingClientRect();
          const scrollLeft = linkRect.left - navRect.left - (navRect.width / 2) + (linkRect.width / 2);
          
          nav.scrollTo({
            left: nav.scrollLeft + scrollLeft,
            behavior: 'smooth'
          });
        }
      }

      // Ejecutar al cargar y al redimensionar
      window.addEventListener('load', centerActiveLink);
      window.addEventListener('resize', centerActiveLink);

      // Navegaci\xF3n entre secciones
      const sectionTitle = document.getElementById('section-title');
      const sectionContent = document.getElementById('section-content');
      const prevBtn = document.getElementById('prev-section');
      const nextBtn = document.getElementById('next-section');
      const prevBtnMobile = document.getElementById('prev-section-mobile');
      const nextBtnMobile = document.getElementById('next-section-mobile');

      function updateSection(index) {
        if (index < 0 || !globalSectionsData || globalSectionsData.length === 0) return;
        
        currentSectionIndex = index;
        
        if (sectionTitle && sectionContent) {
          // Usar un cross-fade suave: fade out primero, luego cambiar contenido y fade in
          
          // Paso 1: Fade out del contenido actual
          sectionTitle.style.transition = 'opacity 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          sectionContent.style.transition = 'opacity 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          sectionTitle.style.opacity = '0';
          sectionContent.style.opacity = '0';
          
          // Paso 2: Despu\xE9s de que termine el fade out, cambiar contenido y fade in
          setTimeout(() => {
            // Usar las secciones actualizadas seg\xFAn el idioma
            let currentSections;
            if (globalSectionsData.length > 0) {
              currentSections = globalSectionsData;
            } else {
              currentSections = getSections();
            }
            
            if (currentSections && currentSections[index]) {
              sectionTitle.textContent = currentSections[index].title;
              sectionContent.textContent = currentSections[index].content;
            }
            
            // Fade in del nuevo contenido
            setTimeout(() => {
              sectionTitle.style.transition = 'opacity 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';
              sectionContent.style.transition = 'opacity 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';
              sectionTitle.style.opacity = '1';
              sectionContent.style.opacity = '1';
            }, 50);
          }, 300);
        }
      }

      function goToNextSection() {
        const sections = globalSectionsData.length > 0 ? globalSectionsData : getSections();
        if (sections.length === 0) return;
        const nextIndex = (currentSectionIndex + 1) % sections.length;
        updateSection(nextIndex);
      }

      function goToPrevSection() {
        const sections = globalSectionsData.length > 0 ? globalSectionsData : getSections();
        if (sections.length === 0) return;
        const prevIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
        updateSection(prevIndex);
      }

      // Event listeners para desktop
      if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
          e.preventDefault();
          goToPrevSection();
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
          e.preventDefault();
          goToNextSection();
        });
      }
      
      // Event listeners para m\xF3vil
      if (prevBtnMobile) {
        prevBtnMobile.addEventListener('click', function(e) {
          e.preventDefault();
          goToPrevSection();
        });
      }
      if (nextBtnMobile) {
        nextBtnMobile.addEventListener('click', function(e) {
          e.preventDefault();
          goToNextSection();
        });
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initNosotrosPage, { once: true });
    } else {
      initNosotrosPage();
    }
  })();<\/script> `])), maybeRenderHead(), addAttribute(`/${currentLocale}`, "href"), renderComponent($$result2, "LanguageSwitcher", $$LanguageSwitcher, { "currentLocale": currentLocale, "data-astro-cid-3eoq6qem": true }), t("about.sectionNombre", currentLocale), t("about.sectionNombreText", currentLocale), addressText, cityText, scheduleText, scheduleHours, addAttribute(`/${currentLocale}/nosotros`, "href"), aboutText, addAttribute(`/${currentLocale}/carta`, "href"), menuText, addAttribute(`https://amanto.meitre.com/`, "href"), reserveText, renderComponent($$result2, "TranslationScript", $$TranslationScript, { "data-astro-cid-3eoq6qem": true }), defineScriptVars({ currentLocale })) })}`;
}, "F:/Amanto/web_amanto/src/pages/[...lang]/nosotros.astro", void 0);

const $$file = "F:/Amanto/web_amanto/src/pages/[...lang]/nosotros.astro";
const $$url = "/[...lang]/nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Nosotros,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
