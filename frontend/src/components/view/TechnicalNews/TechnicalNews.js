import React from "react"
import styles from "./TechnicalNews.module.scss"

const post = [
	{
		id: 1,
		title: "제목1",
		content: "아무튼 아주 긴 내용",
	},
	{
		id: 2,
		title: "제목2",
		content: "아무튼 아주 긴 내용",
	},
	{
		id: 3,
		title: "제목3",
		content: "아무튼 아주 긴 내용",
	},
];

const Post = () => {
	return (
		<div>
			<b>{post.title}</b> <sqan>{post.content}</sqan>
		</div>
	);
}

const TechnicalNews = () => {
	return (
		<div>
			<div className={[styles.banner, "NanumSquare"].join(" ")}>
				<div>기술 뉴스 | 프로그래밍 관련 최신 기술 및 새로운 하드웨어 관련 뉴스를 업로드 하는 곳</div>
			</div>
		</div>
	);
}

export default TechnicalNews;