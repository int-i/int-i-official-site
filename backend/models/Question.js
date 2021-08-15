import mongoose from 'mongoose';

// 질문게시판의 질문 스키마
const questionSchema = new mongoose.Schema({
    
    seq :{
        type : Number,
        default : 0
    },
    //작성자, 질문제목, 질문내용, 질문올려진날짜
    author:{
        type : mongoose.Schema.Types.ObjectId, 
        ref : 'user', 
        required: true
    },
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

questionSchema.plugin(autoIncrement.plugin, {
    model: 'question',
    field: 'seq',
    startAt : 1,
    increment : 1
});

//questionSchema.index({ title: 'text', body: 'text' });
// 콜렉션 네임 소문자로 통일해요.. Question -> questions
// 어짜피 자동변환이긴 하지만..
const questions = mongoose.model('question', questionSchema);
export default questions;
