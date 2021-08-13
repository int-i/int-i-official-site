import mongoose from 'mongoose';

// 질문게시판의 질문 스키마
const questionSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    
    //작성자, 질문제목, 질문내용, 질문올려진날짜
    author: String, 

    title: {
        type: String,
        required: true
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
    tags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "tag"
        }
    ]
});

// 콜렉션 네임 소문자로 통일해요.. Question -> question
// 어짜피 자동변환이긴 하지만..
const Question = mongoose.model('question', questionSchema);
export default Question;
