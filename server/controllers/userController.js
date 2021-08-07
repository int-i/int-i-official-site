import User from "../models/User";
import passport from "passport";
import bcrypt from "bcrypt";

// 해쉬 복잡도. 환경변수로 빼야함. 보안 떨어진다 싶으면 salt 사용.
const SECRET_HASH = 12

export const PostJoin = async (req, res, next) => {
    
    // 공백확인 함수
    const IsEmpty = function(fieldValue, fieldName) {
        if (typeof fieldValue == "undefined" || fieldValue == null || fieldValue == "") {
            return res.status(400).json({ joinSuccess: false, reason: fieldName + " is required" });
        } else {
            return res.status(400).json({ joinSuccess: false, reason: "already exist " + fieldName });
        }
    }

    // 요청 정보 추출
    const { username, id, nickname, email, studentId, password, password2 } = req.body;

        try{

            // 필드 값 존재성 검사
            const existUserId = await User.findOne({ id });
            const existUserEmail = await User.findOne({ email });
            const existUserNickname = await User.findOne({ nickname });
            
            if (typeof username == "undefined" || username == null || username == "") {
                return res.status(400).json({ joinSuccess: false, reason: "username is required" });
            } else if (existUserNickname) {
                return IsEmpty(nickname, "nickname");
            } else if (existUserId) {
                return IsEmpty(id, "id");
            } else if (password !== password2) {
                return res.status(400).json({ joinSuccess: false, reason: "check password or password2" });
            } else if (existUserEmail) {
                return IsEmpty(email, "email");
            } else {

                // 유효성 나중에 추가
                // 해쉬 보안을 위해 salt 도입 필요하긴 함. 회의 후 결정.
                const hash = await bcrypt.hash(password, SECRET_HASH);
                await User.create({ username, id, nickname, email, studentId, hash });
            }
            return res.status(200).json({ joinSuccess: true, user: { id: id }})
        } catch (err) {
            console.log(err);
            next(err)
        }
};

// 유효성 검사 필요.
export const PostLogin = (req, res, next) => {
    passport.authenticate("local-login", (authErr, user, info) => {
        if (authErr) {
            console.log("authErr", authErr);
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
                console.log("err", err);
                return res.json(500).json({ loginSuccess: false, reason: "correct id and password but internal server error"});
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