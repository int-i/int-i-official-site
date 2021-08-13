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
            question: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "question",
                unique: true
            }
        },
        {
            coderepositoryq: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "coderepositoryq",
                unique: true
            }
        }
    ]
});

const Tag = mongoose.model("tag", tagSchema);
export default Tag;