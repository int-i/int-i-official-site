// 작성한 게시글 확인 컴포넌트

import React from "react";

const WrittenPost = () => {
	const style = {
		textAlign: "left",
		width: "1100px",
		padding: "20px 50px 20px 50px",
		boxShadow: "0px 4px 10px 4px rgba(0, 0, 0, 0.03)",
		borderRadius: "26px",
	};

	return <div style={style}>작성한 게시글</div>;
};

export default WrittenPost;
