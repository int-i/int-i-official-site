import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
autoIncrement.initialize(mongoose.connection);

const noticeSchema = new mongoose.Schema({
    seq:{
        type : Number,
        default : 0
    },
    title :{
        type : String,
        required : [true, 'Title is required!']
    },
    author :{
        type : mongoose.Schema.Types.ObjectId, 
        ref : 'user', 
        required: true,
    },
    contents : {
        type : String,
        required : [true, 'Content is required!']
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})

noticeSchema.plugin(autoIncrement.plugin, {
    model: 'notices',
    field: 'seq',
    startAt : 1,
    increment : 1
});

const notices = mongoose.model('notices', noticeSchema);
export default notices;
