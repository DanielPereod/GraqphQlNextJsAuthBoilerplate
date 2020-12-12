import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import UserResolver from "../graphql/resolvers/User";

export const apolloServer = async (app) => {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res }),
  });
  server.applyMiddleware({ app, cors: false });
};
