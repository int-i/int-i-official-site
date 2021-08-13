import express from "express";
import routes from "./routes";
import {
	PostQuestion,
	GetAllQuestions,
	GetOneQuestion,
	PostDeleteQuestion,
	PostEditQuestion,
	PostRecommend
} from "../controllers/codeQController";

const codeqRouter = express.Router();

// 모든 게시글 조회, 특정 게시글 조회
codeqRouter.get('/', GetAllQuestions);
codeqRouter.get(routes.codeoneq, GetOneQuestion);

// 게시글 작성 POST
codeqRouter.post(routes.codewriteq, PostQuestion);

// 특정 게시글 DELETE
codeqRouter.post(routes.codedelq, PostDeleteQuestion);

// 게시글 수정 POST / 추천수 업데이트 GET
codeqRouter.post(routes.codeeditq, PostEditQuestion);
codeqRouter.get(routes.codelikesq, PostRecommend);


export default codeqRouter;