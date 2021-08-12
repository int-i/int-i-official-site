import mongoose from "mongoose";
import Tag from "../models/Tag";
import Question from "../models/Question";

const checkTag = async (req, res, next) => {

    // 스키마 이름 필요
    const schemaName = req.body.schema;
    let schema;
    if (schemaName === "Question") {
        schema = Question;
    }

    // tag -> 태그들 (배열)
    const tagResult = await Promise.all(tag.map(async (arg) => {
        let result = await Tag.findOne({ tagname: new RegExp(arg, 'i') });

        if (result) {

            // $push 사용하면 중복 값 올라감.
            // $addToSet -> 중복 값 안올라감.
            await Tag.updateOne({ tagname: new RegExp(arg, 'i') }, { $addToSet : { users: req.user } });
            return result;
        } else {

            // 존재하지 않는 태그면 새로 만들어줌.
            const result2 = await Tag.create({
                tagname: arg,
                count: 0,
                users: req.user
            });
            return result2;
        }
    }));
}