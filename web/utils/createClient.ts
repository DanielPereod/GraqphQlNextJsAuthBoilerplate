import { cacheExchange, query } from "@urql/exchange-graphcache";
import { dedupExchange, fetchExchange } from "urql";
import { betterUpdateQuery } from "./betterUpdateQuery";
import {
  LoginMutation,
  MeDocument,
  MeQuery,
  RevokeRefreshTokenForUserDocument,
  RevokeRefreshTokenForUserMutation,
} from "../graphql/generated";

export const clientOptions = (ssrExchange: any) => ({
  url: process.env.NEXT_PUBLIC_SERVER_URL,
  fetchOptions: {
    credentials: "include" as const,
  },
  exhanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          revokeRefreshTokenForUser: (_result, args, cache, info) => {
            betterUpdateQuery<RevokeRefreshTokenForUserMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              () => ({ me: null })
            );
          },

          login: (_result, args, cache, info) => {
            betterUpdateQuery<LoginMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              (result, query) => {
                if (result.login.errors) {
                  return query;
                } else {
                  return {
                    me: result.login.token,
                  };
                }
              }
            );
          },
        },
      },
    }),
    ssrExchange,
    fetchExchange,
  ],
});
