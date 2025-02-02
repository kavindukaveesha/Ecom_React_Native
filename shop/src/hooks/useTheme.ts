import { useColorScheme } from 'react-native';
import theme, { Theme } from '../constant/theme';

interface ActiveColors {
  background: string;
  text: string;
  surface: string;
  border: string;
}

interface UseThemeReturn extends Theme {
  isDark: boolean;
  activeColors: ActiveColors;
}

export const useTheme = (): UseThemeReturn => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const activeColors: ActiveColors = {
    background: isDark ? theme.colors.background.dark : theme.colors.background.light,
    text: isDark ? theme.colors.text.primary : theme.colors.text.secondary,
    surface: isDark ? theme.colors.surface.dark : theme.colors.surface.light,
    border: isDark ? theme.colors.border.dark : theme.colors.border.light,
  };

  return {
    isDark,
    ...theme,
    activeColors,
  };
};

export default useTheme;