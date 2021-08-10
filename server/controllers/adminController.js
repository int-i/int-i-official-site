import mongoose from "mongoose";
import User from "../models/User";
import Inti from "../models/Inti";

export const PostAddMember = async (req, res, next) => {
    const { username, studentId } = req.body;

    if (!username || !studentId) {
        return res.status(400).json({ addMember: false, reason: "username and studentId required" });
    }
    try {
        const exMember = await Inti.findOne({ studentId });
        if (exMember) {
            return res.status(400).json({ addMember: false, reason: "already Member" });
        }
        
        const newMember = await Inti.create({
            username,
            studentId
        });
        // console.log(newMember);
        
        const isUser = await User.findOne({ studentId: studentId });
        if (isUser) {
            // console.log("유저 발견. 멤버 권한 부여");
            await User.updateOne({ studentId }, { $set: { role: 1 }});
        }
        res.status(200).json({ addMember: true, user: username });

    } catch (err) {
        console.log(err);
        next(err);
    }
};

export const PostRemoveUser = async (req, res, next) => {
    const { id } = req.body;

    try {
        await User.deleteOne({ id });
        return res.status(200).json({ delUserSuccess: true });
    } catch (err) {
        next(err);
    }
}

export const GetUsers = async (req, res, next) => {
    try {
        const { whatSolt, isDes } = req.query;
        const users = await User.find({}).sort((isDes ? "-" : "") + whatSolt);
        return res.status(200).json({ users: users });
    } catch (err) {
        next(err);
    }
};