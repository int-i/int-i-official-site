import User from "../models/User";
import Inti from "../models/Inti";
import Tag from "../models/Tag";
import bcrypt from "bcrypt";
import config from "../config/key";


const hashSecret = config.hashSecret;

export const PostEditProfile = async (req, res, next) => {
    
    // 존재성 확인
    const IsEmpty = function(fieldValue) {
        if (typeof fieldValue == "undefined" || fieldValue == null || fieldValue == "") {
            return true;
        }
    }

    try {
        const {
            nickname,
            email,
            username,
            studentId,
            interest,
            oldPassword,
            newPassword,
            newPassword2,
            privateInterest,
            privateAbout,
            privateGitUri,
            privateBlogUri,
            tag
        } = req.body;

        // 필드값 유무.
        if (IsEmpty(nickname)) {
            return res.status(400).json({ joinSuccess: false, reason:  "nickname is required" });
        } else if (IsEmpty(email)) {
            return res.status(400).json({ joinSuccess: false, reason: "email is required" });
        } else if (IsEmpty(username)) {
            return res.status(400).json({ joinSuccess: false, reason: "username is required" });
        } else if (IsEmpty(oldPassword) && (!IsEmpty(newPassword) || !IsEmpty(newPassword2))) {

            // 비번 비교하기 전에 newPassword 는 있는데 oldPassword 가 없는 경우
            // 바꿀 의향이 있는데 old 가 없는 경우임.
            return res.status(400).json({ editSuccess: false, reason: "oldPassword is required"});
        } else if (!IsEmpty(oldPassword) && (IsEmpty(newPassword) || IsEmpty(newPassword2))) {

            // 비번 비교하기 전에 old 는 있는데 new 가 없는 경우
            // 바꿀 의향이 있는데 new 가 없는 경우임.
            return res.status(400).json({ editSuccess: false, reason: "newPassword or 2 is required"});
        }

        // find 안에 빈값 들어가면 절대 안됨.
        const exEmail = await User.findOne({ email });
        const exNickname = await User.findOne({ nickname });
        let exStudentId = null;
        if (!IsEmpty(studentId)) {

            // null or user
            exStudentId = await User.findOne({ studentId });
        }

        // 중복성 체크
        // 바뀐거 없으면 패스.
        // else 문 안먹혀서 그냥 if 문으로 바꿈
        if (exEmail) {
            if (req.user.email !== email) {
                return res.status(400).json({ editSuccess: false, reason: "already exist email" });
            }
        }
        if (exNickname) {
            if (req.user.nickname !== nickname) {
                return res.status(400).json({ editSuccess: false, reason: "already exist nickname" });
            }
        } 
        if (exStudentId) {

            // body.studentId 는 String, user.studentId 는 Number.
            if (req.user.studentId != studentId) {
                return res.status(400).json({ editSuccess: false, reason: "already exist studentId" });
            }
        }

        // 비번 변경
        let hash = req.user.hash;
        if (!IsEmpty(oldPassword) && !IsEmpty(newPassword) && !IsEmpty(newPassword2)) {
            const result = await bcrypt.compare(oldPassword, hash);
            if (result) {
                if (newPassword !== newPassword2) {
                    return res.status(400).json({ editSuccess: false, reason: "wrong newPassword or newPassword2"});
                }
            } else {
                return res.status(400).json({ editSuccess: false, reason: "wrong oldPassword" });
            }
            hash = await bcrypt.hash(newPassword, hashSecret);
        }

        // 학번 따라 권한 업데이트
        let role = req.user.role;
        if (!IsEmpty(studentId)) {
            const exMember = await Inti.findOne({ studentId });
            if (exMember) {
                role = 1;
            } else {
                role = -1;
            }
        }

        // 태그 처리
        // 유저 관심 태그는 카운트 처리 안함.
        const tagResult = await Promise.all(tag.map(async (arg) => {
            let result = await Tag.findOne({ tagname: new RegExp(arg, 'i') });

            if (result) {

                // $push 사용하면 중복 값 올라감.
                // $addToSet -> 중복 값 안올라감.
                await Tag.updateOne({ tagname: new RegExp(arg, 'i') }, { $addToSet : { users: req.user } });
                return result;
            } else {

                // 존재하지 않는 태그면 새로 만들어줌.
                const result2 = await Tag.create({
                    tagname: arg,
                    count: 0,
                    users: req.user
                });
                return result2;
            }
        }));

        // 프로필 변경
        const user = await User.findOneAndUpdate({ id: req.user.id }, {
            $set : {
                nickname,
                email,
                username,
                studentId,
                interest,
                privateInterest,
                privateAbout,
                privateGitUri,
                privateBlogUri,
                hash,
                role,
                tags: tagResult
            }
        }, { new: true });

        return res.status(200).json({ editSuccess: true, user: user });
    } catch (err) {
        next(err);
    }
};