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
<<<<<<< HEAD
import LoginPage from "./view/LoginPage/LoginPage";
import UserPage from "./view/UserPage/UserPage";
import WritePage from "./view/WritePage/WritePage";
import ProfileEditPage from "./view/ProfileEditPage/ProfileEditPage";
import style from "../assets/style/Layout.module.scss";
=======
import QnAWritePage from "./view/QnAPage/WritePage/WritePage";
import QnAPostViewPage from "./view/QnAPage/PostViewPage/PostViewPage";
>>>>>>> 6d4bb51494e1b6f413f00e12524c1a447e3f3e87
import TechnicalNews from "./view/TechnicalNews/TechnicalNews";
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
<<<<<<< HEAD
							<Route
								path="/RegisterPage"
								component={RegisterPage}
							/>
							<Route path="/LoginPage" component={LoginPage} />
							<Route path="/UserPage" component={UserPage} />
							<Route path="/WritePage" component={WritePage} />
							<Route path="/QnAPage" component={QnAPage} />

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
							<Route path="/" component={MainPage} />
=======
							<Route path="/RegisterPage" component={RegisterPage} />
							{/* Q&A 페이지 라우터 (업데이트 추가될거임) */}
							<Route exact path="/QnAPage" component={QnAPage} />
							<Route path="/QnAPage/Write" component={QnAWritePage} />
							<Route path="/QnAPage/PostView/:id" component={QnAPostViewPage} />
							{/* 기술 페이지 라우터 */}
							<Route path="/TechnicalNews" component={TechnicalNews} />

							<Route path="/UserPage" component={UserPage} />
							<Route path="/ProfileEditPage" component={ProfileEditPage} />
>>>>>>> 6d4bb51494e1b6f413f00e12524c1a447e3f3e87
						</Switch>
					</div>
					<Footer />
				</div>
			</Router>
		</div>
	);
};

export default App;
