import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
autoIncrement.initialize(mongoose.connection);

// 코드 저장소의 문제 올릴 때 쓰는 스키마
const codeRepositoryQSchema = new mongoose.Schema({
    
    // 작성자, 제목, 내용, 질문올려진날짜, 추천수, 사람당 추천 여부
    seq :{
        type : Number,
        default : 0
    },
    author:{
        type : mongoose.Schema.Types.ObjectId, 
        ref : 'user', 
        required: true
    },
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
    user: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            //unique: true
        }
    ]
});

codeRepositoryQSchema.plugin(autoIncrement.plugin, {
    model: 'coderepositoryq',
    field: 'seq',
    startAt : 1,
    increment : 1
});

const coderepositoryqs = mongoose.model('coderepositoryq', codeRepositoryQSchema);
export default coderepositoryqs;
