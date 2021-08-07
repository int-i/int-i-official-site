import User from "../models/User";

export const GetAuth = (req, res) => {
    let user = req.user;
    res.status(200).json({
        user: user,
        isLogged: true,
        isAdmin: user.role === 2 ? true : false,
        isMember: user.role === 1 || user.role === 2 ? true : false,
    });
};