import mongoose from 'mongoose';

//질문 게시판에서 답변의 스키마
const answerSchema = new mongoose.Schema({

    //작성자 익명여부와 유저 아이디 가져오는거 구현해야함.
    //답변작성자, 답변 제목, 답변 내용, 답변 작성날짜
    author: String, 

    title: {
        type: String,
        required: true
    },
    contents: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const Answer = mongoose.model('answer', answerSchema);
export default Answer;

