//프로필 정보 수정 페이지

import React, { useState, useRef } from "react";
import styles from "./ProfileEditPage.module.scss";
import FormBtn from "../FormBtn/FormBtn";

const ProfileEditPage = (props) => {
	const [nickname, SetNickname] = useState("");
	const [email, SetEmail] = useState("");
	const [password, SetPassword] = useState("");
	const [name, SetName] = useState("");
	const [studentId, SetStudentId] = useState("");
	const [interest, SetInterest] = useState("");
	const [about, SetAbout] = useState(""); // 자기소개
	const [github, SetGithub] = useState("");
	const [blog, SetBlog] = useState("");

	const CheckName = useRef();
	const CheckNickname = useRef();
	const CheckPassword = useRef();

	const OnNicknameHandler = (event) => {
		SetNickname(event.currentTarget.value);

		//유효성 체크 - 한/영 최대 6자리
		var regExp = /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]{1,6}$/;
		console.log("닉네임 유효성 검사 :: ", regExp.test(event.target.value));

		if (regExp.test(event.target.value)) {
			CheckNickname.current.style = "color:YellowGreen";
		} else {
			CheckNickname.current.style = "color:red";
		}
	};

	const OnEmailHandler = (event) => {
		SetEmail(event.currentTarget.value);
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

	const OnStudentIdHandler = (event) => {
		SetStudentId(event.currentTarget.value);
	};

	const OnInterestHandler = (event) => {
		SetInterest(event.currentTarget.value);
	};

	const OnAboutHandler = (event) => {
		SetAbout(event.currentTarget.value);
	};

	const OnGithubHandler = (event) => {
		SetGithub(event.currentTarget.value);
	};

	const OnBlogHandler = (event) => {
		SetBlog(event.currentTarget.value);
	};

	const OnSubmitHandler = (event) => {
		event.preventDefault();

		console.log(
			CheckName.current.style.color,
			CheckNickname.current.style.color,
			CheckPassword.current.style.color
		);

		//유효성 체크 통과 못하면 submit 못함
		if (
			CheckName.current.style.color &&
			CheckNickname.current.style.color &&
			CheckPassword.current.style.color !== "yellowgreen"
		) {
			return alert("입력 규칙을 확인해주세요!");
		}
	};

	return (
		<center className="profileEditCenter">
			<div className={[styles.profileEditPage, "NanumSquare"].join(" ")}>
				<form id="register" onSubmit={OnSubmitHandler}>
					<table className={styles.tablestyle}>
						<tbody>
							<tr className={styles.tr}>
								<td className={styles.td}>
									<span style={{ color: "red" }}>*</span>
									&nbsp;닉네임
								</td>
								<td className={styles.td}>
									<input
										className={styles.inputstyle}
										value={nickname}
										onChange={OnNicknameHandler}
										required
									/>
									<br />
									<span
										ref={CheckNickname}
										className={styles.checkText}
									>
										&nbsp;&nbsp; 한글 또는 영문 최대 6자리
										입력
									</span>
								</td>
							</tr>

							<tr className={styles.tr}>
								<td className={styles.td}>
									<span style={{ color: "red" }}>*</span>
									&nbsp;이메일
								</td>
								<td className={styles.td}>
									<input
										className={styles.inputstyle}
										type="email"
										value={email}
										onChange={OnEmailHandler}
										required
									/>
								</td>
							</tr>

							<tr className={styles.tr}>
								<td className={styles.td}>
									<span style={{ color: "red" }}>*</span>
									&nbsp;비밀번호
								</td>
								<td className={styles.td}>
									<input
										//type="password"
										className={styles.inputstyle}
										value={password}
										onChange={OnPasswordHandler}
										required
									/>
									<br />
									<span
										ref={CheckPassword}
										className={styles.checkText}
									>
										&nbsp;&nbsp; 영문, 숫자, 특수문자 필수
										최소 7자리 입력 (대문자 사용 불가)
									</span>
								</td>
							</tr>

							<tr className={styles.tr}>
								<td className={styles.td}>
									<span style={{ color: "red" }}>*</span>
									&nbsp;이름
								</td>
								<td className={styles.td}>
									<input
										className={styles.inputstyle}
										value={name}
										onChange={OnNameHandler}
										required
									/>
									<br />
									<span
										ref={CheckName}
										className={styles.checkText}
									>
										&nbsp;&nbsp; 한글 또는 영문 최소 2자리
										입력
									</span>
								</td>
							</tr>

							<tr className={styles.tr}>
								<td className={styles.td}>학번</td>
								<td className={styles.td}>
									<input
										className={styles.inputstyle}
										value={studentId}
										onChange={OnStudentIdHandler}
									/>
								</td>
							</tr>

							<tr className={styles.tr}>
								<td className={styles.td}>관심분야</td>
								<td className={styles.td}>
									<input
										className={styles.inputstyle}
										value={interest}
										onChange={OnInterestHandler}
									/>
								</td>
							</tr>

							<tr className={styles.tr}>
								<td className={styles.td}>자기소개</td>
								<td className={styles.td}>
									<input
										className={styles.inputstyle}
										value={about}
										onChange={OnAboutHandler}
									/>
								</td>
							</tr>

							<tr className={styles.tr}>
								<td className={styles.td}>깃허브</td>
								<td className={styles.td}>
									<input
										className={styles.inputstyle}
										value={github}
										onChange={OnGithubHandler}
									/>
								</td>
							</tr>

							<tr className={styles.tr}>
								<td className={styles.td}>블로그</td>
								<td className={styles.td}>
									<input
										className={styles.inputstyle}
										value={blog}
										onChange={OnBlogHandler}
									/>
								</td>
							</tr>
						</tbody>
					</table>
					<br />
				</form>
				<FormBtn
					width="120px"
					height="45px"
					borderRadius="10px"
					fontSize="18px"
					margin="5px"
					onClick={() => {
						props.history.push("/");
					}}
					text="취소"
				/>
				<FormBtn
					type="submit"
					form="register"
					width="120px"
					height="45px"
					borderRadius="10px"
					fontSize="18px"
					margin="5px"
					kind="컬러"
					text="수정완료"
				/>
			</div>
		</center>
	);
};

export default ProfileEditPage;
