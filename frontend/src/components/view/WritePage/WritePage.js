import React, { useState, useRef } from "react";
import styles from "./WritePage.module.scss";
import Write from "../../../assets/images/icon/연필.png";
import Exit from "../../../assets/images/icon/나가기.png";
// 토스트 UI
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import BoardTagMaker from "../BoardTagMaker/BoardTagMaker";

function WritePage(props) {
	// 태그메이커로부터 태그값 리턴 받는 함수
	const ReturnTags = (Tags) => {
		console.log(`현재 태그를 리턴하면 이 값을 갖습니다${Tags}`);
	};
	// 제목 다루는 state와 이벤트 함수
	const [titleState, SetTitleState] = useState("");
	const TitleOnChange = (e) => {
		SetTitleState(e.target.value);
	};
	//  에디터 함수
	const EditorRef = useRef();

	const btnClickListener = () => {
		const EditorInstance = EditorRef.current.getInstance();
		const GetContent_Md = EditorInstance.getMarkdown();
		console.log("---마크다운---");
		console.log(GetContent_Md);
		const GetContent_Html = EditorInstance.getHTML();
		console.log("---HTML---");
		console.log(GetContent_Html);
	};

	// 제출 함수
	const OnSubmit = () => {
		// console.log(titleState);
		// console.log(ReturnTags);
	};
	return (
		<div className={[styles.WriteContainer, "Spoqa"].join(" ")}>
			<form id="QnAWrite" onSubmit="return false">
				<input
					className={styles.title}
					type="text"
					placeholder="제목을 입력하세요"
					value={titleState}
					onChange={TitleOnChange}
				/>

				<div className={styles.line}></div>

				<BoardTagMaker ReturnTags={ReturnTags} />

				<>
					<Editor
						initialValue="질문을 입력하세요!"
						previewStyle="vertical"
						ref={EditorRef}
						height="600px"
						initialEditType="wysiwyg"
						useCommandShortcut={true}
					/>
				</>
			</form>
			<div className={[styles.buttonContainer, "NanumSquare"].join(" ")}>
				<button
					className={styles.exit}
					onClick={() => {
						props.history.push("/QnAPage");
					}}
				>
					<img src={Exit} alt="" />
					나가기
				</button>
				<button className={styles.write} onClick={OnSubmit}>
					<img src={Write} alt="" />
					작성완료
				</button>
			</div>
		</div>
	);
}

export default WritePage;
