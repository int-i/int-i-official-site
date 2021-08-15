import Comment from "../models/Comment";

export const PostCreateComment = async (req, res, next) => {
    try {
        const { id, comment, anonymous } = req.body;
        const user = req.user;
        if (!_id) {
            return res.status(400).json({ commentSuccess: false, reason: "rqid" });
        }
        await Comment.create({
            user: user,
            post: { _id: id },
            board

        })
    } catch (err) {
        console.log(err);
        next(err);
    }
}