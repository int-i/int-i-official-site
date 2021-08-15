import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import config from "./config/key";
import path from "path";

const s3 = new aws.S3({
    accessKeyId: config.awsS3ClientId,
    secretAccessKey: config.awsS3Secret,
    region: config.awsS3Region
});

const multerAvatar = multer({
    storage: multerS3({
        s3: s3,
        bucket: "inti-site/avatar",
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: "public-read",

        // 파일이름 설정. 보통은 무작위 값으로 되는데 설정을 어떻게 하는지 모르겠음
        key: function(req, file, cb) {
            let extension = path.extname(file.originalname);
            cb(null, Date.now().toString() + extension);
        } 
    }),
    
    // 용량제한
    limits: {

        // per request
        files: 10,

        // 5MB
        fileSize: 5 * 1024 * 1024
    }
});

export default multerAvatar;