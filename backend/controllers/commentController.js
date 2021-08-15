import Comment from "../models/Comment";
import Answer from "../models/Answer";
import Question from "../models/Question";
import CodeRepositoryA from "../models/CodeRepositoryA"; 
import CodeRepositoryQ from "../models/CodeRepositoryQ";
import News from "../models/news";
import Notice from "../models/notice";
import Promotion from "../models/promotion";

export const PostCreateComment = async (req, res, next) => {
    try {

        // id -> 글 id
        const { id, comment, anonymous } = req.body;
        const user = req.user;
        const schemas = [ Answer, Question, CodeRepositoryQ, CodeRepositoryA, News, Notice, Promotion ];
        
        
        if (!id) {
            return res.status(400).json({ commentSuccess: false, reason: "rqid" });
        }
        

        // schema -> 스키마 객체
        let schema;
        await Promise.all(schemas.map(async (arg) => {
            
            // data -> 도큐먼트
            const data = await arg.findOne({ _id: id });
            if (data) {
                schema = arg;
            }
        }));

        const commentData = await Comment.create({
            user: user,
            post: id,
            anonymous,
            comment: comment
        });

        await schema.updateOne({ _id: id }, { $addToSet : { comment: commentData } });
        return res.status(200).json({});
    } catch (err) {
        console.log(err);
        next(err);
    }
}

export const PostEditComment = async (req, res, next) => {
    try {

        // id -> 댓글 id
        const { id, comment } = req.body;
        
        if (!id) {
            return res.status(400).json({ commentSuccess: false, reason: "rqid" });
        }

        await Comment.updateOne({ _id: id }, { $set: { comment: comment } });
        return res.status(200).json({});
    } catch (err) {
        console.log(err);
        next(err);
    }
}

export const PostDeleteComment = async (req, res, next) => {
    try {

        // 댓글 id
        const id = req.params.id;
        const schemas = [ Answer, Question, CodeRepositoryQ, CodeRepositoryA, News, Notice, Promotion ];
        
        if (!id) {
            return res.status(400).json({ commentSuccess: false, reason: "rqid" });
        }
        

        // 원래 댓글 도큐먼트
        const rawData = await Comment.findOne({ _id: id });
        // schema -> 스키마 객체
        // 게시글
        let schema;
        await Promise.all(schemas.map(async (arg) => {
            
            // data -> 도큐먼트
            const data = await arg.findOne({ comment: { _id: id } });
            if (data) {
                schema = arg;
            }
        }));

        await Comment.deleteOne({ _id: id });
        await schema.updateOne({ _id: rawData.post[0] }, { $pull : { comment: rawData._id } });
        return res.status(200).json({});
    } catch (err) {
        console.log(err);
        next(err);
    }
}

export const GetComment = async (req, res, next) => {
    try {

        // id -> 게시글 id
        const id = req.params.id
        const schemas = [ Answer, Question, CodeRepositoryQ, CodeRepositoryA, News, Notice, Promotion ];
        
        if (!id) {
            return res.status(400).json({ commentSuccess: false, reason: "rqid" });
        }
        
        // schema -> 스키마 객체
        let schema;
        await Promise.all(schemas.map(async (arg) => {
            
            // data -> 도큐먼트
            const data = await arg.findOne({ _id: id });
            if (data) {
                schema = arg;
            }
        }));

        const comment = await schema.findOne({ _id: id });
        return res.status(200).json({ comments: comment.comment });
    } catch (err) {
        console.log(err);
        next(err);
    }
}