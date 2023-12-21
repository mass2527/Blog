import { ThemeProvider } from 'styled-components';
import { Analytics } from '@vercel/analytics/react';

import type { AppProps } from 'next/app';

import AppLayout from '@/layouts/AppLayout';
import GlobalStyle from '@/styles/GlobalStyle';
import { darkTheme } from '@/styles/theme';

import 'toastify-js/src/toastify.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <AppLayout>
        <Component {...pageProps} />
        <Analytics />
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
