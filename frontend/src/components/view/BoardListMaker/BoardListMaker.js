import React from "react";
import styles from "./BoardListMaker.module.scss";

function BoardListMaker() {
	let tempArr = ["자바스크립트", "JavaScript", "파이썬"];
	return (
		<div className={[styles.BoardListMakerContainer, "Spoqa"].join(" ")}>
			<div className={styles.Post}>
				<div className={styles.PostTitle}>제목</div>
				<div className={styles.PostText}>
					내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
				</div>
				<div className={styles.PostTags}>
					{tempArr.map((a, i) => {
						return <div>{tempArr[i]}</div>;
					})}
				</div>
				<div className={styles.PostInfo}>
					<div className={styles.PostInfoLeft}>
						<p>2021.03.12</p>
						<span>❤ 5</span>
					</div>
					<div className={styles.PostInfoRight}>
						<div>작</div>
						<p>작성자</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BoardListMaker;
