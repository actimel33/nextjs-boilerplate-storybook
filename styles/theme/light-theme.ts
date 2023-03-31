import { createTheme, responsiveFontSizes, Theme, ThemeOptions } from '@material-ui/core/styles';

const createLightTheme = (options: ThemeOptions): Theme => createTheme({ ...options })
const sizes: ThemeOptions = {
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 1100,
      lg: 1280,
      xl: 1440,
    },
  },
};
let defaultTheme: Theme = createLightTheme({
  ...sizes,
  direction: 'ltr',
});

defaultTheme = responsiveFontSizes(defaultTheme);

export { defaultTheme };