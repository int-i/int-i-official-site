/* eslint-disable */
// 유저 페이지 중 안 바뀌는 윗부분!

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./User.module.scss";
import user from "../../../../assets/images/icon/하얀 유저.png";

const User = () => {
	const [nickname, SetNickname] = useState("");
	const [name, SetName] = useState("");
	const [studentId, SetStudentId] = useState("");
	const [interest, SetInterest] = useState("");
	const [contact, SetContact] = useState("");

	useEffect(() => {
		axios
			.get("/api/auth/userinfo", {})
			.then(function (response) {
				//console.log(response.data.user);
				SetNickname(response.data.user.nickname);
				SetName(response.data.user.username);
				SetStudentId(response.data.user.studentId);
				SetInterest(response.data.user.privateInterest);
				SetContact(response.data.user.email);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

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

				<label className={styles.button} for="inputFile">
					사진 업로드
				</label>
				<input type="file" id="inputFile" style={{ display: "none" }} />
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
