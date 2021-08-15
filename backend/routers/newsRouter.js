import express from 'express';
import routes from "./routes";
import {
    postWriteNews,
    postDeleteNews,
    postEditNews,
    getAllNews,
    getOneNews
} from '../controllers/newsController'; 

const newsRouter = express.Router();

// 게시글 작성
newsRouter.post(routes.writeNews, postWriteNews);

// 게시글 삭제
newsRouter.post(routes.deleteNews, postDeleteNews );

// 게시글 수정
newsRouter.post(routes.editNews, postEditNews );

// 게시글 조회
newsRouter.get(routes.allNews, getAllNews);
newsRouter.get(routes.oneNews, getOneNews );

export default newsRouter;