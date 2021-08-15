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
            ref: "questions"
        },
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "coderepositoryqs"
        },
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "notices"
        },
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "news"
        },
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "promotions"
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

