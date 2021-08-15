import { useState, useEffect } from "react"
import styles from "./MainPage.module.scss";
import Banner from "./Banner"
import PostList from "../PostList/PostList";
import SearchBar from "../SearchBar/SearchBar";
import TopButton from "../Topbutton/TopButton";

// 임시 json 추후 DB에 올릴 예정
const BannerImage = [
	{
		title: "배너1", // alt 텍스트
		url: "/", // 이미지를 클릭하면 이동하는 url
		imgUrl: "/", // 이미지 자체의 위치
	},
	{
		title: "배너2",
		url: "/",
		imgUrl: "/",
	},
	{
		title: "배너3",
		url: "/",
		imgUrl: "/",
	},
];

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

const MainPage = () => {
	return (
		<div style={{ paddingBottom: "106px" }}>

			<TopButton></TopButton>

			{/* 슬라이드 배너 */}
			<Banner BannerImage={BannerImage} />

			{/* 게시글 리스트 */}
			<div className={styles.mainContainer} style={{ marginBottom: "400px" }}>
				<div className={styles.postList} >
					{posts.map(post => (
						<PostList post={post} key={posts._id} />
					))}
				</div>
				<div className={[styles.sideDeck, "NanumSquare"].join(" ")}>
					<div className={styles.searchContainer}>
						<SearchBar placeholder="인트아이에서 검색" />
					</div>
					<div className={styles.top5Post}>top 5 게시물
						<ul>
							<li>1 <span>탑 게시물1</span></li>
							<li>2 <span>탑 게시물2</span></li>
							<li>3 <span>탑 게시물3</span></li>
							<li>4 <span>탑 게시물4</span></li>
							<li>5 <span>탑 게시물5</span></li>
						</ul>
					</div>
					<div className={styles.topTag}>top 태그
						<div style={{ marginTop: "20px" }}>
							<span className={styles.tag}>JavaScript</span>
							<span className={styles.tag}>ECMAScript</span>
							<span className={styles.tag}>React.js</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
