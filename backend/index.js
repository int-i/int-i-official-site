import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";

import config from "./config/key";
import passportConfig from "./passport";
import connectDB from "./db";
import routes from "./routers/routes";
import globalRouter from "./routers/globalRouter";
import authRouter from "./routers/authRouter";
import adminRouter from "./routers/adminRouter";
import questionRouter from "./routers/questionRouter";
import answerRouter from "./routers/answerRouter";
import userRouter from "./routers/userRouter";
import codeQRouter from "./routers/codeQRouter";
import codeARouter from "./routers/codeARouter";
import commentRouter from "./routers/commentRouter";
import { IsAdmin, IsLogged, IsMember } from "./middleware/auth";
// 추가해야 할 모듈 및 미들웨어 : path, cors

const app = express();

// 여기서 미들웨어 세팅
// app.use(cors()); // CORS 도입 후 주석 해제
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//process.env.COOKIE_ID
app.use(cookieParser());
app.use(
	session({
		// secret 값 배포시 환경변수로 설정.
		secret: config.sessionSecret,

		// request 시 아무런 변경사항 없어도 저장. 대부분 false
		resave: false,

		// request 시 새로 생성된 session 에 아무런 작업이 이루어지지 않아도 저장. 대부분 false
		saveUninitialized: false,

		// 세션 디비에 저장
		store: MongoStore.create({ mongoUrl: config.mongoURI }),
	})
);

app.use(passport.initialize());
app.use(passport.session());

// 몽고디비 연결
connectDB();

// passport 설정
passportConfig();

// 여기서 라우팅 설정(dev). 기본적으로 api 는 포함이고 그 다음 미들웨어로 라우팅 세부 구성
app.use(routes.api, globalRouter);
app.use(routes.api + routes.auth, authRouter);
app.use(routes.api + routes.admin, IsLogged, IsAdmin, adminRouter);
app.use(routes.api + routes.question, IsLogged, questionRouter);
app.use(routes.api + routes.answer, IsLogged, answerRouter);
app.use(routes.api + routes.user, IsLogged, userRouter);
app.use(routes.api + routes.codeq, IsLogged, codeQRouter);
app.use(routes.api + routes.codea, IsLogged, codeARouter);
app.use(routes.api + routes.comment, IsLogged, commentRouter);

app.get("/", (req, res) => {
	res.send("hello node!");
});

if (process.env.NODE_ENV === "production") {
	// 빌드 배포 환경에서의 라우팅 설정

	app.use(express.static("clicent/build"));

	app.get("*", (req, res) => {
		// res.sendFile()
	});
}

// 서버 리스닝

const port = process.env.PORT || 5000;

const HandleListening = () => {
	console.log(`✅ http://localhost:${port} 에서 서버 리스닝에 성공했습니다.`);
};

app.listen(port, HandleListening);
