import express from "express";
import passport from "passport";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";

import config from "./config/key";
import passportConfig from "./passport";
import connectDB from "./db";
import routes from "./routers/routes";
import userRouter from "./routers/userRouter";
// 추가해야 할 모듈 및 미들웨어 : path, cors

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
app.use(routes.api, userRouter);

app.get('/', (req, res) => {
	res.send('First Routing');
});

if (process.env.NODE_ENV === "production") {
	// 빌드 배포 환경에서의 라우팅 설정

	app.use(express.static("clicent/build"));

	app.get("*", (req, res) => {
		// res.sendFile()
	})
}

// 서버 리스닝

const port = process.env.PORT || 5000

const HandleListening = () => {
    console.log(`✅ http://localhost:${port} 에서 서버 리스닝에 성공했습니다.`)
}

app.listen(port, HandleListening);