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
import { PostCreateTag } from "../middleware/tag";

const codeQRouter = express.Router();

// 모든 게시글 조회, 특정 게시글 조회
codeQRouter.get('/', GetAllQuestions);
codeQRouter.post(routes.codeoneq, GetOneQuestion);

// 게시글 작성 POST
<<<<<<< HEAD
codeqRouter.post(routes.codewriteq, PostQuestion, PostCreateTag);
=======
codeQRouter.post(routes.codewriteq, PostQuestion);
>>>>>>> 6580f166ab1116e49f730b8eeab21a76a0a5be75

// 특정 게시글 DELETE
codeQRouter.post(routes.codedelq, PostDeleteQuestion);

// 게시글 수정 POST / 추천수 업데이트 GET
codeQRouter.post(routes.codeeditq, PostEditQuestion);
codeQRouter.post(routes.codelikesq, PostRecommend);


export default codeQRouter;