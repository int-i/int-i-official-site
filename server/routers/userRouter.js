import express from "express";
import { PostEditProfile } from "../controllers/userController";
import routes from "./routes";

const userRouter = express.Router();

userRouter.post(routes.editprofile, PostEditProfile);

export default userRouter;