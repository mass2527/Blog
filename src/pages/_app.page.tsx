import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import type { AppProps } from "next/app";

import GlobalLayout from "@/layouts/GlobalLayout";
import GlobalStyle from "@/styles/GlobalStyle";
import { darkTheme } from "@/styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
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
