import express from "express";
import routes from "./routes";
import { IsLogged } from "../middleware/auth";
import { GetAuth } from "../controllers/authController";

const authRouter = express.Router();

authRouter.get(routes.userinfo, IsLogged, GetAuth);

export default authRouter;