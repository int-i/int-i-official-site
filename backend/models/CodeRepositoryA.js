import mongoose from 'mongoose';
import "./CodeRepositoryQ";
import autoIncrement from 'mongoose-auto-increment';
autoIncrement.initialize(mongoose.connection);

// 코드 저장소의 답변 올릴 때 쓰는 스키마
const codeRepositoryASchema = new mongoose.Schema({
    
    // 작성자, 제목, 내용, 답변올려진날짜, 추천수, 사람당 추천 여부
    seq:{
        type :Number,
        default : 0
    },
    author:{
        type : mongoose.Schema.Types.ObjectId, 
        ref : 'user', 
        required: true
    },
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

codeRepositoryASchema.plugin(autoIncrement.plugin, {
    model: 'coderepositorya',
    field: 'seq',
    startAt : 1,
    increment : 1
});


const coderepositoryas = mongoose.model('coderepositorya', codeRepositoryASchema);
export default coderepositoryas;
