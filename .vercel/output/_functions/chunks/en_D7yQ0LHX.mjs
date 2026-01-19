import { a as createAstro, c as createComponent, e as addAttribute, r as renderTemplate, b as renderComponent, g as renderHead, h as renderSlot, m as maybeRenderHead } from './astro/server_BPEG-9I1.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$2 = createAstro("https://amantorestaurante.com");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "F:/Amanto/web_amanto/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro("https://amantorestaurante.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Restaurante Amanto - Experiencia culinaria \xFAnica en Ollantaytambo, Cusco, Per\xFA", lang } = Astro2.props;
  const currentLang = lang || Astro2.params?.lang || "es";
  const imageUrl = `${Astro2.url.origin}/social-preview.png`;
  return renderTemplate`<html${addAttribute(currentLang, "lang")}> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(Astro2.url.href, "content")}><meta property="og:image"${addAttribute(imageUrl, "content")}><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(imageUrl, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;900&family=Questrial&display=swap" rel="stylesheet">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="font-body"> <div id="aurora-background" class="fixed inset-0 z-0"> <div class="aurora-bg absolute inset-0"></div> <div class="absolute inset-0 bg-black/20"></div> </div> <div class="relative z-10 min-h-screen"> ${renderSlot($$result, $$slots["default"])} </div>  </body> </html>`;
}, "F:/Amanto/web_amanto/src/layouts/Layout.astro", void 0);

function getLocalizedPath(locale, path = "/") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (cleanPath === "/") {
    return `/${locale}`;
  }
  return `/${locale}${cleanPath}`;
}
function removeLocalePrefix(pathname, locales) {
  for (const locale of locales) {
    if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
      return pathname.replace(`/${locale}`, "") || "/";
    }
  }
  return pathname;
}

const $$Astro = createAstro("https://amantorestaurante.com");
const $$LanguageSwitcher = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LanguageSwitcher;
  const { currentLocale: propLocale } = Astro2.props;
  const locales = ["en", "es"];
  const currentLocale = propLocale || Astro2.params?.lang || "en";
  const otherLocale = locales.find((locale) => locale !== currentLocale) || "en";
  const currentPath = removeLocalePrefix(Astro2.url.pathname, locales);
  const otherLocaleUrl = getLocalizedPath(otherLocale, currentPath);
  return renderTemplate`${maybeRenderHead()}<div class="absolute top-[5.5vh] right-[5vw] md:right-[8.5vw] font-bold text-xs md:text-base tracking-[2px] md:tracking-[4.80px] leading-normal whitespace-nowrap z-50" role="navigation" aria-label="Language selector"> <a${addAttribute(otherLocaleUrl, "href")} class="text-white tracking-[0.77px] hover:text-[#f49f13] transition-colors"${addAttribute(`Switch to ${otherLocale.toUpperCase()}`, "aria-label")}${addAttribute(otherLocale, "hreflang")}> ${otherLocale.toUpperCase()} </a> <span class="text-white tracking-[0.77px]"> | </span> <span class="text-[#f49f13] tracking-[0.77px]" aria-current="true"> ${currentLocale.toUpperCase()} </span> </div>`;
}, "F:/Amanto/web_amanto/src/components/LanguageSwitcher.astro", void 0);

