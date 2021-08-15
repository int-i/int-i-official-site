import { useState, useEffect } from "react";
import styles from "./TopButton.module.scss";
import topBtn from "../../../assets/images/icon/TOP버튼.png";

const TopButton = () => {
	const [ScrollY, setScrollY] = useState(0);
	const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태

	const HandleFollow = () => {
		setScrollY(window.pageYOffset);
		if (ScrollY > 100) {
			// 100 이상이면 버튼이 보이게
			setBtnStatus(true);
		}
		else {
			// 100 이하면 버튼이 사라지게
			setBtnStatus(false);
		}
	}

	const HandleTop = () => { // 클릭하면 스크롤이 위로 올라가는 함수
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
		setScrollY(0); // ScrollY 의 값을 초기화
		setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
	}

	useEffect(() => {
		const watch = () => {
			window.addEventListener('scroll', HandleFollow)
		}
		watch();
		return () => {
			window.removeEventListener('scroll', HandleFollow)
		}
	})

	return (
		<div className="wrap">
			<button
				//className={BtnStatus ? "styles.topBtn.active" : "styles.topBtn"} // 버튼 노출 여부
				className={styles.topBtn.active}
				onClick={HandleTop}  // 버튼 클릭시 함수 호출
			><img src={topBtn} width={30} alt={"top 버튼"}/></button>
		</div>
	);
}

export default TopButton;