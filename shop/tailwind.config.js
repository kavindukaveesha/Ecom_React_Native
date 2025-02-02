/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F7ED',
          100: '#C3EBD3',
          200: '#9FDEB9',
          300: '#7BD19F',
          400: '#57C485',
          500: '#33B76B', // Main primary color
          600: '#2E9E5D',
          700: '#29854F',
          800: '#236C41',
          900: '#1E5333',
        },
        secondary: {
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#4CAF50',
          600: '#43A047',
          700: '#388E3C',
          800: '#2E7D32',
          900: '#1B5E20',
        },
        accent: {
          50: '#F7FBE7',
          100: '#EAF4C3',
          200: '#DDED9F',
          300: '#D0E67B',
          400: '#C3DF57',
          500: '#B6D833',
          600: '#9FB92E',
          700: '#889A29',
          800: '#717B24',
          900: '#5A5C1F',
        },
        success: {
          light: '#86EFAC',
          DEFAULT: '#22C55E',
          dark: '#15803D',
        },
        error: {
          light: '#FCA5A5',
          DEFAULT: '#EF4444',
          dark: '#B91C1C',
        },
        warning: {
          light: '#FDE68A',
          DEFAULT: '#F59E0B',
          dark: '#B45309',
        },
        info: {
          light: '#93C5FD',
          DEFAULT: '#3B82F6',
          dark: '#1D4ED8',
        },
        background: {
          light: '#FFFFFF',
          DEFAULT: '#F9FAFB',
          dark: '#F3F4F6',
        },
        surface: {
          light: '#FFFFFF',
          DEFAULT: '#F9FAFB',
          dark: '#F3F4F6',
        },
        border: {
          light: '#E5E7EB',
          DEFAULT: '#D1D5DB',
          dark: '#9CA3AF',
        },
        text: {
          primary: '#111827',
          secondary: '#4B5563',
          tertiary: '#6B7280',
          disabled: '#9CA3AF',
        },
      },
      spacing: {
        '0': '0px',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '32': '128px',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',    // 2px
        'DEFAULT': '0.25rem', // 4px
        'md': '0.375rem',    // 6px
        'lg': '0.5rem',      // 8px
        'xl': '0.75rem',     // 12px
        '2xl': '1rem',       // 16px
        'full': '9999px',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],     // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],    // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],  // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],     // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],  // 36px
      },
      fontWeight: {
        thin: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        'none': 'none',
      },
      zIndex: {
        'behind': -1,
        'default': 1,
        'sticky': 100,
        'dropdown': 400,
        'modal': 500,
        'popover': 600,
        'tooltip': 700,
        'toast': 800,
      },
    },
    // Screen breakpoints
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
  // Enable dark mode if needed
  darkMode: 'class', // or 'media' for system preferences
};