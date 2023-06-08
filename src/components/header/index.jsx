import Link from "next/link";
import style from "./style.module.scss";

import { icons } from "@/utils/icons";

const Header = () => {
	return (
		<header className={style.header}>
			<div></div>
			<div className={style.utils}>
				<Link href="/login">{icons.user}</Link>
				<Link href="/login">{icons.cart}</Link>
			</div>
		</header>
	);
};

export default Header;
