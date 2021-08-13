// About, 관심 태그 컴포넌트

import React from "react";

const AboutAndTag = () => {
	const style = {
		textAlign: "left",
		width: "530px",
		padding: "20px 40px 20px 40px",
		margin: "0px 10px 30px 10px",
		boxShadow: "0px 4px 10px 4px rgba(0, 0, 0, 0.03)",
		borderRadius: "26px",
	};

	const title = {
		fontSize: "17px",
		fontWeight: "bold",
	};

	return (
		<div style={style}>
			<span style={title}>About</span>
			<br />
			<br />
			<span style={title}>관심 태그</span>
		</div>
	);
};

export default AboutAndTag;
