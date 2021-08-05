import express from "express";
import passport from "passport";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";

import config from "./config/key.js";
import passportConfig from "./passport.js";
import connectDB from "./db.js";
import routes from "./routers/routes.js";
import userRouter from "./routers/userRouter.js";
// 추가해야 할 모듈 및 미들웨어 : path, cors, cookie-parser, config, mongoose, Routers, routes

const app = express();

// 여기서 미들웨어 세팅
// app.use(cors()); // CORS 도입 후 주석 해제

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_ID));
app.use(session({

	// secret 값 배포시 환경변수로 설정.
	secret: config.sessionSecret,

	// request 시 아무런 변경사항 없어도 저장. 대부분 false
    resave: false,
	
	// request 시 새로 생성된 session 에 아무런 작업이 이루어지지 않아도 저장. 대부분 false
    saveUninitialized: false,

	// 세션 디비에 저장
    store: MongoStore.create({ mongoUrl: config.mongoURI })
}))

app.use(passport.initialize());
app.use(passport.session());

// 몽고디비 연결
connectDB();

// passport 설정
passportConfig();

// 여기서 라우팅 설정(dev)
app.get('/', (req, res) => {
	res.send('First Routing');
});
app.use(routes.users, userRouter);

if (process.env.NODE_ENV === "production") {
	// 빌드 배포 환경에서의 라우팅 설정

	app.use(express.static("clicent/build"));

	app.get("*", (req, res) => {
		// res.sendFile()
	})
}

// 서버 리스닝

const port = process.env.PORT || 5000

function HandleListening() {
	console.log(`✅ http://localhost:${port} 에서 서버 리스닝에 성공했습니다.`)
}

app.listen(port, HandleListening);