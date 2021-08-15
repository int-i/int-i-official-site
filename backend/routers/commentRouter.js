import express from "express";
import { PostCreateComment, PostDeleteComment, PostEditComment, GetComment } from "../controllers/commentController";
import { IsLogged } from "../middleware/auth";
import routes from "../routers/routes";

const commentRouter = express.Router();
commentRouter.post(routes.writecomment, IsLogged, PostCreateComment);
commentRouter.post(routes.delcomment + "/:id", IsLogged, PostDeleteComment);
commentRouter.post(routes.editcomment, IsLogged, PostEditComment);
commentRouter.get(routes.allcomment + "/:id", GetComment);

export default commentRouter;