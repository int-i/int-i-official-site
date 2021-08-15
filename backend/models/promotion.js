import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
autoIncrement.initialize(mongoose.connection);

const promotionSchema = new mongoose.Schema({
    seq:{
        type : Number,
        default : 0
    },
    title:{
        type : String,
        required : [true, 'Title is required!']
    },
    contents:{
        type : String,
        required : [true, 'Content is Required!']
    },
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
        required  : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
});


promotionSchema.plugin(autoIncrement.plugin, {
    model: 'promotions',
    field: 'seq',
    startAt : 1,
    increment : 1
});


const promotions  = mongoose.model('promotions', promotionSchema);
export default promotions;