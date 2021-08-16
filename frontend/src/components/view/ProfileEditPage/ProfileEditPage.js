//프로필 정보 수정 페이지

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import styles from "./ProfileEditPage.module.scss";
import FormBtn from "../FormBtn/FormBtn";

const Tags = (props) => {
	const ClickTag = () => {
		props.DeleteTag(props.text);
	};

	if (props.text !== "") {
		return (
			// 작성된 태그가 있을 때만 태그를 렌더링한다
			<span>
				<span onClick={ClickTag} className={styles.tagstyle}>
					{props.text}
				</span>
				&nbsp;&nbsp;
			</span>
		);
	} else {
		return <span></span>;
	}
};

const ProfileEditPage = (props) => {
	const [nickname, SetNickname] = useState("");
	const [email, SetEmail] = useState("");
	const [password, SetPassword] = useState("");
	const [name, SetName] = useState("");
	const [studentId, SetStudentId] = useState("");
	const [interest, SetInterest] = useState(""); // 관심 분야

	const [inputTags, SetInputTags] = useState([""]);
	const [userTags, SetUserTags] = useState([""]); // 관심 태그

	const [about, SetAbout] = useState(""); // 자기소개
	const [github, SetGithub] = useState("");
	const [blog, SetBlog] = useState("");

	const CheckNickname = useRef();
	const CheckEmail = useRef();
	const CheckPassword = useRef();
	const CheckName = useRef();

	useEffect(() => {
		axios
			.get("/api/auth/userinfo", {})
			.then(function (response) {
				SetNickname(response.data.user.nickname);
				SetEmail(response.data.user.email);
				SetName(response.data.user.username);
				SetStudentId(response.data.user.studentId);
				SetInterest(response.data.user.privateInterest);
				SetUserTags(response.data.user.tags);
				SetAbout(response.data.user.privateAbout);
				SetGithub(response.data.user.privateGitUri);
				SetBlog(response.data.user.privateBlogUri);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	const OnNicknameHandler = (event) => {
		SetNickname(event.currentTarget.value);

		//유효성 체크 - 한/영 최대 6자리
		var regExp = /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]{1,6}$/;

		//console.log("닉네임 유효성 검사 :: ", regExp.test(event.target.value));

		if (regExp.test(event.target.value)) {
			CheckNickname.current.style.color = "yellowgreen";
		} else {
			CheckNickname.current.style.color = "red";
		}
	};

	const OnEmailHandler = (event) => {
		SetEmail(event.currentTarget.value);

		var regExp =
			/^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{1,8}$/;

		if (regExp.test(event.target.value)) {
			CheckEmail.current.style.color = "yellowgreen";
		} else {
			CheckEmail.current.style.color = "red";
		}
	};

	const OnPasswordHandler = (event) => {
		SetPassword(event.currentTarget.value);

		//유효성 체크 - 영/숫자/특수문자 필수 최소 7자리 (대문자X)
		var regExp =
			/^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[a-z\d$@$!%*#?&]{7,}$/;

		/*
			console.log(
			"비밀번호 유효성 검사 :: ",
			regExp.test(event.target.value)
		); */

		if (regExp.test(event.target.value)) {
			CheckPassword.current.style.color = "yellowgreen";
		} else {
			CheckPassword.current.style.color = "red";
		}
	};

	const OnNameHandler = (event) => {
		SetName(event.currentTarget.value);

		//유효성 체크 - 한/영 최소 2자리
		var regExp = /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]{2,}$/;

		//console.log("이름 유효성 검사 :: ", regExp.test(event.target.value));

		if (regExp.test(event.target.value)) {
			CheckName.current.style.color = "yellowgreen";
		} else {
			CheckName.current.style.color = "red";
		}
	};

	const OnStudentIdHandler = (event) => {
		SetStudentId(event.currentTarget.value);
	};

	const OnInterestHandler = (event) => {
		SetInterest(event.currentTarget.value);
	};

	const OnTagsHandler = (event) => {
		SetInputTags(event.currentTarget.value);
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

	const PostProfileEdit = () => {
		return axios
			.post("/api/user/editprofile", {
				nickname: nickname,
				email: email,
				password: password,
				username: name,
				studentId: studentId,
				privateInterest: interest,
				tag: userTags,
				privateAbout: about,
				privateBlogUri: blog,
				privateGitUri: github,
			})
			.then((response) => {
				try {
					if (response.status >= 200 && response.status <= 204) {
						alert("프로필 수정에 성공했습니다!");
						props.history.push("/");
					}
				} catch (error) {
					console.log(response, error);
				}
			})
			.catch((error) => {
				//console.log(error.response.data);
				// console.log(error.response.status);
				// console.log(error.response.headers);
				if (error.response.data.reason === "exnickname") {
					alert("사용중인 닉네임입니다.");
				} else if (error.response.data.reason === "exid") {
					alert("사용중인 아이디입니다.");
				} else if (error.response.data.reason === "exemail") {
					alert("사용중인 이메일입니다.");
				}
			});
	};

	const OnSubmitClick = (event) => {
		event.preventDefault();

		//유효성 체크 통과 못하면 submit 못함
		if (CheckNickname.current.style.color === "red") {
			return alert("입력 형식을 확인해주세요!");
		} else if (CheckEmail.current.style.color === "red") {
			return alert("입력 형식을 확인해주세요!");
		} else if (CheckPassword.current.style.color === "red") {
			return alert("입력 형식을 확인해주세요!");
		} else if (CheckName.current.style.color === "red") {
			return alert("입력 형식을 확인해주세요!");
		}

		PostProfileEdit();
	};

	const CreateTag = (event) => {
		if (event.key === "Enter") {
			//console.log("${event.key}가 입력되었습니다");
			let tempArr = [...userTags];
			tempArr.push(inputTags);
			SetUserTags(tempArr);
			SetInputTags([""]);
		}
	};

	const DeleteTag = (clickedTag) => {
		if (clickedTag !== "") {
			let tempArr = [...userTags];
			let tempIndex = tempArr.indexOf(clickedTag);
			tempArr.splice(tempIndex, 1);
			SetUserTags(tempArr);
		}
	};

	return (
		<center className="profileEditCenter">
			<div className={[styles.profileEditPage, "NanumSquare"].join(" ")}>
				<div className={styles.title}>프로필 정보 수정</div>
				<form>
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
										value={email}
										onChange={OnEmailHandler}
										required
									/>
									<br />
									<span
										ref={CheckEmail}
										className={styles.checkText}
									>
										&nbsp;&nbsp; 이메일 형식을 지켜주세요!
									</span>
								</td>
							</tr>

							<tr>
								<td className={styles.td}>비밀번호</td>
								<td className={styles.td}>
									<input
										type="password"
										className={styles.inputstyle}
										value={password}
										onChange={OnPasswordHandler}
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
										{userTags.map((a, i) => {
											return (
												<Tags
													text={userTags[i]}
													DeleteTag={DeleteTag}
												/>
											);
										})}
									</span>
									<input
										className={styles.tagstyle}
										value={inputTags}
										onChange={OnTagsHandler}
										placeholder={"관심 태그를 등록해보세요"}
										onKeyPress={CreateTag}
									/>
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
										type="text"
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
										type="text"
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
					width="120px"
					height="45px"
					borderRadius="10px"
					fontSize="18px"
					margin="5px"
					kind="컬러"
					text="수정 완료"
					onClick={OnSubmitClick}
				/>
			</div>
		</center>
	);
};

export default ProfileEditPage;