const nav$1 = {
	home: "Inicio",
	about: "NOSOTROS",
	menu: "CARTA",
	reserve: "RESERVA"
};
const about$1 = {
	title: "Nosotros",
	sectionNombre: "NOMBRE",
	sectionNombreText: "Nuestro nombre, \"Amanto\", honra la leyenda más poderosa de Ollantaytambo. Nace de la fusión del valiente general Ollantay y su rol como el amante que desafió un imperio por amor. Esa es nuestra esencia: un espíritu de lucha y pasión.\nAdicionalmente, \"Amanto\" es un gesto: \"yo amanto\", el acto de abrigar y proteger. Así, nuestro nombre también es una promesa: ser un refugio cálido en el corazón de los Andes.",
	sectionCocina: "COCINA",
	sectionCocinaText: "Amanto elabora su propia interpretación de los platos peruanos y su cocina está basada en especias locales: verduras cultivadas como la quinua, papa andina; trucha de río y carne de res autóctona.\n\nLa base de nuestra carta es una amplia colección de especias de todo Valle Sagrado, que hemos seleccionado con sumo cuidado para crear experiencias únicas e inolvidables.",
	sectionProposito: "PROPÓSITO",
	sectionPropositoText: "Nuestra misión es cautivar tus sentidos a través de una experiencia culinaria memorable.\n\nNuestra visión es ser un destino culinario único, reconocido por nuestra excelencia y autenticidad.\n\nNuestros valores son la búsqueda constante de la innovación y la felicidad para atender."
};
const reserve$1 = {
	title: "ÚNETE A LA EXPERIENCIA AMANTO",
	description: "Descubre por qué somos únicos y déjanos sorprenderte con nuestra pasión por la gastronomía",
	button: "Reservar"
};
const menu$1 = {
	title: "Nuestra Carta",
	description: "Una experiencia culinaria que cuenta historias de amor, tradición y pasión",
	storyTitle: "¿Qué hay detrás de nuestro nombre?",
	storyText1: "A estas alturas de tu viaje ya has conocido el lado material y palpable de nuestro pueblo de Ollantaytambo; canchas inkas, terrazas y construcciones de piedra esculpidas por nuestros ancestros. Pero, ¿Qué hay del lado inmaterial de nuestros antepasados, el trabajo arduo, las tristezas, las fiestas o los amoríos?",
	storyText2: "Amoríos incluso prohibidos, vamos! ¿quién no ha tenido un amor prohibido en sus vidas?, pero del que les queremos hablar fue uno que dividió estas tierras en dos frentes, todo por el amor de Cusi Qoyllor, princesa Inka, hija del último Inka Pachacuteq, y amor prohibido de su general de guerra, Ollantay.",
	storyText3: "Esté, era un romance imposible por la diferencia de clases de la época Inka, teniendo que verse cual amantes, a escondidas, hasta que fueron separados, iniciándose una guerra sin treguas, a morir.",
	storyText4: "Por ello, cuando recorras nuestras calles, sabrás que ahí se luchó por el amor, amores prohibidos que aun se tejen en nuestro pueblo, amores que fueron casi imposibles, pero fueron triunfantes como el de Juan y Elsa o Raúl y Raquel, nuestros padres, o como el de nosotros, Carmen y Alonso.",
	storyConclusion: "Este amor ahora se materializa en nuestra comida sagrada. Bienvenido a Amanto.",
	appetizers: "Aperitivos",
	soups: "Sopas",
	mainCourses: "Fondos",
	desserts: "Postres",
	toShare: "Para Compartir",
	toShareNote: "Pide tu piqueo con papas nativas o ensalada de la casa",
	authorCocktails: "Cócteles de Autor",
	cocktails: "Cócteles",
	mixedDrinks: "Cócteles",
	forWinter: "Para el Frío",
	wines: "Vinos",
	winesNote: "Copa - Botella",
	redWines: "Tintos",
	whiteWines: "Blancos",
	beers: "Cervezas",
	refreshing: "Refrescantes",
	refreshingNote: "Bebidas sin Alcohol",
	coldDrinks: "Bebidas Frías",
	hotInfusions: "Infusiones Calientes",
	ctaTitle: "¿Listo para vivir la experiencia Amanto?",
	ctaDescription: "Reserva tu mesa y déjate cautivar por nuestra propuesta culinaria",
	reserveTable: "Reservar Mesa"
};
const footer$1 = {
	description: "Experiencias culinarias únicas en el corazón del Valle Sagrado",
	contact: "Contacto",
	address: "Calle Horno S/N (Esquina con la plaza)",
	city: "Ollantaytambo, Urubamba, Cusco",
	followUs: "Síguenos",
	schedule: "Horario",
	scheduleText: "Lunes a Domingo",
	scheduleHours: "12:30 PM - 09:00 PM",
	rights: "Todos los derechos reservados"
};
const esTranslations = {
	nav: nav$1,
	about: about$1,
	reserve: reserve$1,
	menu: menu$1,
	footer: footer$1
};

