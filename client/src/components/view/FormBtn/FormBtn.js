import React from "react";
import styles from "./FormBtn.module.scss";

function FormBtn(props) {
	return (
		<button
			type={props.type}
			form={props.form}
			className={[
				props.kind === "컬러" ? styles.filledBtn : styles.lineBtn,
				"NanumSquare",
			].join(" ")}
			style={{
				width: props.width,
				height: props.height,
				fontSize: props.fontSize,
				borderRadius: props.borderRadius,
				margin: props.margin,
			}}
			onClick={props.onClick}
		>
			{props.text}
		</button>
	);
}

export default FormBtn;
