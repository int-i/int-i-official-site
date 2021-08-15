import React, { useState } from "react";
import styles from "./Comment.module.scss";
import testcomment from "../../comment.json";
import DefaultProfile from "../../../assets/images/icon/하얀 유저.png";

// axios 리턴값 배열로 바뀔거임
let tempCommentArr = [testcomment, testcomment, testcomment];

function Comment() {
	const [isOepnComment, SetisOpenComment] = useState(false);
	const [isChecked, SetIsChecked] = useState(false);
	const ClickCheckBox = () => {
		if (isChecked === false) {
			SetIsChecked(true);
		} else if (isChecked === true) {
			SetIsChecked(false);
		}
	};

	const [commentInput, SetCommentInput] = useState("");
	const OnChganeHanddler = (e) => {
		SetCommentInput(e.target.value);
	};
	return (
		<div>
			<div className={styles.commentContainer}>
				{isOepnComment === false ? (
					<button
						onClick={() => {
							SetisOpenComment(true);
						}}
						className={styles.commentButton}
					>
						+ 댓글 펼치기
					</button>
				) : (
					<button
						onClick={() => {
							SetisOpenComment(false);
						}}
						className={styles.commentButton}
					>
						- 댓글 접기
					</button>
				)}
				{isOepnComment === false ? (
					<div></div>
				) : (
					<>
						<div className={styles.commentForm}>
							<textarea
								onChange={OnChganeHanddler}
								value={commentInput}
								placeholder="댓글 텍스트를 입력하세요"
							></textarea>
						</div>
						<div className={styles.commentEndLine}>
							<div className={styles.check}>
								<input type="checkbox" onClick={ClickCheckBox} />
								<p>익명 작성 시 체크 {`${isChecked}`}</p>
							</div>
							<button>댓글 작성</button>
						</div>
						<div className={styles.commentList}>
							{
								//댓글 리스트로 카드 제작
								tempCommentArr.map((a, i) => {
									return (
										<div className={styles.commentCard}>
											<div className={styles.commentInfo}>
												{
													//이미지가 없으면 기본 이미지로
													tempCommentArr[i].profile !== "" ? (
														<img
															className={styles.commentProfile}
															src={tempCommentArr[i].profile}
															alt="profile"
														/>
													) : (
														<div className={styles.defaultCommentImageBackground}>
															<img
																className={styles.defaultCommentImage}
																src={DefaultProfile}
																alt="profile"
															/>
														</div>
													)
												}
												<div className={styles.commentInfoRight}>
													<p>{tempCommentArr[i].author}</p>
													<span>{tempCommentArr[i].date}</span>
												</div>
											</div>
											<div className={styles.commentContent}>{tempCommentArr[i].content}</div>
										</div>
									);
								})
							}
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default Comment;
