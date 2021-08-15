import express from 'express';
import routes from './routes';
import {
    postWriteNotice,
    postDeleteNotice,
    postEditNotice,
    getAllNotice,
    getOneNotice
} from '../controllers/noticeController.js'

const noticeRouter = express.Router();

// 게시글 작성
noticeRouter.post(routes.writeNotice, postWriteNotice);

// 게시글 삭제
noticeRouter.post(routes.deleteNotice, postDeleteNotice );

// 게시글 수정
noticeRouter.post(routes.editNotice, postEditNotice );

// 게시글 조회
noticeRouter.get(routes.allNotice, getAllNotice);
noticeRouter.get(routes.oneNotice, getOneNoticSe);

export default noticeRouter;