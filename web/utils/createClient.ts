import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
} from "urql";

export const clientOptions = (ssrExchange: any) => ({
  url: "http://localhost:4000/graphql",
  exhanges: [dedupExchange, cacheExchange, ssrExchange, fetchExchange],
});
