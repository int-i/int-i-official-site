import express from "express";
import routes from "./routes";
import {
	GetAllQuestions,
	GetOneQuestion,
	PostQuestion,
	PostDeleteQuestion,
	PostEditPost
} from "../controllers/questionController";

//getAllPost, getWrite, postWrite... 이것들 컨트롤러 구현 하고나서 다 바꿔줘야함.

const questionRouter = express.Router();

// 모든 게시글 조회, 특정 게시글 조회
questionRouter.get('/', GetAllQuestions);
questionRouter.get(routes.oneques, GetOneQuestion);

// 게시글 작성 POST
questionRouter.post(routes.writeques, PostQuestion);

// 특정 게시글 DELETE
questionRouter.post(routes.delques, PostDeleteQuestion);

// 게시글 수정 POST
questionRouter.post(routes.editques, PostEditPost);

export default questionRouter;