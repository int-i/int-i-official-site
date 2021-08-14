import express from "express";
import routes from "./routes";
import {
	GetAllQuestions,
	GetOneQuestion,
	PostQuestion,
	PostDeleteQuestion,
	PostEditPost
} from "../controllers/questionController";
import { PostCreateTag, PostUpdateTag } from "../middleware/tag";

const questionRouter = express.Router();

// 모든 게시글 조회, 특정 게시글 조회
questionRouter.get('/', GetAllQuestions);
questionRouter.post(routes.oneques, GetOneQuestion);

// 게시글 작성 POST
questionRouter.post(routes.writeques, PostQuestion, PostCreateTag);

// 특정 게시글 DELETE
questionRouter.post(routes.delques, PostDeleteQuestion);

// 게시글 수정 POST
questionRouter.post(routes.editques, PostEditPost, PostUpdateTag);

export default questionRouter;