import express from "express";
import routes from "./routes";
import {
	PostAnswer,
	GetAllAnswers,
	PostDeleteAnswer,
	PostEditAnswer
} from "../controllers/answerController";

const ansRouter = express.Router();

// 답글 작성 POST
ansRouter.post(routes.writeans, PostAnswer);

// 모든 답글 조회
ansRouter.get('/', GetAllAnswers);

// 특정 답글 DELETE
ansRouter.post(routes.delans, PostDeleteAnswer);

// 답글 수정 POST
ansRouter.post(routes.editans, PostEditAnswer);

export default ansRouter;