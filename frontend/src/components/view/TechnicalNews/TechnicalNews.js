import React from "react";
import styles from "./TechnicalNews.module.scss";
import userIcon from "../../../assets/images/icon/회색 유저.png";
import BoardBanner from "../BoardBanner/BoardBanner";
import SearchBar from "../SearchBar/SearchBar";
import Left from "../../../assets/images/icon/왼쪽화살표.png";
import Right from "../../../assets/images/icon/오른쪽화살표.png";


const posts = [
	{
		_id: 1,
		title: "한글 입숨1",
		content: "부패를 피어나는 꽃 불어 그리하였는가? 뼈 귀는 별과 품에 타오르고 넣는 그들은 못할 것이다. 열매를 우는 피가 어디 있는 끓는다. 힘차게 만천하의 싹이 아니다. 피부가 보내는 예가 얼마나 같이 동력은 같지 때문이다. 위하여, 간에 그러므로 과실이 온갖 수 모래뿐일 무엇을 청춘은 쓸쓸하랴?",
		tags: [{ __tagId: 1, tagName: "JavaScript" }, { __tagId: 2, tagName: "ECMAScript" }, { __tagId: 3, tagName: "React.js" },],
		date: "2021.08.14",
		author: "김인하",
		like: "♥ 5",
	},
	{
		_id: 2,
		title: "한글 입숨2",
		content: "때에, 어디 밥을 같은 예수는 할지니, 위하여서 이상은 있으랴? 앞이 풍부하게 인생에 위하여서 뜨고, 아니다. 끓는 고동을 싶이 우리 방황하였으며, 이상의 실로 앞이 아니다. 바이며, 풀이 같이, 보내는 커다란 청춘에서만 말이다. 이상의 같이, 뛰노는 뿐이다. 이는 아니더면, 때에, 못할 긴지라 피부가 것이다.",
		tags: [{ __tagId: 1, tagName: "JavaScript" }, { __tagId: 2, tagName: "ECMAScript" }, { __tagId: 3, tagName: "React.js" },],
		date: "2021.08.14",
		author: "박인트",
		like: "♥ 32",
	},
	{
		_id: 3,
		title: "한글 입숨3",
		content: "쓸쓸한 우리 일월과 그러므로 끓는 풀밭에 봄바람이다. 따뜻한 힘차게 그들은 철환하였는가? 이상의 구하기 능히 아니더면, 석가는 방황하여도, 사막이다. 같이, 넣는 가는 대중을 황금시대를 물방아 실로 심장의 보라. 품에 끝에 현저하게 위하여 힘차게 이것이다. 그들은 이 싹이 아름답고 대한 원질이 인생을 사막이다.",
		tags: [{ __tagId: 1, tagName: "JavaScript" }, { __tagId: 2, tagName: "ECMAScript" }, { __tagId: 3, tagName: "React.js" },],
		date: "2021.08.14",
		author: "최아이",
		like: "♥ 14",
	},
];

const Post = ({ post }) => {
	return (
		<div className={[styles.postList, "Spoqa"].join(" ")}>
			<div className={styles.title}>{post.title}</div>
			<div className={styles.content}>{post.content}</div>
			<div style={{ marginTop: "50px", marginLeft: "20px" }}>{post.tags.map(tag => (
				<span className={styles.tag}>{tag.tagName}</span>
			))}</div>
			<div className={styles.date}>{post.date}</div>
			<div className={styles.author}><img src={userIcon} alt="유저이미지" width="20" />{post.author}</div>
			<div className={styles.like}>{post.like}</div>
		</div>
	);
}

const TechnicalNews = (props) => {
	return (
		<div style={{ paddingBottom: "200px" }}>
			{/* 상단 배너 */}
			<div className={[styles.banner, "NanumSquare"].join(" ")}>
				<div>기술 뉴스 | 프로그래밍 관련 최신 기술 및 새로운 하드웨어 관련 뉴스를 업로드 하는 곳</div>
			</div>

			{/* 게시글 리스트 */}
			<div>
				{posts.map(post => (
					<Post post={post} key={posts._id} />
				))}
			</div>

			<div className={styles.listContainer}>
				<div className={styles.buttonContainer}>
					<button
						onClick={() => {
							props.history.push("/WritePage");
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

export default TechnicalNews;