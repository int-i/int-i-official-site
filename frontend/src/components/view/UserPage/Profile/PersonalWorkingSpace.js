// 개인 작업 공간 컴포넌트

import React, { useState } from "react";
import BlueGithub from "../../../../assets/images/icon/파란깃허브.png";
import BlueBlog from "../../../../assets/images/icon/파란블로그.png";

const PersonalWorkingSpace = () => {
	const [blog, SetBlog] = useState("#"); // 블로그 주소
	const [github, SetGithub] = useState("#"); // 깃허브 주소

	const style = {
		textAlign: "left",
		width: "270px",
		padding: "30px 40px 30px 40px",
		margin: "0px 10px 30px 0px",
		boxShadow: "0px 4px 10px 4px rgba(0, 0, 0, 0.03)",
		borderRadius: "26px",
	};

	const title = {
		fontSize: "17px",
		fontWeight: "bold",
	};

	const icon = {
		width: "30px",
		Height: "20px",
		position: "relative",
		top: "5px",
	};

	return (
		<div style={style}>
			<span style={title}>개인 작업 공간</span>
			<br />
			<br />
			<img src={BlueBlog} style={icon} />
			&nbsp; <a href={blog}>블로그 바로가기</a>
			<br />
			<br />
			<img src={BlueGithub} style={icon} />
			&nbsp; <a href={github}>깃허브 바로가기</a>
		</div>
	);
};

export default PersonalWorkingSpace;
