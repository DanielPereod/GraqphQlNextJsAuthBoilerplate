import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  ssrMode: true,
  uri: process.env.NEXT_PUBLIC_SERVER_URL,
  credentials: "include",
  cache: new InMemoryCache(),
});
