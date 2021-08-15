import express from "express";
import { PostEditProfile, PostEditAvatar } from "../controllers/userController";
import routes from "./routes";
import multerAvatar from "../multer";

const userRouter = express.Router();

userRouter.post(routes.editprofile, PostEditProfile);

// fieldname avatar
userRouter.post(routes.editavatar, multerAvatar.single("avatar"), PostEditAvatar);

export default userRouter;