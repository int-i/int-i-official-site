import User from "../models/User";
import passport from "passport";
import bcrypt from "bcrypt";
import Inti from "../models/Inti";
import config from "../config/key";
import dotenv from "dotenv";
dotenv.config();

// 해쉬 복잡도. 환경변수로 빼야함. 보안 떨어진다 싶으면 salt 사용.
const hashSecret = config.hashSecret;

// 공백확인 함수


export const PostJoin = async (req, res, next) => {
    const IsEmpty = function(fieldValue) {
        if (typeof fieldValue == "undefined" || fieldValue == null || fieldValue == "") {
            return true;
        }
    }

    // 요청 정보 추출
    const { username, id, nickname, email, studentId, password, password2 } = req.body;

        try {

            // 필드값 유무 검사
            // 나중에 반복문으로 정리. 아님 or 로 아래랑 합쳐도 됨. 대신 상세한 reason 불가능.
            if (IsEmpty(username)) {
                return res.status(400).json({ joinSuccess: false, reason:  "rqusername" });
            } else if (IsEmpty(nickname)) {
                return res.status(400).json({ joinSuccess: false, reason: "rqnickname" });
            } else if (IsEmpty(id)) {
                return res.status(400).json({ joinSuccess: false, reason: "rqid" });
            } else if (IsEmpty(email)) {
                return res.status(400).json({ joinSuccess: false, reason: "rqemail" });
            } else if (IsEmpty(password)) {
                return res.status(400).json({ joinSuccess: false, reason: "rqpassword" });
            } else if (IsEmpty(password2)) {
                return res.status(400).json({ joinSuccess: false, reason: "rqpassword2" });
            }

            // 필드 값 중복성 검사
            // find 안에 빈값 들어가면 절대 안됨..
            const exId = await User.findOne({ id });
            const exEmail = await User.findOne({ email });
            const exNickname = await User.findOne({ nickname });

            if (exId) {
                return res.status(400).json({ joinSuccess: false, reason: "exid" });
            } else if (exEmail) {
                return res.status(400).json({ joinSuccess: false, reason: "exemail" });
            } else if (exNickname) {
                return res.status(400).json({ joinSuccess: false, reason: "exnickname" });
            } else if (password !== password2) {
                return res.status(400).json({ joinSuccess: false, reason: "chpw" });
            } else {

                // 유효성 나중에 추가
                // 해쉬 보안을 위해 salt 도입 필요하긴 함. 회의 후 결정.
                const hash = await bcrypt.hash(password, parseInt(hashSecret));

                // 권한 부여
                let role = -1;
                if (studentId) {
                const isMember = await Inti.findOne({ studentId });
                    if (isMember) {
                        role = 1;
                    }
                }
                await User.create({ username, id, nickname, email, studentId, hash, role });
            }
            next();
        } catch (err) {
            console.log("error at local join:", err);
            next(err)
        }
};

// 유효성 검사 필요.
export const PostLogin = (req, res, next) => {
    passport.authenticate("local-login", (authErr, user, info) => {
        if (authErr) {
            console.log("error at local login:", authErr);
            res.json({ loginSuccess: false, reason: "internal server error" });
            return next(authErr);
        }
        if (!user) {
            if (info.message === "Missing credentials") {
                return res.status(400).json({ loginSuccess: false, reason: "id and password are required" });
            }
            return res.status(400).json({ loginSuccess: false, reason: "id or password is incorrect" });
        }
        req.login(user, (err) => {
            if (err) {
                console.log("error at local login:", err);
                return res.json(500).json({ loginSuccess: false, reason: "correct id and password but internal server error"});
            }

            // 아이디 기억
            if (req.body.rememberId) {
                res.cookie("loginId", user.id);
            }
            return res.status(200).json({ loginSuccess: true, user: { _id: user._id, id: user.id, email: user.email }});
        });
    })(req, res, next);
};

export const Logout = (req, res) => {

	// req.user 삭제후 세션 passport 내용 삭제
	req.logout();
	res.status(200).json({ logoutSuccess: true });
};