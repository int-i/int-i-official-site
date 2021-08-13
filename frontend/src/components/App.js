import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./view/Header/Header";
import Footer from "./view/Footer/Footer";
import MainPage from "./view/MainPage/MainPage";
import RegisterPage from "./view/RegisterPage/RegisterPage";
import LoginPage from "./view/LoginPage/LoginPage";
import UserPage from "./view/UserPage/UserPage";
import style from "../assets/style/Layout.module.scss";
import "../assets/style/reset.css";
import "../assets/style/global.scss";

const App = () => {
	return (
		<div className="App">
			<Router>
				<div>
					<Header />
					<div className={style.layout}>
						<Switch>
							<Route
								path="/RegisterPage"
								component={RegisterPage}
							/>
							<Route path="/LoginPage" component={LoginPage} />
							<Route path="/UserPage" component={UserPage} />
							<Route path="/" component={MainPage} />
						</Switch>
					</div>
					<Footer />
				</div>
			</Router>
		</div>
	);
};

export default App;
