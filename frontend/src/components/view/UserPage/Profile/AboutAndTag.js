// About, 관심 태그 컴포넌트

import React, { useState, useEffect } from "react";
import axios from "axios";

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
	const [about, SetAbout] = useState(""); // 자기소개
	const [tags, SetTags] = useState([]);

	useEffect(() => {
		axios
			.get("/api/auth/userinfo", {})
			.then(function (response) {
				SetAbout(response.data.user.privateAbout);
				SetTags(response.data.user.tags);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

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
				{tags && tags.map((a, i) => <Tags text={tags[i]} />)}
			</div>
		</div>
	);
};

export default AboutAndTag;
