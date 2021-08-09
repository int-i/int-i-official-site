import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import Header from "./view/Header/Header";
import Footer from "./view/Footer/Footer";
import MainPage from "./view/MainPage/MainPage";
import RegisterPage from "./view/RegisterPage/RegisterPage";
import LoginPage from "./view/LoginPage/LoginPage";
import style from "../assets/style/Layout.module.scss"

const Layout = () => {
	return (
		<Router>
			<div>
				<Header />
				<div className={style.layout}>
				<Switch>
					<Route path="/RegisterPage" component={RegisterPage} />
					<Route path="/LoginPage" component={LoginPage} />
					<Route path="/" component={MainPage} />
				</Switch>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default Layout;