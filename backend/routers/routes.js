// 백엔드는 기본적으로 /api 라우팅 사용.


const USER = "/user";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

const USERINFO = "/userinfo";
const DELUSER = "/deluser";

const EDITPROFILE = "/editprofile";

const API = "/api";
const AUTH = "/auth";
const CALLBACK = "/callback";
const ADMIN = "/admin";
const INTI = "/inti";
const QUESTION = "/question";
const ANSWER = "/answer";
const CODEQ = "/codeq";
const CODEA = "/codea";

const GITHUB = "/github";
const KAKAO = "/kakao";
const GOOGLE = "/google";
// const GLOBAL_SEARCH = "";

// 질문게시판
const WRITEQUES = "/writeques";
const DELQUES = "/delques";
const EDITQUES = "/editques";
const ONEQUES = "/oneques";

// 답변
const WRITEANS = "/writeans";
const DELANS = "/delans";
const EDITANS = "/editans";
const ALLANS = "/allans";

// 코드저장소 문제올리기
const CODEWRITEQ = "/codewriteq";
const CODEDELQ = "/codedelq";
const CODEEDITQ = "/codeeditq";
const CODEALLQ = "/codeallq";
const CODEONEQ = "/codeoneq";
const CODELIKESQ = "/codelikesq";

// 코드저장소 답변올리기
const CODEWRITEA = "/codewritea";
const CODEDELA = "/codedela";
const CODEEDITA = "/codeedita";
const CODEALLA = "/codealla";
const CODELIKESA = "/codelikesa";

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
	codea: CODEA,

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
	codelikesq: CODELIKESQ,

	//코드저장소 답변
	codewritea: CODEWRITEA,
	codedela: CODEDELA,
	codeedita: CODEEDITA,
	codealla: CODEALLA,
	codelikesa: CODELIKESA
}

export default routes;