import dotenv from "dotenv";
dotenv.config();
const devkey = {
	mongoURI: process.env.MONGO_URI,
	sessionSecret: process.env.SESSION_SECRET,
	hashSecret: process.env.HASH_SECRET,

	githubClientId: process.env.GITHUB_CLIENT_ID,
	githubSecret: process.env.GITHUB_SECRET,
	githubCallbackUri: process.env.GITHUB_CALLBACK_URI,

	kakaoClientId: process.env.KAKAO_CLIENT_ID,
	kakaoSecret: process.env.KAKAO_SECRET,
	kakaoCallbackUri: process.env.KAKAO_CALLBACK_URI,

	googleClientId: process.env.GOOGLE_CLIENT_ID,
	googleSecret: process.env.GOOGLE_SECRET,
	googleCallbackUri: process.env.GOOGLE_CALLBACK_URI,

	awsS3ClientId: process.env.AWS_S3_CLIENT_ID,
	awsS3Secret: process.env.AWS_S3_SECRET,
	awsS3Region: process.env.AWS_S3_REGION
};
export default devkey;


