//로그인 페이지

import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
	const [id, SetId] = useState("");
	const [password, SetPassword] = useState("");
	const [isRemember, SetIsRemember] = useState(false);
	const [cookies, SetCookie, RemoveCookie] = useCookies(["rememberId"]);

	const OnIdHandler = (event) => {
		SetId(event.currentTarget.value);
	};

	const OnPasswordHandler = (event) => {
		SetPassword(event.currentTarget.value);
	};

	const OnSubmitHandler = (event) => {
		event.preventDefault();

		console.log("ID", id);
		console.log("Password", password);
	};

	useEffect(() => {
		if (cookies.rememberId !== undefined) {
			SetId(cookies.rememberId);
			SetIsRemember(true);
		}
	}, [cookies.rememberId]);

	// checkbox 값을 변화시킬때
	const OnChangeHandler = (e) => {
		SetIsRemember(e.target.checked);
		return isRemember;
	};

	// 로그인 button을 클릭할때
	const OnClickHandler = (e) => {
		if (isRemember) {
			SetCookie("rememberId", id);
		} else {
			RemoveCookie("rememberId");
		}
	};

	return (
		<center className="loginCenter">
			<div className={[styles.loginPage, "NanumSquare"].join(" ")}>
				<h2>로그인</h2>
				<br />

				<form onSubmit={OnSubmitHandler}>
					<input
						className={styles.inputStyle}
						value={id}
						placeholder="아이디"
						onChange={OnIdHandler}
						required
					/>
					<span>
						<br />
					</span>

					<input
						type="password"
						className={styles.inputStyle}
						value={password}
						placeholder="비밀번호"
						onChange={OnPasswordHandler}
						required
					/>
					<span>
						<br />
					</span>

					<label>
						<input
							type="checkbox"
							onChange={OnChangeHandler}
							checked={isRemember}
						/>
						&nbsp;아이디 기억하기
					</label>
					<br />

					<button onClick={OnClickHandler}>로그인</button>

					<button>회원가입</button>

					<div className={styles.hrSect}>SNS 로그인</div>

					<button>구글 로그인</button>

					<button>카카오 로그인</button>

					<button>GitHub 로그인</button>
				</form>
			</div>
		</center>
	);
};

export default LoginPage;
