import React, { useState } from "react";
import styles from "./BoardTagMaker.module.scss";

// 태그 관련 메소드 및 State
function BoardTagMaker(props) {
	// 태그 입력창에 작성되는 값
	const [tagValue, SetTagValue] = useState("");

	// 만들어진 태그 배열, SetWrittenTag를 쓸 때 부모에도 전달을 해줘야함
	const [writtenTag, SetWrittenTag] = useState([]);

	const onChangeTag = (event) => {
		SetTagValue(event.target.value);
	};

	const CreateTag = (event) => {
		// 중복 입력을 안받게 서치하는 로직 추가해야함
		if (event.key === "Enter") {
			console.log(`${event.key}가 입력되었습니다`);
			let tempArr = [...writtenTag];
			tempArr.push(tagValue);
			SetWrittenTag(tempArr);
			SetTagValue("");
			props.ReturnTags(tempArr);
		}
	};

	const DeleteTag = (clickedTag) => {
		if (clickedTag !== "") {
			let tempArr = [...writtenTag];
			let tempIndex = tempArr.indexOf(clickedTag);
			tempArr.splice(tempIndex, 1); // 클릭된 값의 인덱스로 값에 접근해 1개만 지운다
			SetWrittenTag(tempArr);
			props.ReturnTags(tempArr);
		}
	};

	return (
		<div className={styles.tagContainer}>
			{writtenTag.map((a, i) => {
				return <Tags text={writtenTag[i]} DeleteTag={DeleteTag} />;
			})}
			<input
				className={styles.tagInput}
				type="text"
				placeholder="태그를 입력하세요"
				value={tagValue}
				onChange={onChangeTag}
				onKeyPress={CreateTag}
			/>
		</div>
	);
}
const Tags = (props) => {
	const ClickTag = (event) => {
		// 이 컴포넌트를 호출한 부모 컴포넌트에게 클릭된 값 정보를 전달하기 위한 이벤트
		props.DeleteTag(props.text);
	};

	if (props.text !== "") {
		return (
			// 작성된 태그가 있을 때만 태그를 렌더링한다
			<div className={styles.Tags} onClick={ClickTag}>
				{props.text}
			</div>
		);
	} else {
		return <div></div>;
	}
};
export default BoardTagMaker;
