import mongoose from 'mongoose';

// 질문게시판의 질문 스키마
const questionSchema = new mongoose.Schema({
    
    //작성자, 질문제목, 질문내용, 질문올려진날짜
    //author는 익명여부 구현해야함.
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

const Question = mongoose.model('question', questionSchema);
export default Question;
