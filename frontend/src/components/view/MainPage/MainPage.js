/* eslint-disable */
import { setState, useMemo } from "react";
import style from "./MainPage.module.scss";
import Banner from "./Banner";

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

const MainPage = () => {
	const columns = useMemo(
		() => [
			{
				accessor: "title",
				Header: "Title",
			},
			{
				accessor: "content",
				Header: "Content",
			},
			{
				accessor: "nickname",
				Header: "Nickname",
			},
		],
		[]
	);

	const data = useMemo(
		() =>
			Array(3)
				.fill()
				.map(() => ({
					title: "도커에서 실시간으로 수정한 텍스트",
					content: "내용1",
					nickname: "닉네임1",
				})),
		[]
	);

	return (
		<div style={{ paddingBottom: "106px" }}>
			<Banner BannerImage={BannerImage} />
		</div>
	);
};

export default MainPage;
