import React, { useEffect, useState } from "react";
import styles from "./PostViewPage.module.scss";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Viewer } from "@toast-ui/react-editor";
import DefaultProfile from "../../../../assets/images/icon/하얀 유저.png";
import test from "../../../temp.json";
import Comment from "../../Comment/Comment";
import Answer from "../../Answer/Answer";
import axios from "axios";

function PostViewPage(props) {
	const [postId, SetPostId] = useState("");
	// const GetParamsId = () => {
	// 	const { params } = props.match;
	// 	SetPostId(params.id);
	// 	console.log(postId);
	// };
	const [post, SetPost] = useState();
	useEffect(() => {
		async function fetchData() {
			await axios.get(`/api/question/oneques/${props.match.params.id}`).then((response) => {
				console.log("response", response.data);
				SetPost(response.data);
			});
		}
		fetchData();
	}, []);
	// 왜인지는 모르겠지만 post가 한동안 undefined가 되어있음 아마 useState의 문제.. 그동안은 빈 div를 리턴하다가 값을찾으면 포스트렌더링
	if (post !== undefined) {
		return (
			<div className={[styles.PostViewContainer, "Spoqa"].join(" ")}>
				<h1>{post.title}</h1>
				<div className={styles.postInfo}>
					<div className={styles.infoLeft}>
						<div>{post.author}</div>
						<div className={styles.verticalLine}> </div>
						<div className={styles.date}>2021.07.26</div>
					</div>
					<div className={[styles.infoRight, "NanumSquare"].join(" ")}>
						<button>수정</button>
						<button>삭제</button>
					</div>
				</div>
				{/* 태그 */}
				<div className={styles.Tags}>
					{test.tags.map((a, i) => {
						return <div className={styles.Tag}>{test.tags[i]}</div>;
					})}
				</div>
				{/* 내용 */}
				<Viewer initialValue={post.contents} />

				{/* 좋아요를 누르기 전과 누른 상태에서 컬러가 달라야함 */}
				<div className={styles.likeContaienr}>
					<button className={styles.likeButton}>❤</button>
					<div className={styles.likeNumber}> 5 </div>
				</div>

				{/* 유저 프로필이 없으면 기본 프로필, 있으면 프로필 사진을 */}
				{test.profile !== "" ? (
					<div className={styles.profileContainer}>
						<img className={styles.profileImage} src={test.profile} alt="profile" />
						<div className={styles.profileName}>{post.author}</div>
					</div>
				) : (
					<div className={styles.defaultProfileContainer}>
						<div className={styles.imageBackground}>
							<img className={styles.defaultImage} src={DefaultProfile} alt="profile" />
						</div>
						<div className={styles.profileName}>{post.author}</div>
					</div>
				)}

				<Comment />
				<Answer />
			</div>
		);
	} else return <div></div>;
}

export default PostViewPage;
