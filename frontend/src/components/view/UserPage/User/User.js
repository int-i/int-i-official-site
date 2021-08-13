/* eslint-disable */
// 유저 페이지 중 안 바뀌는 윗부분!

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./User.module.scss";
import FormBtn from "../../FormBtn/FormBtn";
import user from "../../../../assets/images/icon/하얀 유저.png";

const User = () => {
	const [nickname, SetNickname] = useState("유저 닉네임");
	const [name, SetName] = useState("유저 이름");
	const [studentId, SetStudentId] = useState("유저 학번");
	const [interest, SetInterest] = useState("웹 개발");
	const [contact, SetContact] = useState("abcde@abcde.com");

	return (
		<div className={styles.user}>
			<div className={styles.userPicture}>
				<img
					src={user}
					style={{
						width: "90px",
						height: "70px",
						marginTop: "18px",
					}}
				/>
			</div>
			<div className={styles.block}>
				<span style={{ fontSize: "25px" }}>{nickname}</span>
				<br />

				<Link to="/ProfileEditPage" className={styles.changeProfile}>
					프로필 정보 변경
				</Link>
				<br />
				<br />

				<FormBtn
					text="사진 업로드"
					width="120px"
					height="34px"
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
							<td className={styles.td}>{name}</td>
						</tr>
						<tr className={styles.tr}>
							<td className={styles.td}>학번</td>
							<td className={styles.td}>{studentId}</td>
						</tr>
						<tr className={styles.tr}>
							<td className={styles.td}>관심 분야</td>
							<td className={styles.td}>{interest}</td>
						</tr>
						<tr className={styles.tr}>
							<td className={styles.td}>연락처</td>
							<td className={styles.td}>{contact}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default User;
