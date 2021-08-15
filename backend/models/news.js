const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')
autoIncrement.initialize(mongoose.connection);

const newsSchema = new mongoose.Schema({
    seq :{
        type : Number,
        default : 0
    },
    title:{
        type : String,
        required : [true, 'Title is required!']
    },
    contents:{
        type : String,
        required : [true, 'Content is required!']
    },
    author : {
        type : mongoose.Schema.Types.ObjectId, 
        ref : 'user', 
        required: true
    }, // ref : user을 통해 user collection의 id와 연결됨을 mongoose에 알림
    createdAt : {
        type : Date,
        default : Date.now
    }
});

newsSchema.plugin(autoIncrement.plugin, {
    model: 'news',
    field: 'seq',
    startAt : 1,
    increment : 1
});


// news 자체가 복수형.. 
const news = mongoose.model('news', newsSchema); 
export default news;
// 모듈의 사용성을 늘리기 위한 exports