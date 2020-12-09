import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { theme } from "../styles/theme";
import React from "react";
import "../styles/globals.css";
import { Global } from "@emotion/react";
import fontFace from "../styles/font-face";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Global styles={fontFace} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
