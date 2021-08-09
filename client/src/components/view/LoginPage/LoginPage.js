//로그인 페이지
import React, { useState, useEffect } from "react";
import styles from "./LoginPage.module.css";
import { useCookies } from "react-cookie";
//npm install react-cookie
import { Form, Input, Button, Checkbox } from "antd";
//npm install antd
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
//npm install --save @ant-design/icons

const LoginPage = () => {
	const [ID, setID] = useState("");
	const [Password, setPassword] = useState("");
	const [isRemember, setIsRemember] = useState(false);
	const [cookies, setCookie, removeCookie] = useCookies(["rememberID"]);

	const onIDHandler = (event) => {
		setID(event.currentTarget.value);
	};

	const onPasswordHandler = (event) => {
		setPassword(event.currentTarget.value);
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();

		console.log("ID", ID);
		console.log("Password", Password);
	};

	useEffect(() => {
		if (cookies.rememberID !== undefined) {
			setID(cookies.rememberID);
			setIsRemember(true);
		}
	}, [cookies.rememberID]);

	const handleOnChange = (e) => {
		setIsRemember(e.target.check);
		if (e.target.check) {
			setCookie("rememberID", ID, { maxAge: 2000 });
		} else {
			removeCookie("rememberID");
		}
	};

	const onFinish = (values) => {
		console.log("Success:", values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<div className={styles.loginStyle}>
			<h2>로그인</h2>
			<br />
			<Form
				name="basic"
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				onSubmit={onSubmitHandler}
			>
				<Form.Item
					name="ID"
					rules={[
						{
							required: true,
							message: (
								<div style={{ textAlign: "left" }}>Please input your ID!</div>
							),
						},
					]}
				>
					<Input
						value={ID}
						placeholder="아이디"
						onChange={onIDHandler}
						style={{ width: "400px", height: "40px" }}
					/>
				</Form.Item>
				<Form.Item
					name="password"
					rules={[
						{
							required: true,
							message: (
								<div style={{ textAlign: "left" }}>
									Please input your password!
								</div>
							),
						},
					]}
				>
					<Input.Password
						value={Password}
						placeholder="비밀번호"
						onChange={onPasswordHandler}
						style={{ width: "400px", height: "40px" }}
					/>
				</Form.Item>
				<Form.Item
					name="remember"
					valuePropName="checked"
					style={{ textAlign: "left" }}
				>
					<Checkbox onChange={handleOnChange} checked={isRemember}>
						아이디 기억하기
					</Checkbox>
				</Form.Item>
				<Form.Item>
					<div style={{ lineHeight: "50%" }}>
						<Button style={{ width: "400px" }} type="primary" htmlType="submit">
							로그인
						</Button>
						<br />
						<br />
						<Button
							style={{ width: "400px", borderColor: "#1890ff" }}
							htmlType="button"
						>
							회원가입
						</Button>
					</div>
				</Form.Item>
				<div className={styles.hrSect}>SNS 로그인</div>
				<Form.Item>
					<div style={{ lineHeight: "50%" }}>
						<Button icon={<GoogleOutlined />} style={{ width: "400px" }}>
							구글 로그인
						</Button>
						<br />
						<br />
						<Button
							//icon={<MessageFilled />}
							style={{
								background: "Gold",
								borderColor: "Gold",
								width: "400px",
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="14"
								fill="currentColor"
								class="bi bi-chat-fill"
								viewBox="0 0 16 16"
							>
								<path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
							</svg>
							카카오 로그인
						</Button>
						<br />
						<br />
						<Button
							icon={<GithubOutlined />}
							style={{
								background: "#2C3E50",
								bloderColor: "#2C3E50",
								color: "white",
								width: "400px",
							}}
						>
							GitHub 로그인
						</Button>
					</div>
				</Form.Item>
			</Form>
		</div>
	);
};

export default LoginPage;
