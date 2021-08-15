// About, 관심 태그 컴포넌트

import React, { useState } from "react";

const Tags = ({ text }) => {
	return (
		<span>
			<span
				style={{
					backgroundColor: "#ECF0F1",
					borderRadius: "20px",
					padding: "5px 20px 5px 20px",
				}}
			>
				{text}
			</span>
			&nbsp;&nbsp;
		</span>
	);
};

const AboutAndTag = () => {
	const [about, SetAbout] = useState("자기소개가 없습니다."); // 자기소개
	const [tags, SetTags] = useState(["JavaScript", "react.js"]);
	/* 지금 배열에 있는 값들은 예시고 실제로는 비워놓고 서버에서 받아와서 빈 배열에 추가할 예정 */

	const style = {
		textAlign: "left",
		width: "520px",
		padding: "30px 40px 30px 40px",
		margin: "0px 10px 30px 10px",
		boxShadow: "0px 4px 10px 4px rgba(0, 0, 0, 0.03)",
		borderRadius: "26px",
	};

	const title = {
		fontSize: "20px",
		fontWeight: "bold",
	};

	return (
		<div style={style}>
			<span style={title}>About</span>
			<p style={{ margin: "20px 0px 60px 0px" }}>{about}</p>

			<span style={title}>관심 태그</span>
			<div style={{ margin: "25px 0px 20px 0px" }}>
				{tags.map((a, i) => (
					<Tags text={tags[i]} />
				))}
			</div>
		</div>
	);
};

export default AboutAndTag;
