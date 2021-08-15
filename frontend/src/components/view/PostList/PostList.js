import styles from "./PostList.module.scss";
import userIcon from "../../../assets/images/icon/회색 유저.png";

const PostList = ({ post }) => {
	return (
		<div className={[styles.postList, "Spoqa"].join(" ")}>
			<div className={styles.title}>{post.title}</div>
			<div className={styles.content}>{post.content}</div>
			<div style={{ marginTop: "50px", marginLeft: "20px" }}>
				{post.tags.map((tag) => (
					<span className={styles.tag}>{tag.tagName}</span>
				))}
			</div>
			<div className={styles.date}>{post.date}</div>
			<div className={styles.author}>
				<img src={userIcon} alt="유저이미지" width="20" />
				{post.author}
			</div>
			<div className={styles.like}>{post.like}</div>
		</div>
	);
};

export default PostList;
