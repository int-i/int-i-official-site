import Tag from "../models/Tag";
import Question from "../models/Question";
import CodeRepositoryQ from "../models/CodeRepositoryQ";

export const PostCreateTag = async (req, res, next) => {
    try {
        const post = res.locals.post;
        const schema = res.locals.schema;
        const tag = req.body.tag;
        
        let schemaName;
        if (schema === Question) {
            schemaName = "Question";
        } else if (schema === CodeRepositoryQ) {
            schemaName = "CodeRepositoryQ";
        }
        

        // tag -> 태그들 (배열)
        const tagResult = await Promise.all(tag.map(async (arg) => {
            const reg = new RegExp(arg, 'i')
            let result = await Tag.findOne({ tagname: reg });

            if (result) {

                // $push 사용하면 중복 값 올라감.
                // $addToSet -> 중복 값 안 올라감.
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
        return res.status(200).json({ CreateSuccess: true, type: schemaName });
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
        
        let schemaName;
        if (schema === Question) {
            schemaName = "Question";
        } else if (schema === CodeRepositoryQ) {
            schemaName = "CodeRepositoryQ";
        }
        
        // 이건 새로 넣을거
        const tag = req.body.tag;
        if (!id) {
            console.log("_id is required");
            return res.status(400).json({ success: false, reason: "_id is required" });
        }

        // 원래 태그의 포스트 삭제 후 재설정.
        // rawData -> _id array
        await Promise.all(rawTag.map(async (arg) => {
            await Tag.updateOne({ _id: arg }, { $inc: { count: -1 }, $pull: { posts: id } } );
        }));


        // tag -> 태그들 (배열)
        const tagResult = await Promise.all(tag.map(async (arg) => {
            const reg = new RegExp(arg, 'i')
            let result = await Tag.findOne({ tagname: reg });

            if (result) {
                await Tag.updateOne({ tagname: reg }, { $addToSet : { posts: { _id: id } } });
                const data = await Tag.findOne({ tagname: reg });
                const count = (data.posts).length;
                await Tag.updateOne({ tagname: reg }, { $set: { count: count } });
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
        await schema.findOneAndUpdate({ _id: id }, { $set: { tag: tagResult } });
        return res.status(200).json({ EditSuccess: true, type: schemaName });
    } catch (err) {
        console.log("error at middleware tag:", err);
    }
};

export const PostDelTag = async (req, res, next) => {
    try {
        let schemaName;
        const schema = res.locals.schema;
        
        if (schema === Question) {
            schemaName = "Question";
        } else if (schema === CodeRepositoryQ) {
            schemaName = "CodeRepositoryQ";
        }

        // rawTag -> _id array
        const rawTag = res.locals.rawData.tag;

        // posts _id
        const id = req.body._id;

        await Promise.all(rawTag.map(async (arg) => {
            await Tag.updateOne({ _id: arg }, { $inc: { count: -1 }, $pull: { posts: id } } );
        }));
        
        // schemaName 이 undefined 로 나옴. 나중에 해결.
        return res.status(200).json({ DelSuccess: true, type: schemaName });
    } catch (err) {
        console.log(err);
        next(err);
    }
}