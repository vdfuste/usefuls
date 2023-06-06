import { useContext } from "react";
import Link from "next/link";
import style from "./style.module.scss";

import { I18nContext, LANGS } from "@/providers/i18n";

import { icons } from "@/utils/icons";
import SideBar from "../sidebar";
import Select from "../(elements)/select";

export const Routes = () => {
	const { i18n } = useContext(I18nContext);

	const routes = [
		{ label: i18n.nav.about, url: "/about-us" },
		{ label: i18n.nav.contact, url: "/contact" },
		{ label: i18n.nav.faq, url: "/faq" },
	];

	return <nav className={style.nav}>
		<ul className={style.routes}>
			{routes.map(({ label, url }) =>
				<li key={url}>
					<Link href={url}>{label}</Link>
				</li>
			)}
		</ul>
	</nav>;
};

const Header = () => {
	const langs = [
		{ value: LANGS.EN, label: "EN" },
		{ value: LANGS.ES, label: "ES" },
	];
	const { setLang } = useContext(I18nContext);

	const handleSetLang = lang => {
		setLang(lang);
	};

	return (
		<header className={style.header}>
			<div className={style.icon}>
				<Link href="/">HOME</Link>
			</div>
			<SideBar>
				<Routes />
				<div className={style.utils}>
					<div className={style.lang}>
						<label>{icons.lang}</label>
						<Select options={langs} callback={handleSetLang} />
					</div>
					<Link href="/login">{icons.user}</Link>
					<Link href="/login">{icons.cart}</Link>
				</div>
			</SideBar>
		</header>
	);
};

export default Header;
