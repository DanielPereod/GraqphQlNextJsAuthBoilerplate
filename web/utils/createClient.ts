import { cacheExchange } from "@urql/exchange-graphcache";
import { dedupExchange, fetchExchange } from "urql";

export const clientOptions = (ssrExchange: any) => ({
  url: process.env.NEXT_PUBLIC_SERVER_URL,
  fetchOptions: {
    credentials: "include" as const,
  },
  exhanges: [dedupExchange, cacheExchange, ssrExchange, fetchExchange],
});
