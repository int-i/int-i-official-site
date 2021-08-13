import mongoose from 'mongoose';

// 게시물 좋아요 한 게시글에 인당 하나 구현하기 위한 스키마
const likeSchema = new mongoose.Schema({
	nickname: String,
	codeqId: String
});

const Like = mongoose.model('like', likeSchema);
export default Like;
