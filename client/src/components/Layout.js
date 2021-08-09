import Header from "./view/Header/Header";
import Footer from "./view/Footer/Footer";
import MainPage from "./view/MainPage/MainPage";
import style from "../assets/style/Layout.module.scss"

const Layout = () => {
	return (
		<div>
			<Header />
			<div className={style.layout}>
				<MainPage />
			</div>
			<Footer />
		</div>
	);
}

export default Layout;