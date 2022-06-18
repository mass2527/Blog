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
        <Component {...pageProps} />
        <button type="button" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "라이트" : "다크"} 모드로 변경
        </button>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
