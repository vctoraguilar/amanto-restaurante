# Restaurante Amanto - Sitio Web

Un sitio web elegante y moderno para el restaurante Amanto, construido con Astro y componentes de Aceternity UI.

## 🚀 Características

- **Diseño Elegante**: Tema oscuro con efectos aurora y gradientes
- **Componentes Interactivos**: Utilizando Aceternity UI para efectos visuales impactantes
- **Responsive**: Optimizado para todos los dispositivos
- **Tres Páginas Principales**:
  - **Home**: Página principal con hero section, carousel de platos y experiencia del restaurante
  - **Nosotros**: Historia del restaurante, equipo y valores
  - **Carta**: Menú completo con platos draggables, selección de vinos y menú del chef

## 🛠️ Tecnologías Utilizadas

- **Astro**: Framework web moderno
- **React**: Para componentes interactivos
- **Tailwind CSS**: Para estilos
- **Framer Motion**: Para animaciones
- **TypeScript**: Para tipado estático
- **Aceternity UI**: Componentes de interfaz elegantes

## 📦 Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

3. Abre [http://localhost:4321](http://localhost:4321) en tu navegador

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── Navigation.astro          # Navegación principal
│   └── ui/                       # Componentes de Aceternity UI
│       ├── AuroraBackground.tsx
│       ├── Spotlight.tsx
│       ├── Carousel.tsx
│       ├── DraggableCard.tsx
│       ├── FocusCards.tsx
│       ├── TextHoverEffect.tsx
│       ├── FlipWords.tsx
│       ├── HoverBorderGradient.tsx
│       ├── BackgroundGradient.tsx
│       ├── ImagesSlider.tsx
│       └── LayoutGrid.tsx
├── layouts/
│   └── Layout.astro              # Layout principal
├── lib/
│   └── utils.ts                  # Utilidades
├── pages/
│   ├── index.astro               # Página Home
│   ├── nosotros.astro            # Página Nosotros
│   └── carta.astro               # Página Carta
└── styles/
    └── globals.css               # Estilos globales
```

## 🎨 Componentes Incluidos

- **Aurora Background**: Fondo animado con gradientes
- **Spotlight**: Efectos de iluminación
- **Carousel**: Carrusel de imágenes con autoplay
- **Draggable Cards**: Tarjetas interactivas arrastrables
- **Focus Cards**: Tarjetas con efectos hover
- **Text Hover Effects**: Efectos de texto interactivos
- **Flip Words**: Texto que cambia automáticamente
- **Hover Border Gradient**: Botones con bordes animados
- **Background Gradient**: Fondos con gradientes
- **Images Slider**: Deslizador de imágenes
- **Layout Grid**: Grid responsivo con efectos

## 📸 Imágenes

Las imágenes del restaurante deben colocarse en la carpeta `public/images/`. Consulta `public/images/README.md` para la estructura recomendada.

## 🎯 Personalización

### Colores
Los colores del tema se pueden personalizar en `tailwind.config.mjs` y `src/styles/globals.css`.

### Contenido
- Edita los textos en cada página según tus necesidades
- Reemplaza las imágenes de ejemplo con fotografías reales del restaurante
- Ajusta precios y menús en la página de carta

### Componentes
Todos los componentes están modulares y se pueden reutilizar o personalizar según sea necesario.

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Pantallas grandes (1440px+)

## 🚀 Despliegue

Para construir el proyecto para producción:

```bash
npm run build
```

Los archivos estáticos se generarán en la carpeta `dist/`.

## 📄 Licencia

Este proyecto está diseñado específicamente para el restaurante Amanto.

---

**Restaurante Amanto** - Donde la gastronomía se convierte en arte.
