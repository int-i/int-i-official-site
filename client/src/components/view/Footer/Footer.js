import style from "./Footer.module.scss"

const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={style.contents}>
				<h2 className={style.title}>
					Copyright © Inha University int i All Rights Reserved
				</h2>
			</div>
		</footer>
	);
}

export default Footer;