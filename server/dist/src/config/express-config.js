"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
exports.expressApp = () => {
    const app = express_1.default();
    app.use(cors_1.default());
    app.listen({ port: process.env.SERVER_PORT }, () => console.log(`Server ready at http://localhost:${process.env.SERVER_PORT}/graphql`));
    return app;
};
