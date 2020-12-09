"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./src/graphql/entities/User"));
const dotenv_1 = require("dotenv");
dotenv_1.config();
exports.default = {
    type: "postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    migrationsTableName: "luxsite_migration_table",
    entities: [User_1.default],
    logging: true,
    synchronize: true,
};
