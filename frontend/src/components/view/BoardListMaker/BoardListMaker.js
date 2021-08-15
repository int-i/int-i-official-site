import React from "react";
import styles from "./BoardListMaker.module.scss";

function BoardListMaker(props) {
	console.log(props.id);
	// 할당값 props.tags로 변경
	let tempArr = ["자바스크립트", "JavaScript", "파이썬"];
	const MoveToView = () => {
		props.push(`/${props.page}/PostView/${props.id}`);
	};
	return (
		<div onClick={MoveToView} className={[styles.BoardListMakerContainer, "Spoqa"].join(" ")}>
			<div className={styles.Post}>
				<div className={styles.PostTitle}>{props.title}</div>
				<div className={styles.PostContent}>{props.content}</div>
				<div className={styles.PostTags}>
					{tempArr.map((a, i) => {
						return <div>{tempArr[i]}</div>;
					})}
				</div>
				<div className={styles.PostInfo}>
					<div className={styles.PostInfoLeft}>
						<p>{props.date}</p>
						<span>❤ {props.likes}</span>
					</div>
					<div className={styles.PostInfoRight}>
						{/* 사진에 조건문 달아서 없을때만 기본 프로필로 뱉게 */}
						<div>흑</div>
						<p>{props.author}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BoardListMaker;
