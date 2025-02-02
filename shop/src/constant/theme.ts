// constants/theme.ts

// Type definitions
type ColorShade = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

type StatusColor = {
  light: string;
  DEFAULT: string;
  dark: string;
};

type TextColor = {
  primary: string;
  secondary: string;
  tertiary: string;
  disabled: string;
};

type ThemeColors = {
  primary: ColorShade;
  secondary: ColorShade;
  accent: ColorShade;
  success: StatusColor;
  error: StatusColor;
  warning: StatusColor;
  info: StatusColor;
  background: {
    light: string;
    DEFAULT: string;
    dark: string;
  };
  surface: {
    light: string;
    DEFAULT: string;
    dark: string;
  };
  border: {
    light: string;
    DEFAULT: string;
    dark: string;
  };
  text: TextColor;
};

type Spacing = {
  [key: string | number]: string;
};

type BorderRadius = {
  none: string;
  sm: string;
  DEFAULT: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  full: string;
};

type FontSize = {
  [key: string]: [string, { lineHeight: string }];
};

type FontWeight = {
  thin: string;
  normal: string;
  medium: string;
  semibold: string;
  bold: string;
  extrabold: string;
};

type Shadow = {
  sm: string;
  DEFAULT: string;
  md: string;
  lg: string;
  xl: string;
  none: string;
};

type ZIndex = {
  behind: number;
  default: number;
  sticky: number;
  dropdown: number;
  modal: number;
  popover: number;
  tooltip: number;
  toast: number;
};

export const colors: ThemeColors = {
  primary: {
    50: '#E6F7ED',
    100: '#C3EBD3',
    200: '#9FDEB9',
    300: '#7BD19F',
    400: '#57C485',
    500: '#33B76B',
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
};

export const spacing: Spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
  32: '128px',
};

export const borderRadius: BorderRadius = {
  none: '0',
  sm: '0.125rem',
  DEFAULT: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  full: '9999px',
};

export const fontSize: FontSize = {
  xs: ['0.75rem', { lineHeight: '1rem' }],
  sm: ['0.875rem', { lineHeight: '1.25rem' }],
  base: ['1rem', { lineHeight: '1.5rem' }],
  lg: ['1.125rem', { lineHeight: '1.75rem' }],
  xl: ['1.25rem', { lineHeight: '1.75rem' }],
  '2xl': ['1.5rem', { lineHeight: '2rem' }],
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
};

export const fontWeight: FontWeight = {
  thin: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
};

export const shadows: Shadow = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  none: 'none',
};

export const zIndex: ZIndex = {
  behind: -1,
  default: 1,
  sticky: 100,
  dropdown: 400,
  modal: 500,
  popover: 600,
  tooltip: 700,
  toast: 800,
};

export const getColor = (path: string): string => {
  return path.split('.').reduce((obj, key) => obj[key], colors as any);
};

export const commonStyles = {
  container: {
    base: 'flex-1 bg-background-light',
    safe: 'flex-1 bg-background-light',
  },
  card: {
    base: 'bg-surface-light rounded-lg shadow-md p-4',
    interactive: 'active:shadow-lg',
  },
  button: {
    primary: 'bg-primary-500 px-4 py-2 rounded-md',
    secondary: 'bg-secondary-500 px-4 py-2 rounded-md',
    outline: 'border-2 border-primary-500 px-4 py-2 rounded-md',
  },
  text: {
    h1: 'text-4xl font-bold text-text-primary',
    h2: 'text-3xl font-bold text-text-primary',
    h3: 'text-2xl font-semibold text-text-primary',
    body: 'text-base text-text-secondary',
    small: 'text-sm text-text-tertiary',
  },
} as const;

const theme = {
  colors,
  spacing,
  borderRadius,
  fontSize,
  fontWeight,
  shadows,
  zIndex,
  commonStyles,
  getColor,
};

export type Theme = typeof theme;
export default theme;