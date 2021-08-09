import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/images/logo/logo.png";
import style from "./Header.module.scss";

const 로그인UI = {
	guest: (
		<ul className={style.loginUI}>
			<li>
				<Link to="/RegisterPage">회원가입</Link>
			</li>
			<li>
				<Link to="/LoginPage">로그인</Link>
			</li>
		</ul>
	),
	user: (
		<ul className={style.loginUI}>
			<li>마이 페이지</li>
			<li>로그인</li>
		</ul>
	),
	admin: (
		<ul className={style.loginUI}>
			<li>관리자 페이지</li>
			<li>마이 페이지</li>
			<li>로그인</li>
		</ul>
	),
};

const Header = () => {
	const [로그인상태, 로그인상태변경] = useState("guest"); // 이 로그인 상태가 뭔지에 따라서 유저 UI가 변함
	return (
		<header className={[style.header, "NanumSquare"].join(' ')}>
			<div className={style.contents}>
				<Link to="/">
					<div className={style.logo}>
						<img src={logo} width="40" alt="인트아이 로고" />
						<div>인트아이</div>
					</div>
				</Link>

				<nav className={style.navigation}>
					<ul>
						<li>코드 저장소</li>
						<li>질문</li>
						<li>기술 뉴스</li>
						<li>정보 및 홍보</li>
						<li>공지사항</li>
					</ul>
				</nav>
				{
					//로그인 상태 체크해서 다른 ui렌더링
					로그인UI[로그인상태] //key값이 '로그인상태'인 자료를 뽑아서 렌더링한다
				}
			</div>
		</header>
	);
};

export default Header;
