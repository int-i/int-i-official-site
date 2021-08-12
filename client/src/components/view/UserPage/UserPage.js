// 유저 페이지

import React, { useState } from "react";
import styles from "./UserPage.module.scss";
import User from "./User/User";
import Profile from "./Profile/Profile";
import WrittenComment from "./WrittenComment/WrittenComment";
import WrittenPost from "./WrittenPost/WrittenPost";

const UserPage = () => {
	const [menu, SetMenu] = useState(1);

	const OnClickProfile = () => {
		SetMenu(1);
	};

	const OnClickPost = () => {
		SetMenu(2);
	};

	const OnClickComment = () => {
		SetMenu(3);
	};

	return (
		<div style={{ backgroundColor: "#FAFDFF" }}>
			<center>
				<User />

				<div className={styles.stylee}>
					<button
						type="button"
						onClick={OnClickProfile}
						className={(function () {
							if (menu === 1) return styles.clickButton;
							else return styles.button;
						})()}
					>
						프로필
					</button>

					<button
						type="button"
						onClick={OnClickPost}
						className={(function () {
							if (menu === 2) return styles.clickButton;
							else return styles.button;
						})()}
					>
						작성한 게시물
					</button>

					<button
						type="button"
						onClick={OnClickComment}
						className={(function () {
							if (menu === 3) return styles.clickButton;
							else return styles.button;
						})()}
					>
						작성한 댓글
					</button>

					<button type="button" className={styles.lineButton}>
						투명한 글자
					</button>
				</div>

				{(function () {
					if (menu === 1) return <Profile />;
					if (menu === 2) return <WrittenPost />;
					if (menu === 3) return <WrittenComment />;
				})()}
			</center>
		</div>
	);
};

export default UserPage;
