import React from "react";
import styles from "./WritePage.module.scss";
import Write from "../../../assets/images/icon/연필.png";
import Exit from "../../../assets/images/icon/나가기.png";

function WritePage() {
	return (
		<div className={[styles.WriteContainer, "Spoqa"].join(" ")}>
			<form>
				<input
					className={styles.title}
					type="text"
					placeholder="제목을 입력하세요"
				/>
				<div className={styles.line}></div>
				<input
					className={styles.tag}
					type="text"
					placeholder="태그를 입력하세요"
				/>
				<p>텍스트 편집기 들어올 자리</p>
			</form>
			<div className={[styles.buttonContainer, "NanumSquare"].join(" ")}>
				<button className={styles.exit}>
					<img src={Exit} alt="" />
					나가기
				</button>
				<button className={styles.write}>
					<img src={Write} alt="" />
					작성완료
				</button>
			</div>
		</div>
	);
}

export default WritePage;
