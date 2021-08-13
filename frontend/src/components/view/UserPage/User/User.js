/* eslint-disable */
// 유저 페이지 중 안 바뀌는 윗부분!

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./User.module.scss";
import FormBtn from "../../FormBtn/FormBtn";

const User = (props) => {
	return (
		<div className={styles.user}>
			<div className={styles.block}>
				<span style={{ fontSize: "20px" }}>유저 닉네임</span>
				<br />

				<Link to="#" className={styles.changeProfile}>
					프로필 정보 변경
				</Link>
				<br />
				<br />

				<FormBtn
					text="사진 업로드"
					width="120px"
					height="30px"
					kind="컬러"
					borderRadius="5px"
					textAlign="center"
				/>
			</div>

			<div className={styles.verticalLine}></div>
			<div className={styles.block}>
				<table>
					<tbody>
						<tr className={styles.tr}>
							<td className={styles.td}>이름</td>
							<td className={styles.td}>유저 이름</td>
						</tr>
						<tr className={styles.tr}>
							<td className={styles.td}>학번</td>
							<td className={styles.td}>유저 학번</td>
						</tr>
						<tr className={styles.tr}>
							<td className={styles.td}>관심분야</td>
							<td className={styles.td}>웹 개발</td>
						</tr>
						<tr className={styles.tr}>
							<td className={styles.td}>연락처</td>
							<td className={styles.td}>abcde@abcde.com</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default User;
