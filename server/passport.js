import passport from "passport";
import bcrypt from "bcrypt";
import { Strategy as localStrategy } from "passport-local";
import User from "./models/User";


// index.js 에서 import 후 실행.
export default function() {
    passport.use("local-login", new localStrategy(
        {
            usernameField: "id",
            passwordField: "password"
        },
        async (id, password, done) => {
            try {
                
                // 유저정보 id 기준으로 검색
                const existUser = await User.findOne({ id });
                if (existUser) {

                    // id 값 db 에 존재
                    // 비밀번호 해싱 비교
                    const result = await bcrypt.compare(password, existUser.hash);
                    if (result) {

                        // 로그인 성공
                        done(null, existUser);
                    } else {

                        // 비밀번호 맞지 않음
                        done(null, false, { message: "incorrect"});
                    }
                } else {

                    // 유저 검색 결과 없음
                    done(null, false, { message: "incorrect"});
                }
            } catch (err) {
                console.log(err);
                done(err);
            }
        }
    ));

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