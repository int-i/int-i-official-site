import styles from "./QnAPage.module.scss";
import BoardBanner from "../BoardBanner/BoardBanner";
import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Left from "../../../assets/images/icon/왼쪽화살표.png";
import Right from "../../../assets/images/icon/오른쪽화살표.png";
import BoardListMaker from "../BoardListMaker/BoardListMaker";
import axios from "axios";

function QnAPage(props) {
	useEffect(() => {
		async function fetchData() {
			await axios.get("/api/question/").then((response) => {
				console.log("response", response.data.questions[0].title);
				SetLists(response.data.questions);
			});
		}
		fetchData();
	}, []);
	const [lists, SetLists] = useState([]);

	console.log(lists);
	return (
		<div className={[styles.QnAPageContainer, "NanumSquare"].join(" ")}>
			<BoardBanner text="질문방 | 궁금한 내용을 질문할 수 있는 게시판으로 익명 질문도 가능합니다" />
			<div className={styles.listContainer}>
				{lists.map((a, i) => {
					return (
						<BoardListMaker
							page="QnAPage"
							title={lists[i].title}
							content={lists[i].contents}
							author={lists[i].author}
							date={lists[i].createdAt}
							likes="5"
							id={lists[i]._id}
							push={props.history.push}
						/>
					);
				})}

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
