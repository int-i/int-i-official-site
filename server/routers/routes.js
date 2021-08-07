// 백엔드는 기본적으로 /api 라우팅 사용.


const USERS = "/users";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";


const API = "/api";
const AUTH = "/auth";
const CALLBACK = "/callback"
const USERINFO = "/userinfo";

const GITHUB = "/github"
// const GLOBAL_SEARCH = "";


const routes = {
	users: USERS,
	login: LOGIN,
	logout: LOGOUT,
    join: JOIN,

    api: API,
	auth: AUTH,
	callback: CALLBACK,
	userinfo: USERINFO,

	github: GITHUB
}

export default routes;