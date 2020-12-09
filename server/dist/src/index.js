"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apolloserver_config_1 = require("./config/apolloserver-config");
const express_config_1 = require("./config/express-config");
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
const user_1 = __importDefault(require("./graphql/resolvers/user"));
dotenv_1.config();
const main = async () => {
    await typeorm_1.createConnection({
        type: "postgres",
        host: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        migrationsTableName: "luxsite_migration_table",
        entities: [user_1.default],
        logging: true,
        synchronize: true,
    });
    const app = express_config_1.expressApp();
    await apolloserver_config_1.apolloServer(app);
};
main();
