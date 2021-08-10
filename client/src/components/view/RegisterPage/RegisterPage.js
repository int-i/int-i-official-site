//회원가입 페이지

import React, { useState, useRef } from "react";
import { Table, Button } from "antd";
import styles from "./RegisterPage.module.css";
import "antd/dist/antd.css";

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

		if (password !== confirmPassword) {
			return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
		} //여기서 걸리면 아래로 못감
	};

	const dataSource = [
		{
			key: "1",
			data: (
				<div>
					<span style={{ color: "red" }}>*</span>
					&nbsp;이름
				</div>
			),
			dataInput: (
				<div>
<<<<<<< HEAD
					<input className={styles.inputstyle} value={Name} onChange={onNameHandler} required />
					<span ref={checkName} style={{ color: "gray" }}>
=======
					<input
						className={styles.inputstyle}
						value={name}
						onChange={OnNameHandler}
						required
					/>
					<span ref={CheckName} style={{ color: "gray" }}>
>>>>>>> 94ccdfad0a888168912c0f4566019b775f0393b1
						&nbsp;&nbsp; 한글 또는 영문 최소 2자리 입력
					</span>
				</div>
			),
		},
		{
			key: "2",
			data: (
				<div>
					<span style={{ color: "red" }}>*</span>
					&nbsp;닉네임
				</div>
			),
			dataInput: (
				<div>
<<<<<<< HEAD
					<input className={styles.inputstyle} value={Nickname} onChange={onNicknameHandler} required />
					<span ref={checkNickname} style={{ color: "gray" }}>
=======
					<input
						className={styles.inputstyle}
						value={nickname}
						onChange={OnNicknameHandler}
						required
					/>
					<span ref={CheckNickname} style={{ color: "gray" }}>
>>>>>>> 94ccdfad0a888168912c0f4566019b775f0393b1
						&nbsp;&nbsp; 한글 또는 영문 최대 6자리 입력
					</span>
				</div>
			),
		},
		{
			key: "3",
			data: (
				<div>
					<span style={{ color: "red" }}>*</span>
					&nbsp;아이디
				</div>
			),
			dataInput: (
				<div>
<<<<<<< HEAD
					<input className={styles.inputstyle} value={ID} onChange={onIDHandler} required />
					<span ref={checkID} style={{ color: "gray" }}>
						&nbsp;&nbsp; 영문, 숫자 필수 최소 6자리 입력 (특수문자, 대문자 사용 불가)
=======
					<input
						className={styles.inputstyle}
						value={id}
						onChange={OnIdHandler}
						required
					/>
					<span ref={CheckId} style={{ color: "gray" }}>
						&nbsp;&nbsp; 영문, 숫자 필수 최소 6자리 입력 (특수문자,
						대문자 사용 불가)
>>>>>>> 94ccdfad0a888168912c0f4566019b775f0393b1
					</span>
				</div>
			),
		},
		{
			key: "4",
			data: (
				<div>
					<span style={{ color: "red" }}>*</span>
					&nbsp;비밀번호
				</div>
			),
			dataInput: (
				<div>
<<<<<<< HEAD
					<input className={styles.inputstyle} value={Password} onChange={onPasswordHandler} required />
					<span ref={checkPassword} style={{ color: "gray" }}>
						&nbsp;&nbsp; 영문, 숫자, 특수문자 필수 최소 7자리 입력 (대문자 사용 불가)
=======
					<input
						className={styles.inputstyle}
						value={password}
						onChange={OnPasswordHandler}
						required
					/>
					<span ref={CheckPassword} style={{ color: "gray" }}>
						&nbsp;&nbsp; 영문, 숫자, 특수문자 필수 최소 7자리 입력
						(대문자 사용 불가)
>>>>>>> 94ccdfad0a888168912c0f4566019b775f0393b1
					</span>
				</div>
			),
		},
		{
			key: "5",
			data: (
				<div>
					<span style={{ color: "red" }}>*</span>
					&nbsp;비밀번호 확인&nbsp;&nbsp;&nbsp;
				</div>
			),
			dataInput: (
				<div>
<<<<<<< HEAD
					<input className={styles.inputstyle} value={ConfirmPassword} onChange={onConfirmPasswordHandler} required />
=======
					<input
						className={styles.inputstyle}
						value={confirmPassword}
						onChange={OnConfirmPasswordHandler}
						required
					/>
>>>>>>> 94ccdfad0a888168912c0f4566019b775f0393b1
				</div>
			),
		},
		{
			key: "6",
			data: (
				<div>
					<span style={{ color: "red" }}>*</span>
					&nbsp;이메일
				</div>
			),
			dataInput: (
				<div>
<<<<<<< HEAD
					<input className={styles.inputstyle} type="email" value={Email} onChange={onEmailHandler} required />
=======
					<input
						className={styles.inputstyle}
						type="email"
						value={email}
						onChange={OnEmailHandler}
						required
					/>
>>>>>>> 94ccdfad0a888168912c0f4566019b775f0393b1
					&nbsp;
				</div>
			),
		},
		{
			key: "7",
			data: "학번",
<<<<<<< HEAD
			dataInput: <input className={styles.inputstyle} value={StudentID} onChange={onStudentIDHandler} />,
=======
			dataInput: (
				<input
					className={styles.inputstyle}
					value={studentId}
					onChange={OnStudentIdHandler}
				/>
			),
>>>>>>> 94ccdfad0a888168912c0f4566019b775f0393b1
		},
	];

	const columns = [
		{
			title: <div style={{ fontSize: "18px" }}>기본 정보</div>,
			dataIndex: "data",
			key: "data",
			render(text, dataSource) {
				return {
					props: {
						style: {
							background: "#f5f5f5",
<<<<<<< HEAD
							borderBottom: dataSource.key === "7" ? "solid 2px gray" : "solid 1px lightgray",
							borderTop: dataSource.key === "1" ? "solid 2px gray" : "none",
=======
							borderBottom:
								dataSource.key === "7"
									? "solid 2px gray"
									: "solid 1px lightgray",
							borderTop:
								dataSource.key === "1"
									? "solid 2px gray"
									: "none",
>>>>>>> 94ccdfad0a888168912c0f4566019b775f0393b1
						},
					},
					children: <div>{text}</div>,
				};
			},
		},
		{
			title: (
				<span style={{ float: "right" }}>
					<span style={{ color: "red" }}>*</span>
					&nbsp;표시는 반드시 입력해야 하는 항목입니다.
				</span>
			),
			dataIndex: "dataInput",
			key: "dataInput",
			render(text, dataSource) {
				return {
					props: {
						style: {
<<<<<<< HEAD
							borderBottom: dataSource.key === "7" ? "solid 2px gray" : "solid 1px lightgray",
							borderTop: dataSource.key === "1" ? "solid 2px gray" : "none",
=======
							borderBottom:
								dataSource.key === "7"
									? "solid 2px gray"
									: "solid 1px lightgray",
							borderTop:
								dataSource.key === "1"
									? "solid 2px gray"
									: "none",
>>>>>>> 94ccdfad0a888168912c0f4566019b775f0393b1
						},
					},
					children: <div>{text}</div>,
				};
			},
		},
	];

	return (
		<div className={styles.register}>
			<form onSubmit={OnSubmitHandler}>
				<Table
					dataSource={dataSource}
					columns={columns}
					pagination={false}
				/>
				<br />
				<Button type="primary" htmlType="submit">
					회원가입
				</Button>
				&nbsp;&nbsp;
				<Button htmlType="button">취소</Button>
			</form>
		</div>
	);
};

export default RegisterPage;
