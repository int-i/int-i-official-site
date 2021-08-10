//import { useState } from "react";
import style from "./MainPage.module.scss";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import banner1 from "../../../assets/images/banner/banner1.png";

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
		<div>
			<Carousel
				className={style.banner}
				arrows={true}
				nextArrow={<RightOutlined />}
				prevArrow={<LeftOutlined />}
				draggable={true}
				autoplay={true}
				autoplaySpeed={10000} // ms 단위
			>
				{BannerImage.map(image => {
					return (
						<div>
							<a href={image.url} rel="noreferrer" target="_blank">
								<img src={banner1} alt={image.title} />
							</a>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
}

export default MainPage;