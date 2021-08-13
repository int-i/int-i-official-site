// 개인 작업 공간 컴포넌트

import React from "react";

const PersonalWorkingSpace = () => {
	const style = {
		textAlign: "left",
		width: "265px",
		padding: "20px 40px 20px 40px",
		margin: "0px 10px 30px 220px",
		boxShadow: "0px 4px 10px 4px rgba(0, 0, 0, 0.03)",
		borderRadius: "26px",
	};

	const title = {
		fontSize: "17px",
		fontWeight: "bold",
	};

	return (
		<div style={style}>
			<span style={title}>개인 작업 공간</span>
			<br />
			블로그 바로가기
			<br />
			깃허브 바로가기
		</div>
	);
};

export default PersonalWorkingSpace;
