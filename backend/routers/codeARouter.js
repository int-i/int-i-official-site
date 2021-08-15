import express from "express";
import routes from "./routes";
import {
	GetAllAnswers,
	PostAnswer,
	PostDeleteAnswer,
	PostEditAnswer,
	PostRecommend
} from "../controllers/codeAController";
import { IsMember } from "../middleware/auth";

const codeARouter = express.Router();

// 모든 게시글 조회, 특정 게시글 조회
codeARouter.get('/', GetAllAnswers);

// 게시글 작성 POST
codeARouter.post(routes.codewritea, IsMember, PostAnswer);

// 특정 게시글 DELETE
codeARouter.post(routes.codedela, IsMember, PostDeleteAnswer);

// 게시글 수정 POST / 추천수 업데이트 GET
codeARouter.post(routes.codeedita, IsMember, PostEditAnswer);
codeARouter.post(routes.codelikesa, PostRecommend);


export default codeARouter;