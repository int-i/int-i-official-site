import express from "express";
import routes from "./routes";
import {
	PostAnswer,
	GetAllAnswers,
	PostDeleteAnswer,
	PostEditAnswer
} from "../controllers/answerController";
import { IsMember } from "../middleware/auth";

const ansRouter = express.Router();

// 답글 작성 POST
ansRouter.post(routes.writeans, IsMember, PostAnswer);

// 모든 답글 조회
ansRouter.get('/', GetAllAnswers);

// 특정 답글 DELETE
ansRouter.post(routes.delans, IsMember, PostDeleteAnswer);

// 답글 수정 POST
ansRouter.post(routes.editans, IsMember, PostEditAnswer);

export default ansRouter;