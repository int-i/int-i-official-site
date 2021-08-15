import mongoose from 'mongoose';
import "./CodeRepositoryQ";

// 코드 저장소의 답변 올릴 때 쓰는 스키마
const codeRepositoryASchema = new mongoose.Schema({
    
    // 작성자, 제목, 내용, 답변올려진날짜, 추천수, 사람당 추천 여부
    author: String, 

    codeq: {
        type: mongoose.Types.ObjectId,
        ref: 'coderepositoryq'
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
    // user: [{
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'users'
    // }]
});

const CodeRepositoryA = mongoose.model('coderepositorya', codeRepositoryASchema);
export default CodeRepositoryA;
