import styles from "./QnAPage.module.scss";
import BoardBanner from "../BoardBanner/BoardBanner";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Left from "../../../assets/images/icon/왼쪽화살표.png";
import Right from "../../../assets/images/icon/오른쪽화살표.png";
import BoardListMaker from "../BoardListMaker/BoardListMaker";

function QnAPage(props) {
	return (
		<div className={[styles.QnAPageContainer, "NanumSquare"].join(" ")}>
			<BoardBanner text="질문방 | 궁금한 내용을 질문할 수 있는 게시판으로 익명 질문도 가능합니다" />
			<div className={styles.listContainer}>
				<BoardListMaker push={props.history.push} />

				<div className={styles.buttonContainer}>
					<button
						onClick={() => {
							props.history.push("/QnAPage/Write");
						}}
					>
						새 글 작성
					</button>
				</div>
				<div className={styles.paginationContainer}>
					<button>
						<img src={Left} alt="arrow" />
					</button>
					<button>1</button>
					<button>2</button>
					<button>3</button>
					<button>4</button>
					<button>5</button>
					<button>
						<img src={Right} alt="arrow" />
					</button>
				</div>
				<div className={styles.searchContainer}>
					<SearchBar placeholder="질문방에서 검색" />
				</div>
			</div>
		</div>
	);
}

export default QnAPage;
