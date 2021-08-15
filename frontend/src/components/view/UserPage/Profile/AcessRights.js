// 권한 컴포넌트

import React, { useState, useEffect } from "react";
import axios from "axios";
import green from "../../../../assets/images/icon/녹색자격증.png";
import gray from "../../../../assets/images/icon/회색자격증.png";

const AcessRights = () => {
	const [auth, SetAuth] = useState(false); // 인증 상태에 따라 권한이 변함

	useEffect(() => {
		axios
			.get("/api/auth/userinfo", {})
			.then(function (response) {
				SetAuth(response.data.isMember);
				//console.log(auth);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	const style = {
		textAlign: "left",
		width: "270px",
		padding: "30px 30px 30px 30px",
		margin: "0px 0px 30px 10px",
		boxShadow: "0px 4px 10px 4px rgba(0, 0, 0, 0.03)",
		borderRadius: "26px",
	};

	const title = {
		fontSize: "17px",
		fontWeight: "bold",
	};

	return (
		<div style={style}>
			<span style={title}>권한</span>
			<br />
			<center>
				{(function () {
					if (auth === true)
						// auth가 true 일때
						return (
							<div>
								<img
									src={green}
									style={{ width: "180px", height: "140px" }}
								/>
								<br />
								<span
									style={{
										color: "#55BB90",
										fontSize: "13px",
									}}
								>
									인트아이 회원 인증 완료! <br />
									게시물 열람 및 작성이 가능합니다
								</span>
							</div>
						);
					if (auth === false)
						// auth가 false 일때
						return (
							<div>
								<img
									src={gray}
									style={{ width: "180px", height: "140px" }}
								/>
								<br />
								<span
									style={{ color: "gray", fontSize: "13px" }}
								>
									인트아이 회원이 아닙니다 <br />
									작성 권한이 없고 일부 게시글
									<br /> 열람이 불가능합니다
								</span>
							</div>
						);
				})()}
			</center>
		</div>
	);
};

export default AcessRights;
