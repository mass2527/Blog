import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import type { AppProps } from 'next/app';

import AppLayout from '@/layouts/AppLayout';
import GlobalStyle from '@/styles/GlobalStyle';
import { darkTheme } from '@/styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
}

function AppShell(props: AppProps) {
  return (
    <>
      <RecoilRoot>
        <App {...props} />
      </RecoilRoot>
    </>
  );
}

export default AppShell;
