import logo from "../../../assets/images/logo/logo.png";
import styles from "../../../assets/style/partials/Header.scss"

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.content}>
				<div>
					<img
					src={logo}
					width="48"
					height="48"
					alt="인트아이 로고" />
					인트아이
				</div>

				<nav className={styles.navigation}>
					<ul>
						<li>
							메뉴1
						</li>
						<li>
							메뉴2
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;