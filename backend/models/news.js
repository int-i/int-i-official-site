const mongoose = require('mongoose')

const newsSchema = mongoose.Schema({
    title:{
        type : String,
        required : [true, 'Title is required!']
    },
    body:{
        type : String,
        required : [true, 'Content is Required!']
    },
    author : {
        type : mongoose.Schema.Types.ObjectId, ref : 'user', required:true
    }, // ref : user을 통해 user collection의 id와 연결됨을 mongoose에 알린다. 
    createdAt : {
        type : Date,
        default : Date.now
    },
    updatedAt :{
        type : Date
    }
});

const News = mongoose.model('news', newsSchema);
module.exports = { News };
// 모듈의 사용성을 늘리기 위한 exports