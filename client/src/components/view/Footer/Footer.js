/* eslint-disable */
import style from "./Footer.module.scss"
import Github from "../../../assets/images/icon/Github_Link.png"
import Inha from "../../../assets/images/icon/INHA.png"
import Blog from "../../../assets/images/icon/Blog.png"

const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={style.contents}>
				<div className={style.shortcut}>
					<a href="https://int-i.github.io/"><img src ={Blog} width='134'alt='blog'/></a>
					<a href="https://github.com/int-i"><img src ={Github} width='80'alt='github'/></a>
					<a href="https://ice.inha.ac.kr/ice/index.do"><img src ={Inha} width='120'alt='inha'/></a>
				</div>
				<div className={style.copyright}>
					Copyright © Inha University int i All Rights Reserved
				</div>
			</div>
		</footer>
	);
}

export default Footer;