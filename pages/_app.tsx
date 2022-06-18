import GlobalLayout from "layouts/GlobalLayout";
import type { AppProps } from "next/app";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import { darkTheme, lightTheme } from "styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
