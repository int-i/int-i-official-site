import express from 'express';
import routes from './routes';
import {IsAdmin, IsMember} from '../middleware/auth.js'
import {
    postWriteNotice,
    postDeleteNotice,
    postEditNotice,
    getAllNotice,
    getOneNotice
} from '../controllers/noticeController.js'

const noticeRouter = express.Router();

// 게시글 작성
noticeRouter.post(routes.writeNotice, IsAdmin, postWriteNotice);

// 게시글 삭제
noticeRouter.post(routes.deleteNotice,IsAdmin, postDeleteNotice );

// 게시글 수정
noticeRouter.post(routes.editNotice, IsAdmin,postEditNotice );

// 게시글 조회
noticeRouter.get(routes.allNotice, IsMember, getAllNotice);
noticeRouter.get(routes.oneNotice, IsMember, getOneNotice);

export default noticeRouter;