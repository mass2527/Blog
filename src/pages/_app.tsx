import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import type { AppProps } from "next/app";

import { useMediaQuery } from "@/hooks";
import GlobalLayout from "@/layouts/GlobalLayout";
import GlobalStyle from "@/styles/GlobalStyle";
import { darkTheme, lightTheme } from "@/styles/theme";

function AppShell({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <App Component={Component} {...pageProps} />
      </RecoilRoot>
    </>
  );
}

function App({ Component, pageProps }: AppProps) {
  const isDarkModePreffered = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <ThemeProvider theme={isDarkModePreffered ? darkTheme : lightTheme}>
      <GlobalStyle />
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </ThemeProvider>
  );
}

export default AppShell;
