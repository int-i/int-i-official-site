import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const userSchema = new mongoose.Schema({
    studentId: Number,
    role: Number,
    
    // 관심분야, 자기소개, 개인 깃, 블로그 주소
    privateInterest: String,
    privateAbout: String,
    privateGitUri: String,
    privateBlogUri: String,

    nickname: {
        type: String,
        required: true,
        unique: true
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    }
})


// passport-local-mongoose 사용 등록
userSchema.plugin(passportLocalMongoose, {
    usernameField: 'email'
});


// 스키마 대문자 단수형으로 통일.
const User = mongoose.model('users', userSchema);
export default User;