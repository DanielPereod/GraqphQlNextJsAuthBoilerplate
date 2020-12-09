"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apolloServer = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const User_1 = __importDefault(require("../graphql/entities/User"));
exports.apolloServer = async (app) => {
    const server = new apollo_server_express_1.ApolloServer({
        schema: await type_graphql_1.buildSchema({
            resolvers: [User_1.default],
            validate: false,
        }),
        context: ({ req, res }) => ({ req, res }),
    });
    server.applyMiddleware({ app });
};
