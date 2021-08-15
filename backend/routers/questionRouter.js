import express from "express";
import routes from "./routes";
import {
	GetAllQuestions,
	GetOneQuestion,
	PostQuestion,
	PostDeleteQuestion,
	PostEditPost,
} from "../controllers/questionController";
import { PostCreateTag, PostUpdateTag, PostDelTag } from "../middleware/tag";
import { IsMember } from "../middleware/auth";

const questionRouter = express.Router();

// 모든 게시글 조회, 특정 게시글 조회
questionRouter.get("/", GetAllQuestions);
questionRouter.get(routes.oneques + "/:id", GetOneQuestion);

// 게시글 작성 POST
questionRouter.post(routes.writeques, IsMember, PostQuestion, PostCreateTag);

// 특정 게시글 DELETE
questionRouter.post(routes.delques, IsMember, PostDeleteQuestion, PostDelTag);

// 게시글 수정 EDIT
questionRouter.post(routes.editques, IsMember, PostEditPost, PostUpdateTag);

export default questionRouter;
