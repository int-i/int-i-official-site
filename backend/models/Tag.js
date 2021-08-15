import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
    tagname: {
        type: String,
        required: true,
        unique: true
    },
    count: Number,
    users: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "users",
                unique: true
            }
        }
    ],
    posts: [
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
    ]
});

const Tag = mongoose.model("tag", tagSchema);
export default Tag;