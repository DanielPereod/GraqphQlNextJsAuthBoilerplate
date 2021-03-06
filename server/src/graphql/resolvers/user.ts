import argon2 from "argon2";
import { verify } from "jsonwebtoken";
import { Arg, Args, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { getRepository } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { MyContext } from "../../types/MyContext";
import {
  createAccessToken,
  createRefreshToken,
  sendRefreshToken,
} from "../../utils/auth";
import User from "../entities/User";
import {
  TokenResponse,
  UsernameEmailPassword,
  UserToken,
  UserResponse,
} from "../types/user-types";

@Resolver(User)
export default class UserResolver {
  @Query(() => UserResponse)
  async me(@Ctx() { req, res }: MyContext): Promise<UserResponse> {
    const token = req.cookies.jid;
    if (!token) {
      return { errors: [{ field: "token", message: "not found" }] };
    }
    const payload = verify(token, process.env.REFRESH_TOKEN_SECRET);

    if (!payload) {
      return { errors: [{ field: "token", message: "not valid" }] };
    }

    const user = await User.findOne(payload["userId"]);

    if (!user) {
      return { errors: [{ field: "user", message: "not found" }] };
    }

    return {
      user,
    };
  }

  @Query(() => TokenResponse)
  async refreshToken(@Ctx() { req, res }: MyContext): Promise<TokenResponse> {
    const token = req.cookies.jid;
    if (!token) {
      return { success: false, accessToken: "" };
    }

    let payload: any;
    try {
      payload = verify(token, process.env.REFRESH_TOKEN_SECRET);
    } catch (error) {
      return { success: false, accessToken: "" };
    }

    const user = await User.findOne({ id: payload.userId });
    if (!user) {
      return { success: false, accessToken: "" };
    }

    if (user.tokenVersion !== payload.tokenVersion) {
      return { success: false, accessToken: "" };
    }

    sendRefreshToken(res, createRefreshToken(user));

    return { success: true, accessToken: createAccessToken(user) };
  }

  @Mutation(() => Boolean)
  async revokeRefreshTokenForUser(
    @Arg("userId", () => String) userId: string,
    @Ctx() { res, req }: MyContext
  ): Promise<Boolean> {
    try {
      await getRepository(User).increment({ id: userId }, "tokenVersion", 1);
      res.clearCookie("jid");
      return true;
    } catch (error) {
      return false;
    }
  }

  @Mutation(() => UserToken)
  async register(
    @Args() { username, email, password }: UsernameEmailPassword
  ): Promise<UserToken> {
    try {
      const hash = await argon2.hash(password);

      const user = await User.create({
        username,
        email,
        password: hash,
      }).save();
      return {
        token: createAccessToken(user),
      };
    } catch (err) {
      return {
        errors: [{ field: err, message: err }],
      };
    }
  }

  @Mutation(() => UserToken)
  async login(
    @Args() { username, email, password }: UsernameEmailPassword,
    @Ctx() { req, res }: MyContext
  ): Promise<UserToken> {
    try {
      const user = await User.findOne({
        where: [{ username }, { email }],
      });

      if (!user) {
        return {
          errors: [
            { field: "username", message: "incorrect login information" },
          ],
        };
      }

      const valid = await argon2.verify(user.password, password);
      if (!valid) {
        return {
          errors: [
            { field: "username", message: "incorrect login information" },
          ],
        };
      }

      sendRefreshToken(res, createRefreshToken(user));

      return {
        token: createAccessToken(user),
      };
    } catch (error) {}
  }

  @Mutation(() => UserToken)
  async googleLogin(
    @Ctx() { res }: MyContext,
    @Args() { email, username, password }: UsernameEmailPassword
  ): Promise<UserToken> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      try {
        const user = await User.create({
          username: `${username}-${uuidv4()}`,
          email,
          password,
        }).save();
        sendRefreshToken(res, createRefreshToken(user));
        return {
          token: createAccessToken(user),
        };
      } catch (err) {
        return {
          errors: [{ field: err, message: err }],
        };
      }
    } else if (user) {
      sendRefreshToken(res, createRefreshToken(user));
      return {
        token: createAccessToken(user),
      };
    }

    return {
      errors: [{ field: "user", message: "something went wrong" }],
    };
  }
}