const nav = {
	home: "HOME",
	about: "ABOUT US",
	menu: "MENU",
	reserve: "RESERVE"
};
const about = {
	title: "About Us",
	sectionNombre: "NAME",
	sectionNombreText: "Our name Amanto, pays tribute to Ollantaytambo's most powerful legend. It is born from the fusion of the brave General Ollantay and his role as the lover who defied an empire for love. That is our essence: a spirit of struggle and passion. Furthermore, \"Amanto\" is a gesture: \"I Amanto,\" the act of embracing and protecting. In this way, our name is also a promise to be a warm refuge in the heart of the Andes.",
	sectionCocina: "CUISINE",
	sectionCocinaText: "Amanto creates its own interpretation of Peruvian cuisine, rooted in local ingredients such as quinoa, Andean potatoes, river trout, and native beef.\n\nThe foundation of our menu lies in a diverse collection of spices from across the Sacred Valley, carefully selected to create distinctive and unforgettable flavors.",
	sectionProposito: "PURPOSE",
	sectionPropositoText: "Our mission is to captivate your senses through a memorable culinary experience.\n\nOur vision is to be a unique culinary destination, recognized for our authenticity and excellence.\n\nOur values are the continuous pursuit of innovation and the joy of serving you."
};
const reserve = {
	title: "JOIN THE AMANTO EXPERIENCE",
	description: "Discover why we are unique and let us surprise you with our passion for gastronomy",
	button: "Reserve"
};
const menu = {
	title: "Our Menu",
	description: "A culinary experience that tells stories of love, tradition, and passion",
	storyTitle: "The meaning behind our name",
	storyText1: "At this point on your trip you have likely encountered the visual and material side of Ollantaytambo: the Inca courts, terraces, and stone constructions sculpted by our ancestors. But, what about the immaterial side? The invisible hard work, tears, celebrations, and love affairs? Even forbidden love affairs…",
	storyText2: "Now, who hasn't had a forbidden love in their life? In Ollantaytambo, there was a forbidden love that would divide these lands into two, and that has reverberated throughout our community for generations. It was a love between Cusi Qoyllor, an Inka princess and daughter of the last Inka, Pachacuteq, and Pachacuteq's greatest war general, Ollantay.",
	storyText3: "Though Ollantay and Cusi Qoyllor were deeply in love, their marriage was impossible. During Incan times only royals (Incas) could marry other royals. But, General Ollantay was a commoner. So, they had to sneak around to see each other. One day, however, they were discovered and separated.",
	storyText4: "But, Ollantay refused to be separated from his true love—so he went to war with Inka Pachacuteq. Eventually, and despite all odds, Ollantay was reunited with Cusi Qoyllor. So, when you walk through the streets of Ollantaytambo, know that here, there was a fight for love.",
	storyConclusion: "This love is infused in our sacred food. Welcome to Amanto.",
	appetizers: "Appetizers",
	soups: "Soups",
	mainCourses: "Main Courses",
	desserts: "Desserts",
	toShare: "To Share",
	toShareNote: "Each snack comes with your choice of native potatoes or a house salad",
	authorCocktails: "Signature Cocktails",
	cocktails: "Cocktails",
	mixedDrinks: "Mixed Drinks",
	forWinter: "For the Winter",
	wines: "Wines",
	winesNote: "Glass - Bottle",
	redWines: "Red Wines",
	whiteWines: "White Wines",
	beers: "Beers",
	refreshing: "Refreshing Drinks",
	refreshingNote: "Non-alcoholic",
	coldDrinks: "Cold Drinks",
	hotInfusions: "Hot Infusions",
	ctaTitle: "Ready to live the Amanto experience?",
	ctaDescription: "Reserve your table and let yourself be captivated by our culinary proposal",
	reserveTable: "Reserve Table"
};
const footer = {
	description: "Unique culinary experiences in the heart of the Sacred Valley",
	contact: "Contact",
	address: "Calle Horno S/N (Corner with the plaza)",
	city: "Ollantaytambo, Urubamba, Cusco",
	followUs: "Follow Us",
	schedule: "Schedule",
	scheduleText: "Monday to Sunday",
	scheduleHours: "12:30 PM - 09:00 PM",
	rights: "All rights reserved"
};
const enTranslations = {
	nav: nav,
	about: about,
	reserve: reserve,
	menu: menu,
	footer: footer
};

export { $$Layout as $, enTranslations as a, $$LanguageSwitcher as b, esTranslations as e };
