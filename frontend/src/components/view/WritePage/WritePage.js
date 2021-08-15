import React, { useState } from "react";
import styles from "./WritePage.module.scss";
import Write from "../../../assets/images/icon/연필.png";
import Exit from "../../../assets/images/icon/나가기.png";
// 토스트 UI
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import BoardTagMaker from "../BoardTagMaker/BoardTagMaker";

function WritePage() {
	// 만들어진 태그 배열
	const ReturnTags = (Tags) => {
		console.log(`현재 태그를 리턴하면 이 값을 갖습니다${Tags}`);
	};

	return (
		<div className={[styles.WriteContainer, "Spoqa"].join(" ")}>
			<form>
				<input
					className={styles.title}
					type="text"
					placeholder="제목을 입력하세요"
				/>

				<div className={styles.line}></div>

				<BoardTagMaker ReturnTags={ReturnTags} />

				<Editor
					initialValue="질문을 입력하세요!"
					previewStyle="vertical"
					height="600px"
					initialEditType="wysiwyg"
					useCommandShortcut={true}
				/>
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
