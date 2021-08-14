import mongoose from 'mongoose';

/*
 * 한 게시글에 좋아요 인당 하나를 구현하기 위한 likeSchema.
 * 자동생성되는 _id는 유일무이하다고 생각해서 문제와 답변에 대한 좋아요 여부 다 여기에서 관리.
 */
const likeSchema = new mongoose.Schema({
	nickname: String,
	qoraId: String
});

const Like = mongoose.model('like', likeSchema);
export default Like;
