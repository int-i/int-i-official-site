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

const codeQRouter = express.Router();

// 모든 게시글 조회, 특정 게시글 조회
codeQRouter.get('/', GetAllQuestions);
codeQRouter.post(routes.codeoneq, GetOneQuestion);

// 게시글 작성 POST
codeQRouter.post(routes.codewriteq, PostQuestion, PostCreateTag);

// 특정 게시글 DELETE
codeQRouter.post(routes.codedelq, PostDeleteQuestion, PostDelTag);

// 게시글 수정 POST / 추천수 업데이트 GET
codeQRouter.post(routes.codeeditq, PostEditQuestion, PostUpdateTag);
codeQRouter.post(routes.codelikesq, PostRecommend);


export default codeQRouter;