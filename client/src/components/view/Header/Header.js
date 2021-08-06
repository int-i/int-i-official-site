import logo from "../../../assets/images/logo/logo.png";
import style from "../../../assets/style/partials/Header.module.scss"

const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.contents}>
				<div>
					<img src={logo}
					width="48"
					heigh="48"
					alt="인트아이 로고" /> 로고 자리
				</div>

				<nav className={style.navigation}>
					<ul>
						<li>
							코드 저장소
						</li>
						<li>
							질문
						</li>
						<li>
							기술 뉴스
						</li>
						<li>
							정보 및 홍보
						</li>
						<li>
							공지사항
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header