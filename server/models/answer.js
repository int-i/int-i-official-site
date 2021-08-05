var mongoose = require('mongoose');
// schema
var answerSchema = mongoose.Schema({
    title:{type:String, required:true},
    body:{type:String, required:true},
    author: String, //익명여부 구현해야함.
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date},
});

// model & export
var Post = mongoose.model('answer', answerSchema);
module.exports = Post;
