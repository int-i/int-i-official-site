import express from "express";
import routes from "./routes.js";
import { Users } from "../controllers/userController.js";

const userRouter = express.Router();

/* GET users listing. */
userRouter.get('/', Users); //api/users


export default userRouter;