"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const user_1 = __importDefault(require("../resolvers/user"));
const user_types_1 = require("../types/user-types");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const argon2_1 = __importDefault(require("argon2"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let UserResolver = class UserResolver {
    constructor() {
        this.userRespository = typeorm_1.getRepository(user_1.default);
        /*   @Query(() => User)
        async login(): Promise<User> {
          const token = jwt.sign({ foo: "bar" }, "shhhhh");
        } */
    }
    async users() {
        const users = await this.userRespository.find();
        return users;
    }
    async register({ username, email, password }) {
        try {
            const hash = await argon2_1.default.hash(password);
            const user = await this.userRespository
                .create({
                username,
                email,
                password: hash,
            })
                .save();
            const token = jsonwebtoken_1.default.sign({ username: user.username }, process.env.SECRET);
            return {
                token,
            };
        }
        catch (err) {
            return {
                errors: [{ field: err, message: err }],
            };
        }
    }
};
__decorate([
    type_graphql_1.Query(() => user_1.default),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    type_graphql_1.Mutation(() => user_types_1.UserToken),
    __param(0, type_graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_types_1.UsernameEmailPassword]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
UserResolver = __decorate([
    type_graphql_1.Resolver(user_1.default)
], UserResolver);
exports.default = UserResolver;
