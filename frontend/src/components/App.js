import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// 글로벌
import Header from "./view/Header/Header";
import Footer from "./view/Footer/Footer";
import MainPage from "./view/MainPage/MainPage";
import LoginPage from "./view/LoginPage/LoginPage";
import RegisterPage from "./view/RegisterPage/RegisterPage";
// 게시글
import QnAPage from "./view/QnAPage/QnAPage";
import WritePage from "./view/WritePage/WritePage";
import ProfileEditPage from "./view/ProfileEditPage/ProfileEditPage";
import style from "../assets/style/Layout.module.scss";
import TechnicalNews from "./view/TechnicalNews/TechnicalNews";
import PostViewPage from "./view/PostViewPage/PostViewPage";
// 유저
import UserPage from "./view/UserPage/UserPage";
import ProfileEditPage from "./view/ProfileEditPage/ProfileEditPage";
// 스타일
import styles from "../assets/style/Layout.module.scss";
import "../assets/style/global.scss";
import "../assets/style/reset.css";

const App = () => {
	return (
		<div className="App">
			<Router>
				<div>
					<Header />
					<div className={styles.layout}>
						<Switch>
							<Route exact path="/" component={MainPage} />
							<Route path="/LoginPage" component={LoginPage} />
							<Route
								path="/RegisterPage"
								component={RegisterPage}
							/>

							<Route path="/WritePage" component={WritePage} />
							<Route path="/QnAPage" component={QnAPage} />
							<Route
								path="/PostViewPage"
								component={PostViewPage}
							/>
							<Route
								path="/TechnicalNews"
								component={TechnicalNews}
							/>

							<Route path="/UserPage" component={UserPage} />
							<Route
								path="/ProfileEditPage"
								component={ProfileEditPage}
							/>
						</Switch>
					</div>
					<Footer />
				</div>
			</Router>
		</div>
	);
};

export default App;
