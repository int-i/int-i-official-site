import React from "react";
import styles from "./Answer.module.scss";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Viewer } from "@toast-ui/react-editor";
import DefaultProfile from "../../../assets/images/icon/하얀 유저.png";
function Answer() {
	let tempNum = 1;
	let testContent = '이것은 답변 기능의 테스트입니다. `console.log("이것은 답변 기능의 테스트입니다")`';
	let tempAnswerArr = [
		{
			author: "김답변",
			content: testContent,
			profile: "",
			date: "2021년 4월 20일",
		},
	];
	return (
		<div className={styles.AnswerContaienr}>
			<h3 className="AlertNum">{tempNum}개의 답변이 있습니다</h3>
			{tempAnswerArr.map((a, i) => {
				return (
					<div className={styles.AnswerCard}>
						<div className={styles.AnswerInfo}>
							{
								//이미지가 없으면 기본 이미지로
								tempAnswerArr[i].profile !== "" ? (
									<img
										className={styles.AnswerProfile}
										src={tempAnswerArr[i].profile}
										alt="profile"
									/>
								) : (
									<div className={styles.DefaultAnswerImageBackground}>
										<img
											className={styles.DefaultAnswerImage}
											src={DefaultProfile}
											alt="default profile"
										/>
									</div>
								)
							}
							<div className={styles.AnswerInfoRight}>
								<p>{tempAnswerArr[i].author}</p>
								<span>{tempAnswerArr[i].date}</span>
							</div>
						</div>
						<Viewer initialValue={tempAnswerArr[i].content} />
					</div>
				);
			})}
			<h2 className="AlertEditor">질문에 답변하기</h2>
		</div>
	);
}

export default Answer;
