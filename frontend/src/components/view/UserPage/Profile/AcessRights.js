// 권한 컴포넌트

import React from "react";

const AcessRights = () => {
	const style = {
		textAlign: "left",
		width: "265px",
		padding: "20px 40px 20px 40px",
		margin: "0px 200px 30px 10px",
		boxShadow: "0px 4px 10px 4px rgba(0, 0, 0, 0.03)",
		borderRadius: "26px",
	};

	const title = {
		fontSize: "17px",
		fontWeight: "bold",
	};

	return (
		<div style={style}>
			<span style={title}>권한</span>
		</div>
	);
};

export default AcessRights;
