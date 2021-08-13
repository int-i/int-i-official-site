import React from "react";
import styles from "./SearchBar.module.scss";
import search from "../../../assets/images/icon/돋보기.png";
function SearchBar(props) {
	return (
		<div className={styles.searchBarContainer}>
			<form onSubmit={props.onSubmit}>
				<input
					className={styles.text}
					type="text"
					placeholder={props.placeholder}
				></input>
				<button className={styles.button}>
					<img src={search} alt="search logo" />
				</button>
			</form>
		</div>
	);
}
export default SearchBar;
