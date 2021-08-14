import mongoose from 'mongoose';

// 질문게시판의 질문 스키마
const questionSchema = new mongoose.Schema({
    
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
    tag: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "tags"
        }
    ]
});

<<<<<<< HEAD
// 콜렉션 네임 소문자로 통일해요.. Question -> questions
// 어짜피 자동변환이긴 하지만..
=======
>>>>>>> 6580f166ab1116e49f730b8eeab21a76a0a5be75
const Question = mongoose.model('question', questionSchema);
export default Question;
