import express from "express";
import routes from "./routes";
import {} from "../controllers/userController";

const userRouter = express.Router();

/* GET users listing. */
userRouter.get('/', Users); //api/users


export default userRouter;