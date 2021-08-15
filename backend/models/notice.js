import mongoose from "mongoose";

const noticeSchema = mongoose.Schema({

    title :{
        type : String,
        required : [true, 'Title is required!']
    },
    body : {
        type : String,
        required : [true, 'Content is required!']
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})

const Notice = mongoose.model('notice', noticeSchema);
export default Notice;