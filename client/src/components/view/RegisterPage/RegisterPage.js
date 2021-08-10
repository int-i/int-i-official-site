//회원가입 페이지

import React, { useState, useRef } from "react";
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
	const [name, SetName] = useState("");
	const [nickname, SetNickname] = useState("");
	const [id, SetId] = useState("");
	const [password, SetPassword] = useState("");
	const [confirmPassword, SetConfirmPassword] = useState("");
	const [email, SetEmail] = useState("");
	const [studentId, SetStudentId] = useState("");

	const CheckName = useRef();
	const CheckNickname = useRef();
	const CheckId = useRef();
	const CheckPassword = useRef();

	const OnNameHandler = (event) => {
		SetName(event.currentTarget.value);

		//유효성 체크 - 한/영 최소 2자리
		var regExp = /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]{2,}$/;
		console.log("이름 유효성 검사 :: ", regExp.test(event.target.value));

		if (regExp.test(event.target.value)) {
			CheckName.current.style = "color:YellowGreen";
		} else {
			CheckName.current.style = "color:red";
		}
	};

	const OnNicknameHandler = (event) => {
		SetNickname(event.currentTarget.value);

		//유효성 체크 - (한/영) 최대 6자리
		var regExp = /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]{1,6}$/;
		console.log("닉네임 유효성 검사 :: ", regExp.test(event.target.value));

		if (regExp.test(event.target.value)) {
			CheckNickname.current.style = "color:YellowGreen";
		} else {
			CheckNickname.current.style = "color:red";
		}
	};

	const OnIdHandler = (event) => {
		SetId(event.currentTarget.value);

		//유효성 체크 - 영/숫자 최소 6자리 (특수문자X 대문자X)
		var regExp = /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,}$/;
		console.log("아이디 유효성 검사 :: ", regExp.test(event.target.value));

		if (regExp.test(event.target.value)) {
			CheckId.current.style = "color:YellowGreen";
		} else {
			CheckId.current.style = "color:red";
		}
	};

	const OnPasswordHandler = (event) => {
		SetPassword(event.currentTarget.value);

		//유효성 체크 - 영/숫자/특수문자 필수 최소 7자리 (대문자X)
		var regExp =
			/^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[a-z\d$@$!%*#?&]{7,}$/;
		console.log(
			"비밀번호 유효성 검사 :: ",
			regExp.test(event.target.value)
		);

		if (regExp.test(event.target.value)) {
			CheckPassword.current.style = "color:YellowGreen";
		} else {
			CheckPassword.current.style = "color:red";
		}
	};

	const OnConfirmPasswordHandler = (event) => {
		SetConfirmPassword(event.currentTarget.value);
	};

	const OnEmailHandler = (event) => {
		SetEmail(event.currentTarget.value);
	};

	const OnStudentIdHandler = (event) => {
		SetStudentId(event.currentTarget.value);
	};

	const OnSubmitHandler = (event) => {
		event.preventDefault();

		console.log(
			CheckName.current.style.color,
			CheckNickname.current.style.color,
			CheckId.current.style.color,
			CheckPassword.current.style.color
		);

		//유효성 체크 통과 못하면 submit 못함
		if (
			CheckName.current.style.color &&
			CheckNickname.current.style.color &&
			CheckId.current.style.color &&
			CheckPassword.current.style.color !== "yellowgreen"
		) {
			return alert("입력 규칙을 확인해주세요!");
		}

		if (password !== confirmPassword) {
			return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
		}
	};

	return (
		<center>
			<div>
				<form onSubmit={OnSubmitHandler}>
					<table className={styles.tablestyle}>
						<thead className={styles.headtr}>
							<tr>
								<td
									className={styles.headtd}
									style={{ fontSize: "18px" }}
								>
									기본 정보
								</td>
								<td
									className={styles.headtd}
									style={{ textAlign: "right" }}
								>
									<span style={{ color: "red" }}>*</span>
									&nbsp;표시는 반드시 입력해야 하는 항목입니다
								</td>
							</tr>
						</thead>
						<tbody>
							<tr className={styles.bodytr}>
								<td className={styles.bodytd}>
									<span style={{ color: "red" }}>*</span>
									&nbsp;이름
								</td>
								<td className={styles.bodytd}>
									<input
										className={styles.inputstyle}
										value={name}
										onChange={OnNameHandler}
										required
									/>
									<span
										ref={CheckName}
										className={styles.checkText}
									>
										&nbsp;&nbsp; 한글 또는 영문 최소 2자리
										입력
									</span>
								</td>
							</tr>
							<tr className={styles.bodytr}>
								<td className={styles.bodytd}>
									<span style={{ color: "red" }}>*</span>
									&nbsp;닉네임
								</td>
								<td className={styles.bodytd}>
									<input
										className={styles.inputstyle}
										value={nickname}
										onChange={OnNicknameHandler}
										required
									/>
									<span
										ref={CheckNickname}
										className={styles.checkText}
									>
										&nbsp;&nbsp; 한글 또는 영문 최대 6자리
										입력
									</span>
								</td>
							</tr>
							<tr className={styles.bodytr}>
								<td className={styles.bodytd}>
									<span style={{ color: "red" }}>*</span>
									&nbsp;아이디
								</td>
								<td className={styles.bodytd}>
									<input
										className={styles.inputstyle}
										value={id}
										onChange={OnIdHandler}
										required
									/>
									<span
										ref={CheckId}
										className={styles.checkText}
									>
										&nbsp;&nbsp; 영문, 숫자 필수 최소 6자리
										입력 (특수문자, 대문자 사용 불가)
									</span>
								</td>
							</tr>
							<tr className={styles.bodytr}>
								<td className={styles.bodytd}>
									<span style={{ color: "red" }}>*</span>
									&nbsp;비밀번호
								</td>
								<td className={styles.bodytd}>
									<input
										className={styles.inputstyle}
										value={password}
										onChange={OnPasswordHandler}
										required
									/>
									<span
										ref={CheckPassword}
										className={styles.checkText}
									>
										&nbsp;&nbsp; 영문, 숫자, 특수문자 필수
										최소 7자리 입력 (대문자 사용 불가)
									</span>
								</td>
							</tr>
							<tr className={styles.bodytr}>
								<td className={styles.bodytd}>
									<span style={{ color: "red" }}>*</span>
									&nbsp;비밀번호 확인
								</td>
								<td className={styles.bodytd}>
									<input
										className={styles.inputstyle}
										value={confirmPassword}
										onChange={OnConfirmPasswordHandler}
										required
									/>
								</td>
							</tr>
							<tr className={styles.bodytr}>
								<td className={styles.bodytd}>
									<span style={{ color: "red" }}>*</span>
									&nbsp;이메일
								</td>
								<td className={styles.bodytd}>
									<input
										className={styles.inputstyle}
										type="email"
										value={email}
										onChange={OnEmailHandler}
										required
									/>
								</td>
							</tr>
							<tr className={styles.bodytr}>
								<td className={styles.bodytd}>학번</td>
								<td className={styles.bodytd}>
									<input
										className={styles.inputstyle}
										value={studentId}
										onChange={OnStudentIdHandler}
									/>
								</td>
							</tr>
						</tbody>
					</table>
					<br />
					<button type="submit">회원가입</button>
					&nbsp;&nbsp;
					<button type="button">취소</button>
				</form>
			</div>
		</center>
	);
};

export default RegisterPage;
