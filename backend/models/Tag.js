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
    ]

    // 훗날에 추가..
    // posts: [
    //     {
    //         post: {
    //             type: mongoose.Schema.Types.ObjectId,
    //             ref: "posts"
    //         }
    //     }
    // ]
});

const Tag = mongoose.model("tag", tagSchema);
export default Tag;