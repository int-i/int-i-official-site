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
import { PostCreateTag, PostUpdateTag, PostDelTag } from "../middleware/tag";
import { IsMember } from "../middleware/auth";

const codeQRouter = express.Router();

// 모든 게시글 조회, 특정 게시글 조회
codeQRouter.get('/', GetAllQuestions);
codeQRouter.get(routes.codeoneq + '/:id', GetOneQuestion);

// 게시글 작성 POST
codeQRouter.post(routes.codewriteq, IsMember, PostQuestion, PostCreateTag);

// 특정 게시글 DELETE
codeQRouter.post(routes.codedelq, IsMember, PostDeleteQuestion, PostDelTag);

// 게시글 수정 POST / 추천수 업데이트 GET
codeQRouter.post(routes.codeeditq, IsMember, PostEditQuestion, PostUpdateTag);
codeQRouter.post(routes.codelikesq, PostRecommend);


export default codeQRouter;