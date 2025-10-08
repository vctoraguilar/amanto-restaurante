/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
        colors: {
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            primary: {
                DEFAULT: 'hsl(var(--primary))',
                foreground: 'hsl(var(--primary-foreground))'
            },
            secondary: {
                DEFAULT: 'hsl(var(--secondary))',
                foreground: 'hsl(var(--secondary-foreground))'
            },
            destructive: {
                DEFAULT: 'hsl(var(--destructive))',
                foreground: 'hsl(var(--destructive-foreground))'
            },
            muted: {
                DEFAULT: 'hsl(var(--muted))',
                foreground: 'hsl(var(--muted-foreground))'
            },
            accent: {
                DEFAULT: 'hsl(var(--accent))',
                foreground: 'hsl(var(--accent-foreground))'
            },
            popover: {
                DEFAULT: 'hsl(var(--popover))',
                foreground: 'hsl(var(--popover-foreground))'
            },
            card: {
                DEFAULT: 'hsl(var(--card))',
                foreground: 'hsl(var(--card-foreground))'
            },
            chart: {
                '1': 'hsl(var(--chart-1))',
                '2': 'hsl(var(--chart-2))',
                '3': 'hsl(var(--chart-3))',
                '4': 'hsl(var(--chart-4))',
                '5': 'hsl(var(--chart-5))'
            }
        },
        borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)'
        },
        keyframes: {
            'accordion-down': {
                from: { height: '0' },
                to: { height: 'var(--radix-accordion-content-height)' }
            },
            'accordion-up': {
                from: { height: 'var(--radix-accordion-content-height)' },
                to: { height: '0' }
            },
            // --- AÑADIDOS ---
            aurora: {
              from: { backgroundPosition: '50% 50%, 50% 50%' },
              to: { backgroundPosition: '350% 50%, 350% 50%' },
            },
            spotlight: {
              '0%': { opacity: 0, transform: 'translate(-72%, -62%) scale(0.5)' },
              '100%': { opacity: 1, transform: 'translate(-50%,-40%) scale(1)' },
            },
			'gentle-glow': {
			'0%, 100%': { opacity: '0.2' }, // Opacidad inicial y final (20%)
			'50%': { opacity: '0.3' },      // Opacidad máxima (30%)
			},
            // --- FIN DE AÑADIDOS ---
        },
        animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
            // --- AÑADIDOS ---
            aurora: 'aurora 200s linear infinite', // <-- Aquí puedes cambiar la velocidad (120s es lento)
            spotlight: 'spotlight 2s ease .75s 1 forwards',
			'gentle-glow': 'gentle-glow 10s ease-in-out infinite',
            // --- FIN DE AÑADIDOS ---
        },
        fontFamily: {
            'sans': ['Figtree', 'sans-serif'],      // Para Títulos
            'body': ['Questrial', 'sans-serif'],    // Para Párrafos
        },
    }
  },
  plugins: [require("tailwindcss-animate")],
}