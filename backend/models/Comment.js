import mongoose from 'mongoose';

//질문 게시판에서 답변의 스키마
const commentSchema = new mongoose.Schema({
  
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    post: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "questions",
            unique: true
        },
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "coderepositoryqs",
            unique: true
        },
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "notices",
            unique: true
        },
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "news",
            unique: true
        },
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "promotions",
            unique: true
        }
    ],
    board: String,
    comment: {
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
    }
});

const Comment = mongoose.model('comment', commentSchema);
export default Comment;

