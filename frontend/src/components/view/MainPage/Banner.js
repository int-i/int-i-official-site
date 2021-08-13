import style from "./MainPage.module.scss";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import banner1 from "../../../assets/images/banner/banner1.png";

const Banner = ({ BannerImage }) => {
	return (
		<Carousel
			className={style.banner}
			arrows={true} // 좌우 이동 화살표 보이게 하는 속성
			prevArrow={<LeftOutlined />} // 왼쪽 화살표 이미지
			nextArrow={<RightOutlined />} // 오른쪽 화살표 이미지
			draggable={true} // 드래그 해서 좌우로 이동할 수 있게 하는 속성
			autoplay={true} // 일정시간 뒤에 자동으로 다음 이미지로 넘어가는 속성
			autoplaySpeed={10000} // 10초 뒤 다음 이미지로 넘어감 (ms 단위)
		>
			{/* 배너 이미지 동적으로 추가할 수 있도록 함수 컴포넌트 추가 */}
			{BannerImage.map(image => {
				return (
					<div>
						<a href={image.url} rel="noreferrer" target="_blank"> {/* 이미지 클릭시 이동할 링크 속성 */}
							<img src={banner1} alt={image.title} /> {/* 배너에 들어갈 이미지 속성(추후 수정 요망) */}
						</a>
					</div>
				);
			})}
		</Carousel>
	);
}

export default Banner;