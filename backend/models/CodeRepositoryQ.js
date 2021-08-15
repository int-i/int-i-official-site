import mongoose from 'mongoose';

// 코드 저장소의 문제 올릴 때 쓰는 스키마
const codeRepositoryQSchema = new mongoose.Schema({
    
    // 작성자, 제목, 내용, 질문올려진날짜, 추천수, 사람당 추천 여부
    author: String, 
    likecount: Number,

    title: {
        type: String,
        required: true
    },
    contents: {
        type: String,
        required: true
    },
    recommend: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            //default: []
        }
    ],
    tag: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "tags"
        }
    ],
});

const CodeRepositoryQ = mongoose.model('coderepositoryq', codeRepositoryQSchema);
export default CodeRepositoryQ;
