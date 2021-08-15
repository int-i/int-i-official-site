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
        const { id, comment, anonymous, board } = req.body;
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