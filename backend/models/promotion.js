import mongoose from "mongoose";

// 이미지 업로드 기능 추가하기 
// 검색 기능, 정렬 기능 추가하기

const promotionSchema = mongoose.Schema({
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

const Promotion  = mongoose.model('promotion', promotionSchema);
export default Promotion;
// 모듈의 사용성을 늘리기 위한 exports