import React from "react";
import styles from "./PostViewPage.module.scss";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Viewer } from "@toast-ui/react-editor";
import test from "../../temp.json";
function PostViewPage() {
	return (
		<div className={[styles.PostViewContainer, "Spoqa"].join(" ")}>
			<h1>{test.title}</h1>
			<div className={styles.postInfo}>
				<div className={styles.infoLeft}>
					<div>{test.author}</div>
					<div className={styles.verticalLine}> </div>
					<div className={styles.date}>2021.07.26</div>
				</div>
				<div className={[styles.infoRight, "NanumSquare"].join(" ")}>
					<button>수정</button>
					<button>삭제</button>
				</div>
			</div>
			<Viewer initialValue={test.content} />
		</div>
	);
}

export default PostViewPage;
