import Header from "./view/Header/Header";
import Footer from "./view/Footer/Footer";
import style from "../assets/style/Layout.module.scss"

const Layout = () => {
	return (
		<div>
			<Header />
			<div className={style.layout}>
				여기가 메인이 들어올 공간입니다.
			</div>
			<Footer />
		</div>
	);
}

export default Layout