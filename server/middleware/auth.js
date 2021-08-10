import User from "../models/User";


// 로그인 시에만 패스. 프로필 페이지, 로그아웃 버튼 등
export const IsLogged = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        // console.log("로그인 필요");
        res.status(403).json({ error: "login needed"});
    }
};

// 로그인 안된시에만 패스. 로그인창 등
export const IsNotLogged = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next();
    } else {
        // console.log("로그아웃 필요");
        res.status(403).json({ error: "already logged" });
    }
};

// 어드민 일때만 패스.
export const IsAdmin = async (req, res, next) => {

    // 로그인 된 유저만 가능
    const user = req.user;
    try {
        if (user.role === 2) {
            // console.log("관리자 입니다");
            next();
        } else {
            // console.log("관리자가 아닙니다");
            return res.status(403).json({ isAdmin: false });
        }
    } catch (err) {
        console.log(err);
        next(err);
    }
}