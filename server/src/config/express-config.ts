import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { verify } from "jsonwebtoken";
import User from "../graphql/entities/User";
import {
  createAccessToken,
  createRefreshToken,
  sendRefreshToken,
} from "../utils/auth";

export const expressApp = () => {
  const app = express();
  app.use(cors());
  app.use(cookieParser());

  /* app.post("/refresh-token", async (req, res) => {
    const token = req.cookies.jid;
    if (!token) {
      return res.send({ ok: false, accessToken: "" });
    }

    let payload: any;
    try {
      payload = verify(token, process.env.REFRESH_TOKEN_SECRET);
    } catch (error) {
      res.send({ ok: false });
    }

    const user = await User.findOne({ id: payload.userId });
    if (!user) {
      res.send({ ok: false, accessToken: "" });
    }

    if (user.tokenVersion !== payload.tokenVersion) {
      res.send({ ok: false, accessToken: "" });
    }

    sendRefreshToken(res, createRefreshToken(user));

    return res.send({ ok: true, accessToken: createAccessToken(user) });
  }); */

  app.listen({ port: process.env.SERVER_PORT }, () =>
    console.log(
      `Server ready at http://localhost:${process.env.SERVER_PORT}/graphql`
    )
  );

  return app;
};
