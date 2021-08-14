//프로필 정보 수정 페이지

import React, { useState, useRef } from "react";
import styles from "./ProfileEditPage.module.scss";
import FormBtn from "../FormBtn/FormBtn";

function Tags({ tags }) {
	return (
		<span>
			<span className={styles.tagstyle}>{tags.tag}</span>
			&nbsp;&nbsp;
		</span>
	);
}

const ProfileEditPage = (props) => {
	const [nickname, SetNickname] = useState("닉네임");
	const [email, SetEmail] = useState("12345@12345");
	const [password, SetPassword] = useState("비밀번호");
	const [name, SetName] = useState("이름");
	const [studentId, SetStudentId] = useState("12345678");
	const [interest, SetInterest] = useState(""); // 관심 분야

	const [tags, SetTags] = useState([{ tag: "JavaScript" }]); // 관심 태그

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

	const OnTagsHandler = (event) => {
		SetTags(event.currentTarget.value);
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
				<div className={styles.title}>프로필 정보 수정</div>
				<form id="profileEdit" onSubmit={OnSubmitHandler}>
					<table className={styles.tablestyle}>
						<tbody>
							<tr>
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

							<tr>
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

							<tr>
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

							<tr>
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

							<tr>
								<td className={styles.td}>학번</td>
								<td className={styles.td}>
									<input
										className={styles.inputstyle}
										value={studentId}
										onChange={OnStudentIdHandler}
										placeholder={"학번을 등록해보세요"}
									/>
								</td>
							</tr>

							<tr>
								<td className={styles.td}>관심분야</td>
								<td className={styles.td}>
									<input
										className={styles.inputstyle}
										value={interest}
										onChange={OnInterestHandler}
										placeholder={"관심 분야를 등록해보세요"}
									/>
								</td>
							</tr>

							<tr>
								<td className={styles.td}>관심태그</td>
								<td className={styles.td}>
									<span
										style={{ margin: "25px 0px 20px 0px" }}
									>
										{tags.map((tag, index) => (
											<Tags tags={tag} key={index} />
										))}
									</span>
									<input
										className={styles.tagstyle}
										//value={tags}
										onChange={OnTagsHandler}
										placeholder={"관심 태그를 등록해보세요"}
									/>
									&nbsp;&nbsp;
									<button
										type="button"
										className={styles.tagbutton}
										//onClick={onCreateTag}
									>
										추가
									</button>
									&nbsp;
									<button
										type="button"
										className={styles.tagbutton}
										//onClick={onDeleteTag}
									>
										삭제
									</button>
								</td>
							</tr>

							<tr>
								<td className={styles.abouttd}>자기소개</td>
								<td className={styles.abouttd}>
									<textarea
										className={styles.aboutinputstyle}
										value={about}
										onChange={OnAboutHandler}
										placeholder={
											"자신에 대한 간단한 소개를 등록해보세요"
										}
									/>
								</td>
							</tr>

							<tr>
								<td className={styles.td}>깃허브</td>
								<td className={styles.td}>
									<input
										className={styles.inputstyle}
										value={github}
										onChange={OnGithubHandler}
										placeholder={
											"깃허브 주소를 등록해보세요"
										}
									/>
								</td>
							</tr>

							<tr>
								<td className={styles.td}>블로그</td>
								<td className={styles.td}>
									<input
										className={styles.inputstyle}
										value={blog}
										onChange={OnBlogHandler}
										placeholder={
											"블로그 주소를 등록해보세요"
										}
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
					form="profileEdit"
					width="120px"
					height="45px"
					borderRadius="10px"
					fontSize="18px"
					margin="5px"
					kind="컬러"
					text="수정 완료"
				/>
			</div>
		</center>
	);
};

export default ProfileEditPage;
