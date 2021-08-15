/* eslint-disable */
//로그인 페이지

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import styles from "./LoginPage.module.scss";
import Google from "../../../assets/images/logo/Google.png";
import KaKao from "../../../assets/images/logo/kakao.png";
import Github from "../../../assets/images/logo/Github.png";
import FormBtn from "../FormBtn/FormBtn";

const LoginPage = (props) => {
	const [id, SetId] = useState("");
	const [password, SetPassword] = useState("");
	const [isRemember, SetIsRemember] = useState(false);
	const [cookies, SetCookie, RemoveCookie] = useCookies(["rememberId"]);

	const LoginData = {
		id: id,
		password: password,
	};

	const PostLoginData = () => {
		return axios
			.post("/api/login", LoginData)
			.then((response) => {
				if (response.status >= 200 && response.status <= 204) {
					alert("로그인에 성공하셨습니다!");
					props.history.push("/");
				}
			})
			.catch((error) => {
				console.log(error);
				alert("가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.");
			});
	};

	const logout = () => {
		axios.get("/api/logout").then((response) => {
			console.log(response.data);
		});
	};

	const OnIdHandler = (event) => {
		SetId(event.currentTarget.value);
	};

	const OnPasswordHandler = (event) => {
		SetPassword(event.currentTarget.value);
	};

	const OnSubmitHandler = (event) => {
		event.preventDefault();

		console.log(LoginData);
		PostLoginData(LoginData);
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
						className={[
							styles.inputStyle,
							"Spoqa Han Sans Neo",
						].join(" ")}
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
						className={[
							styles.inputStyle,
							"Spoqa Han Sans Neo",
						].join(" ")}
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

					<FormBtn
						borderRadius="10px"
						height="42px"
						text="로그인"
						margin="0 0 15px 0px"
						fontSize="18px"
						kind="컬러"
						onClick={OnClickHandler}
					/>
				</form>
				<FormBtn
					borderRadius="10px"
					width="450px"
					height="42px"
					text="회원가입"
					margin="0 0 15px 0px"
					fontSize="18px"
					onClick={() => {
						props.history.push("/RegisterPage");
					}}
				/>
				<div className={styles.hrSect}>SNS 로그인</div>
				<button type="button" className={styles.google}>
					<img alt="Google로고" src={Google} />
					구글 로그인
				</button>
				<button type="button" className={styles.kakao}>
					<img alt="KaKao로고" src={KaKao} />
					카카오 로그인
				</button>
				<button type="button" className={styles.github}>
					<img alt="Github로고" src={Github} />
					GitHub 로그인
				</button>

				<button type="button" onClick={logout}>
					로그아웃
				</button>
			</div>
		</center>
	);
};

export default LoginPage;
