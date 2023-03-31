import type { AppProps } from 'next/app';

import { ThemeProvider } from '@mui/styles';
import { defaultTheme } from '@/styles/theme/light-theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
