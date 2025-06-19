/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
    	fontFamily: {
    		sans: [
    			'Inter',
    			'ui-sans-serif',
    			'system-ui',
    			'-apple-system',
    			'BlinkMacSystemFont',
    			'Segoe UI',
    			'Roboto',
    			'Helvetica Neue',
    			'Arial',
    			'Noto Sans',
    			'sans-serif',
    			'Apple Color Emoji',
    			'Segoe UI Emoji',
    			'Segoe UI Symbol',
    			'Noto Color Emoji'
    		],
    		serif: [
    			'ui-serif',
    			'Georgia',
    			'Cambria',
    			'Times New Roman',
    			'Times',
    			'serif'
    		],
    		mono: [
    			'ui-monospace',
    			'SFMono-Regular',
    			'Menlo',
    			'Monaco',
    			'Consolas',
    			'Liberation Mono',
    			'Courier New',
    			'monospace'
    		]
    	},
    	screens: {
    		xs: '576',
    		sm: '640px',
    		md: '768px',
    		lg: '1024px',
    		xl: '1280px',
    		'2xl': '1536px'
    	},
    	extend: {
    		typography: '(theme) => ({\r\n				DEFAULT: {\r\n					css: {\r\n						color: theme("colors.gray.500"),\r\n						maxWidth: "65ch",\r\n					},\r\n				},\r\n				invert: {\r\n					css: {\r\n						color: theme("colors.gray.400"),\r\n					},\r\n				},\r\n			})',
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
};
