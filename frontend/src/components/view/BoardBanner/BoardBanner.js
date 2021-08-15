import styles from "./BoardBanner.module.scss";
import React from "react";

function BoardBanner(props) {
	return (
		<div className={[styles.BoardBannerContainer, "NanumSquare"].join(" ")}>
			<p>{props.text}</p>
		</div>
	);
}

export default BoardBanner;
