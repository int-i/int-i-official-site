import { setState } from "react"
import style from "./MainPage.module.scss";
import Banner from "./Banner"

// 임시 json 추후 DB에 올릴 예정
const BannerImage = [
	{
		title: "배너1", // alt 텍스트
		url: "/", // 이미지를 클릭하면 이동하는 url
		imgUrl: "/" // 이미지 자체의 위치
	},
	{
		title: "배너2",
		url: "/",
		imgUrl: "/"
	},
	{
		title: "배너3",
		url: "/",
		imgUrl: "/"
	}
]

const MainPage = () => {

	return (
		<div style={{ paddingBottom: "106px" }}>
			<Banner BannerImage={BannerImage} />
		</div>
	);
};

export default MainPage;
