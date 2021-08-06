import express from "express";
import routes from "./routes";
import {
    PostLogin,
    PostJoin,
    Logout
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.post(routes.join, PostJoin);
userRouter.post(routes.login, PostLogin);
userRouter.post(routes.logout, Logout);

export default userRouter;