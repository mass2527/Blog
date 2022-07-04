import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import type { AppProps } from "next/app";

import { useMediaQuery } from "@/hooks";
import GlobalLayout from "@/layouts/GlobalLayout";
import GlobalStyle from "@/styles/GlobalStyle";
import { darkTheme, lightTheme } from "@/styles/theme";

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
