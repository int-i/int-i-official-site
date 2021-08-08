import express from "express";
import passport from "passport";
import routes from "./routes";
import { IsLogged, IsNotLogged } from "../middleware/auth";
import { 
    GetAuth,
    GetGithub,
    GetGithubCallback,
    GetKakao,
    GetKakaoCallback,
    GetGoogle,
    GetGoogleCallback
} from "../controllers/authController";

const authRouter = express.Router();

authRouter.get(routes.userinfo, IsLogged, GetAuth);

authRouter.get(routes.github, IsNotLogged, GetGithub);
authRouter.get(routes.github + routes.callback, IsNotLogged, GetGithubCallback);

authRouter.get(routes.kakao, IsNotLogged, GetKakao);
authRouter.get(routes.kakao + routes.callback, IsNotLogged, GetKakaoCallback);

authRouter.get(routes.google, IsNotLogged, GetGoogle);
authRouter.get(routes.google + routes.callback, IsNotLogged, GetGoogleCallback);

export default authRouter;