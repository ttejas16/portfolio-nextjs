import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "lightblue": "#16b8bc",
        "darkgrey": "#191918"
      },
      animation: {
        'circle-spin': 'spinning 1s forwards',
        'fade-right-out': 'fadeRightOut 0.5s forwards',
      },
      keyframes: {
        spinning: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeRightOut: {
          '0%': { opacity: '1', transform: 'translateX(0%)' },
          '100%': { opacity: '0', transform: 'translateX(-100%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
