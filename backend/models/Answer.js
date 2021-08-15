import mongoose from 'mongoose';
import "./Question";

//질문 게시판에서 답변의 스키마
const answerSchema = new mongoose.Schema({
  
    //답변작성자, 답변 제목, 답변 내용, 답변 작성날짜
    author:{
        type : mongoose.Schema.Types.ObjectId, 
        ref : 'user', 
        required: true
    },
    question: {
        type: mongoose.Types.ObjectId,
        ref: 'question'
    },
    contents: {
        type: String,
        required: true
    },
    anonymous: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const Answer = mongoose.model('answer', answerSchema);
export default Answer;

