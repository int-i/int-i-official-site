import Tag from "../models/Tag";
import Question from "../models/Question";
import CodeRepositoryQ from "../models/CodeRepositoryQ";

export const PostCreateTag = async (req, res, next) => {
    try {
        const post = res.locals.post;
        const schema = res.locals.schema;
        const tag = req.body.tag;

        // tag -> 태그들 (배열)
        const tagResult = await Promise.all(tag.map(async (arg) => {
            const reg = new RegExp(arg, 'i')
            let result = await Tag.findOne({ tagname: reg });

            if (result) {

                // $push 사용하면 중복 값 올라감.
                // $addToSet -> 중복 값 안올라감.
                // 그냥 post 통째로 넘겨줘도 됨.
                await Tag.updateOne({ tagname: reg }, { $addToSet : { posts: { _id: post._id } }, $inc: { count: 1 } });
                return result;
            } else {

                // 존재하지 않는 태그면 새로 만들어줌.
                const result2 = await Tag.create({
                    tagname: arg,
                    count: 1,
                    posts: post._id
                });
                return result2;
            }
        }));

        // 각 포스트에 tag 업데이트
        await schema.findOneAndUpdate({ _id: post._id }, { $set: { tag: tagResult } });
        res.status(200).json({ success: true });
    } catch (err) {
        console.log("error at middleware tag:", err);
    }
};

export const PostUpdateTag = async (req, res, next) => {
    try {
        const schema = res.locals.schema;
        const id = req.body._id;

        // 원래 데이터
        const rawTag = res.locals.rawData.tag;
        
        // 이건 새로 넣을거
        const tag = req.body.tag;
        if (!id) {

            // 에러부분 인데 미들웨어라 res 를 사용을 못함. (이전에 사용)
            console.log("_id is required");
        }

        // 원래 태그의 포스트 삭제후 재 설정.
        await Promise.all(rawTag.map(async (arg) => {
            const reg = new RegExp(arg, 'i');
            Tag.findOneAndDelete({ tagname: reg }, { posts: id });
        }));

        // tag -> 태그들 (배열)
        const tagResult = await Promise.all(tag.map(async (arg) => {
            const reg = new RegExp(arg, 'i')
            let result = await Tag.findOne({ tagname: reg });

            if (result) {
                const data = await Tag.findOneAndUpdate({ tagname: reg }, { $addToSet : { posts: { _id: id } } });
                console.log(data);
                const tagcount = data.posts.length;
                await Tag.updateOne({ tagname: reg }, { $set: { count: tagcount + 1 } });
                return result;
            } else {

                // 존재하지 않는 태그면 새로 만들어줌.
                const result2 = await Tag.create({
                    tagname: arg,
                    count: 1,
                    posts: id
                });
                return result2;
            }
        }));

        // 각 포스트에 tag 업데이트
        await schema.findOneAndUpdate({ _id: id }, { $set: { tags: tagResult } });
        return res.status(200).json({ success: true });
    } catch (err) {
        console.log("error at middleware tag:", err);
    }
};