import express from 'express';
import routes from './routes';
import {
    postWritePromotion,
    postDeletePromotion,
    postEditPromotion,
    getAllPromotion,
    getOnePromotion
} from '../controller/promotionController';

const promotionRouter = express.Router();

// 게시글 작성
promotionRouter.post(routes.writePromotion, postWritePromotion);

// 게시글 삭제
promotionRouter.post(routes.deletePromotion, postDeletePromotion);

// 게시글 수정
promotionRouter.post(routes.editPromotion, postEditPromotion);

// 게시글 조회
promotionRouter.post(routes.allPromotion,getAllPromotion);
promotionRouter.post(routes.onePromotion,getOnePromotion);

export default promotionRouter;