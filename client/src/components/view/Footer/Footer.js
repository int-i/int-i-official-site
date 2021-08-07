import style from "./Footer.module.scss"

const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={style.contents}>
				<div className={style.shortcut}>
					아이콘 위치
				</div>
				<div className={style.copyright}>
					Copyright © Inha University int i All Rights Reserved
				</div>
			</div>
		</footer>
	);
}

export default Footer;