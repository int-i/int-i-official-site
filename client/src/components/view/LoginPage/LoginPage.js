//로그인 페이지

import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import styles from "./LoginPage.module.css";

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
		<center style={{ paddingTop: "40px" }}>
			<div style={{ width: "400px" }}>
				<h2 style={{ textAlign: "center" }}>로그인</h2>
				<br />

				<form
					style={{ display: "flex", flexDirection: "column" }}
					onSubmit={OnSubmitHandler}
				>
					<input
						className={styles.inputStyle}
						value={id}
						placeholder="아이디"
						onChange={OnIdHandler}
						required
					/>
					<span style={{ lineHeight: "50%" }}>
						<br />
					</span>

					<input
						className={styles.inputStyle}
						value={password}
						placeholder="비밀번호"
						onChange={OnPasswordHandler}
						required
					/>
					<span style={{ lineHeight: "40%" }}>
						<br />
					</span>

					<label style={{ textAlign: "left" }}>
						<input
							type="checkbox"
							onChange={OnChangeHandler}
							checked={isRemember}
						/>
						&nbsp;아이디 저장하기
					</label>
					<br />

					<button onClick={OnClickHandler}>로그인</button>
					<span style={{ lineHeight: "50%" }}>
						<br />
					</span>

					<button>회원가입</button>

					<div className={styles.hrSect}>SNS 로그인</div>

					<button>구글 로그인</button>
					<span style={{ lineHeight: "50%" }}>
						<br />
					</span>

					<button>카카오 로그인</button>
					<span style={{ lineHeight: "50%" }}>
						<br />
					</span>

					<button>GitHub 로그인</button>
				</form>
			</div>
		</center>
	);
};

export default LoginPage;
