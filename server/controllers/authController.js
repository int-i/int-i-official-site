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
            console.log(authErr);
            return next(authErr);
        }
        req.login(user, (err) => {
            if (err) {
                return res.json(500).json({ loginSuccess: false, reason: "github correct but internal server error"});
            }
            return res.status(200).json({ githubLoginSuccess: true, user: user });
        });
    })(req, res, next);
};