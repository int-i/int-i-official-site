import passport from "passport";
import express from "express";

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
    console.log(req.isAuthenticated())
    if (!req.isAuthenticated()) {
        next();
    } else {
        // console.log("로그아웃 필요");
        res.status(403).json({ error: "already logged" });
    }
};
