import passport from "passport";

export const GetAuth = (req, res) => {
    let user = req.user;
    res.status(200).json({
        user: user,
        isLogged: true,
        isAdmin: user.role === 2 ? true : false,
        isMember: user.role === 1 || user.role === 2 ? true : false,
    });
};

export const GetGithub = passport.authenticate('github');
export const GetGithubCallback = (req, res, next) => {
    passport.authenticate("github", (authErr, user) => {
        if (authErr) {
            console.log("error at login github:", authErr);
            return next(authErr);
        }
        req.login(user, (err) => {
            if (err) {
                console.log("error at login github:", err);
                return res.status(500).json({ githubLoginSuccess: false, reason: "github correct but internal server error"});
            }
            return res.status(200).json({ githubLoginSuccess: true, user: user });
        });
    })(req, res, next);
};

export const GetKakao = passport.authenticate('kakao');
export const GetKakaoCallback = (req, res, next) => {
    passport.authenticate("kakao", (authErr, user) => {
        if (authErr) {
            console.log("error at login kakao:", authErr);
            return next(authErr);
        }
        req.login(user, (err) => {
            if (err) {
                console.log("error at login kakao:", err);
                return res.status(500).json({ kakaoLoginSuccess: false, reason: "kakao correct but internal server error"});
            }
            return res.status(200).json({ kakaoLoginSuccess: true, user: user });
        });
    })(req, res, next);
};

export const GetGoogle = passport.authenticate('google', {
    scope: [ "profile", "email" ]
});
export const GetGoogleCallback = (req, res, next) => {
    passport.authenticate("google", (authErr, user) => {
        if (authErr) {
            console.log("error at login google:", authErr);
            return next(authErr);
        }
        req.login(user, (err) => {
            if (err) {
                console.log("error at login google:", authErr);
                return res.status(500).json({ googleLoginSuccess: false, reason: "google correct but internal server error"});
            }
            return res.status(200).json({ googleLoginSuccess: true, user: user });
        });
    })(req, res, next);
};