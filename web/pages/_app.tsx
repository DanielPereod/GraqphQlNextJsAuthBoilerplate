import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { theme } from "../styles/theme";
import React from "react";
import "../styles/globals.css";
import { Global } from "@emotion/react";
import fontFace from "../styles/font-face";
import { ApolloProvider } from "@apollo/client";
import { client } from "../utils/createApolloClient";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Global styles={fontFace} />
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
