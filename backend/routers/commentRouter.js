import express from "express";
import { PostCreateComment } from "../controllers/commentController";
import routes from "../routers/routes";

const commentRouter = express.Router();

commentRouter.post(routes.writecomment, PostCreateComment);

export default commentRouter;