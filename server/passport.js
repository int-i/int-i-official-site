import passport from "passport";
import User from "./models/User.js";


// index.js 에서 import 후 실행.
export default function() {
    passport.use(User.createStrategy());

    passport.serializeUser((user, done) => {

        // 세션에 user._id 저장 (req.user._id)
        done(null, user._id);
    });


    // deserialize 매개변수 id 는 serialize 에서 넘겨받은 user._id
    passport.deserializeUser((id, done) => {
        // findById 는 하나의 도큐먼트를 _id 값을 사용하여 검색.
        User.findById(id, (err, user) => {

            // user 는 req.user 아마 인증된 user 정보가 담겨있음
            done(null, user);
        });
    });
};