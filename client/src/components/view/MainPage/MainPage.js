//import { useState } from "react";
import style from "./MainPage.module.scss";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import banner1 from "../../../assets/images/banner/banner1.png";

const MainPage = () => {
	return (
		<div className={style.banner}>
			<Carousel
			autoplay={true}
			autoplaySpeed={10000} // ms 단위
			>
				<div>
					<a href="/" /*target="_blank"*/>
						<img src={banner1} alt={"인트아이 배너"} style={{ backgroundColor: "black"}} />
					</a>
				</div>
				<div>
					<img src={banner1} alt={"인트아이 배너"} style={{ backgroundColor: "black" }} />
				</div>
			</Carousel>
		</div>
	);
}

export default MainPage;