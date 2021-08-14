// 백엔드는 기본적으로 /api 라우팅 사용.

// GLOBAL
const USER = "/user";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

// FEATURE
const API = "/api";
const AUTH = "/auth";
const ADMIN = "/admin";
const QUESTION = "/question";
const ANSWER = "/answer";
const CODEQ = "/codeq";


// AUTH and ADMIN
const USERINFO = "/userinfo";
const DELUSER = "/deluser";
const INTI = "/inti";
const CALLBACK = "/callback";
const GITHUB = "/github";
const KAKAO = "/kakao";
const GOOGLE = "/google";

// USER
const EDITPROFILE = "/editprofile";


//질문게시판
const WRITEQUES = "/writeques";
const DELQUES = "/delques";
const EDITQUES = "/editques";
const ONEQUES = "/oneques";

//답변
const WRITEANS = "/writeans";
const DELANS = "/delans";
const EDITANS = "/editans";
const ALLANS = "/allans";

//코드저장소 문제올리기
const CODEWRITEQ = "/codewriteq";
const CODEDELQ = "/codedelq";
const CODEEDITQ = "/codeeditq";
const CODEALLQ = "/codeallq";
const CODEONEQ = "/codeoneq";
const CODELIKESQ = "/codelikesq";

const routes = {
	user: USER,
	login: LOGIN,
	logout: LOGOUT,
	join: JOIN,

	api: API,
	auth: AUTH,
	callback: CALLBACK,
	userinfo: USERINFO,
	admin: ADMIN,
	inti: INTI,
	question: QUESTION,
	answer: ANSWER,
	deluser: DELUSER,
	editprofile: EDITPROFILE,
	codeq: CODEQ,

	github: GITHUB,
	kakao: KAKAO,
	google: GOOGLE,

	//질문게시판
	writeques: WRITEQUES,
	delques: DELQUES,
	editques: EDITQUES,
	oneques: ONEQUES,

	//답변
	writeans: WRITEANS,
	delans: DELANS,
	editans: EDITANS,
	allans: ALLANS,
	
	//코드저장소 문제
	codewriteq: CODEWRITEQ,
	codedelq: CODEDELQ,
	codeeditq: CODEEDITQ,
	codeallq: CODEALLQ,
	codeoneq: CODEONEQ,
	codelikesq: CODELIKESQ

}

export default routes;