//로그인 페이지

import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import { Form, Input, Button, Checkbox } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";

const LoginPage = () => {
	const [id, SetId] = useState("");
	const [password, SetPassword] = useState("");

	const OnIDHandler = (event) => {
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

	const OnFinish = (values) => {
		console.log("Success:", values);
	};

	const OnFinishFailed = (errorInfo) => {
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
				onFinish={OnFinish}
				onFinishFailed={OnFinishFailed}
				onSubmit={OnSubmitHandler}
			>
				<Form.Item
					name="id"
					rules={[
						{
							required: true,
							message: (
								<div style={{ textAlign: "left" }}>
									Please input your ID!
								</div>
							),
						},
					]}
				>
					<Input
						value={id}
						placeholder="아이디"
						onChange={OnIDHandler}
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
						value={password}
						placeholder="비밀번호"
						onChange={OnPasswordHandler}
						style={{ width: "400px", height: "40px" }}
					/>
				</Form.Item>

				<Form.Item
					name="remember"
					valuePropName="checked"
					style={{ textAlign: "left" }}
				>
					<Checkbox>아이디 기억하기</Checkbox>
				</Form.Item>

				<Form.Item>
					<div style={{ lineHeight: "50%" }}>
						<Button
							style={{ width: "400px" }}
							type="primary"
							htmlType="submit"
						>
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
						<Button
							icon={<GoogleOutlined />}
							style={{ width: "400px" }}
						>
							구글 로그인
						</Button>
						<br />
						<br />

						<Button
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
