import passport from "passport";
import bcrypt from "bcrypt";
import { Strategy as localStrategy } from "passport-local";
import { Strategy as githubStrategy } from "passport-github2";
import { Strategy as KakaoStrategy } from "passport-kakao";
import { Strategy as googleStrategy } from "passport-google-oauth2";
import User from "./models/User";
import config from "./config/key";


// index.js 에서 import 후 실행.
export default function() {

    // 로컬로그인
    passport.use("local-login", new localStrategy({
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
            done(err);
        }
    }
    ));

    // 깃헙
    passport.use(new githubStrategy({
        clientID: config.githubClientId,
        clientSecret: config.githubSecret,
        callbackURL: config.githubCallbackUri
    },
    async (accessToken, refreshToken, profile, cb) => {
        try {
            const exUser = await User.findOne({ githubId: profile.id });
            
            // 이미 가입된 아이디면 user 에 exUser 리턴 후 로그인 시도
            if (exUser) {
                cb (null, exUser);
            } else {
                const newUser = await User.create({
                    email: profile._json.email,
                    username: profile.username,
                    id: profile.username + "Github",
                    githubId: profile.id,
                    nickname: profile.username,
                    avatarUri: profile._json.avatar_url
                });
                return cb (null, newUser);
            }
        } catch (err) { 
            return cb(err);
        }
    }
    ));

    // 카카오
    passport.use(new KakaoStrategy({
        clientID: config.kakaoClientId,
        clientSecret: config.kakaoSecret,
        callbackURL: config.kakaoCallbackUri
    },
    async (accessToken, refreshToken, profile, cb) => {
        try {
            const exUser = await User.findOne({ kakaoId: profile.id });
            
            // 이미 가입된 아이디면 user 에 exUser 리턴 후 로그인 시도
            if (exUser) {
                cb (null, exUser);
            } else {
                const newUser = await User.create({
                    email: profile._json.kakao_account.email,
                    username: profile.username,
                    id: profile.username + "Kakao",
                    kakaoId: profile.id,
                    nickname: profile.username,
                    avatarUri: profile._json.properties.profile_image
                });
                return cb(null, newUser);
            }
        } catch (err) {
            return cb(err);
        }
    }
    ));

    // 구글
    passport.use(new googleStrategy({
        clientID: config.googleClientId,
        clientSecret: config.googleSecret,
        callbackURL: config.googleCallbackUri
    },
    async (accessToken, refreshToken, profile, cb) => {
        try {
            const exUser = await User.findOne({ googleId: profile.id });
            
            // 이미 가입된 아이디면 user 에 exUser 리턴 후 로그인 시도
            if (exUser) {
                cb (null, exUser);
            } else {
                const newUser = await User.create({
                    email: profile._json.email,
                    username: profile._json.name,
                    id: profile._json.name + "Google",
                    googleId: profile.id,
                    nickname: profile._json.name,
                    avatarUri: profile._json.picture
                });
                return cb(null, newUser);
            }
        } catch (err) {
            return cb(err);
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