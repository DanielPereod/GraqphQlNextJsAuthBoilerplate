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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserError = exports.UserToken = exports.UsernameEmailPassword = void 0;
const type_graphql_1 = require("type-graphql");
let UsernameEmailPassword = class UsernameEmailPassword {
};
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], UsernameEmailPassword.prototype, "username", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], UsernameEmailPassword.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], UsernameEmailPassword.prototype, "password", void 0);
UsernameEmailPassword = __decorate([
    type_graphql_1.ArgsType()
], UsernameEmailPassword);
exports.UsernameEmailPassword = UsernameEmailPassword;
let UserToken = class UserToken {
};
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserToken.prototype, "token", void 0);
__decorate([
    type_graphql_1.Field(() => [UserError], { nullable: true }),
    __metadata("design:type", Array)
], UserToken.prototype, "errors", void 0);
UserToken = __decorate([
    type_graphql_1.ObjectType()
], UserToken);
exports.UserToken = UserToken;
let UserError = class UserError {
};
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], UserError.prototype, "field", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], UserError.prototype, "message", void 0);
UserError = __decorate([
    type_graphql_1.ObjectType()
], UserError);
exports.UserError = UserError;
