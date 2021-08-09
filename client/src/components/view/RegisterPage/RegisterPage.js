//회원가입 페이지
import React, { useState, useRef } from "react";
import { Table, Button } from "antd";
import styles from "./RegisterPage.module.css";
import "antd/dist/antd.css";
//npm install antd

const RegisterPage = () => {
	const [Name, setName] = useState("");
	const [Nickname, setNickname] = useState("");
	const [ID, setID] = useState("");
	const [Password, setPassword] = useState("");
	const [ConfirmPassword, setConfirmPassword] = useState("");
	const [Email, setEmail] = useState("");
	const [StudentID, setStudentID] = useState("");

	const checkName = useRef();
	const checkNickname = useRef();
	const checkID = useRef();
	const checkPassword = useRef();

	const onNameHandler = (event) => {
		setName(event.currentTarget.value);

		//유효성 체크 - 한/영 최소 2자리
		var regExp = /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]{2,}$/;
		console.log("이름 유효성 검사 :: ", regExp.test(event.target.value));
		if (regExp.test(event.target.value)) {
			checkName.current.style = "color:YellowGreen";
		} else {
			checkName.current.style = "color:red";
		}
	};

	const onNicknameHandler = (event) => {
		setNickname(event.currentTarget.value);

		//유효성 체크 - (한/영) 최대 6자리
		var regExp = /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]{1,6}$/;
		console.log("닉네임 유효성 검사 :: ", regExp.test(event.target.value));
		if (regExp.test(event.target.value)) {
			checkNickname.current.style = "color:YellowGreen";
		} else {
			checkNickname.current.style = "color:red";
		}
	};

	const onIDHandler = (event) => {
		setID(event.currentTarget.value);

		//유효성 체크 - 영/숫자 최소 6자리 (특수문자X 대문자X)
		var regExp = /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,}$/;
		console.log("아이디 유효성 검사 :: ", regExp.test(event.target.value));
		if (regExp.test(event.target.value)) {
			checkID.current.style = "color:YellowGreen";
		} else {
			checkID.current.style = "color:red";
		}
	};

	const onPasswordHandler = (event) => {
		setPassword(event.currentTarget.value);

		//유효성 체크 - 영/숫자/특수문자 필수 최소 7자리 (대문자X)
		var regExp = /^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[a-z\d$@$!%*#?&]{7,}$/;
		console.log("비밀번호 유효성 검사 :: ", regExp.test(event.target.value));
		if (regExp.test(event.target.value)) {
			checkPassword.current.style = "color:YellowGreen";
		} else {
			checkPassword.current.style = "color:red";
		}
	};

	const onConfirmPasswordHandler = (event) => {
		setConfirmPassword(event.currentTarget.value);
	};

	const onEmailHandler = (event) => {
		setEmail(event.currentTarget.value);
	};

	const onStudentIDHandler = (event) => {
		setStudentID(event.currentTarget.value);
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();

		if (Password !== ConfirmPassword) {
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
					<input className={styles.inputstyle} value={Name} onChange={onNameHandler} required />
					<span ref={checkName} style={{ color: "gray" }}>
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
					<input className={styles.inputstyle} value={Nickname} onChange={onNicknameHandler} required />
					<span ref={checkNickname} style={{ color: "gray" }}>
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
					<input className={styles.inputstyle} value={ID} onChange={onIDHandler} required />
					<span ref={checkID} style={{ color: "gray" }}>
						&nbsp;&nbsp; 영문, 숫자 필수 최소 6자리 입력 (특수문자, 대문자 사용 불가)
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
					<input className={styles.inputstyle} value={Password} onChange={onPasswordHandler} required />
					<span ref={checkPassword} style={{ color: "gray" }}>
						&nbsp;&nbsp; 영문, 숫자, 특수문자 필수 최소 7자리 입력 (대문자 사용 불가)
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
					<input className={styles.inputstyle} value={ConfirmPassword} onChange={onConfirmPasswordHandler} required />
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
					<input className={styles.inputstyle} type="email" value={Email} onChange={onEmailHandler} required />
					&nbsp;
				</div>
			),
		},
		{
			key: "7",
			data: "학번",
			dataInput: <input className={styles.inputstyle} value={StudentID} onChange={onStudentIDHandler} />,
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
							borderBottom: dataSource.key === "7" ? "solid 2px gray" : "solid 1px lightgray",
							borderTop: dataSource.key === "1" ? "solid 2px gray" : "none",
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
							borderBottom: dataSource.key === "7" ? "solid 2px gray" : "solid 1px lightgray",
							borderTop: dataSource.key === "1" ? "solid 2px gray" : "none",
						},
					},
					children: <div>{text}</div>,
				};
			},
		},
	];

	return (
		<div className={styles.register}>
			<form onSubmit={onSubmitHandler}>
				<Table dataSource={dataSource} columns={columns} pagination={false} />
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
