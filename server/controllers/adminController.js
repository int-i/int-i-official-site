import mongoose from "mongoose";
import User from "../models/User";
import Inti from "../models/Inti";

export const PostAddMember = async (req, res, next) => {
    const { username, studentId } = req.body;

    try {
        const exMember = await Inti.findOne({ studentId });
        if (exMember) {
            return res.status(400).json({ AddMember: false, reason: "already Menber" });
        }
        
        const newMember = await Inti.create({
            username,
            studentId
        });
        console.log(newMember);
        
        const isUser = await User.findOne({ studentId });
        if (isUser) {
            console.log("유저 발견. 멤버 권한 부여");
            await User.updateOne({ studentId }, { $set: { role: 1 }});
        }
        next();

    } catch (err) {
        console.log(err);
        next(err);
    }
}
