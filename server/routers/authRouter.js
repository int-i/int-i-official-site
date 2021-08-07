import express from "express";
import passport from "passport";
import routes from "./routes";
import { IsLogged, IsNotLogged } from "../middleware/auth";
import { GetAuth, GetGithub, GetGithubCallback } from "../controllers/authController";

const authRouter = express.Router();

authRouter.get(routes.userinfo, IsLogged, GetAuth);
authRouter.get(routes.github, IsNotLogged, GetGithub);

// 콜백 후 자동로그인 됨.
authRouter.get(routes.github + routes.callback, IsNotLogged, GetGithubCallback);

export default authRouter;