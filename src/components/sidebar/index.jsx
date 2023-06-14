"use client";
import { useState } from "react";
import Link from "next/link";
import { Fira_Code } from "next/font/google";
import style from "./style.module.scss";

import { icons } from "@/utils/icons";

const font = Fira_Code({ subsets: ["latin"] });

const Routes = () => {
	const routes = [
		{
			title: "Calculators",
			items: [
				{ label: "Standard", url: "/calculators/standard", icon: icons.sidebar.standard },
				{ label: "Tips", url: "/calculators/tips", icon: icons.sidebar.tips },
				{ label: "Binary", url: "/calculators/binary", icon: icons.sidebar.binary },
			]
		},
		{
			title: "Tools",
			items: [
				{ label: "Shadows Editor", url: "/tools/shadows-editor", icon: icons.sidebar.shadow },
				{ label: "Gradient Editor", url: "/tools/gradient-editor", icon: icons.sidebar.gradient },
				{ label: "Sine Wave Editor", url: "/tools/wave-editor", icon: icons.sidebar.wave },
			]
		},
		{
			title: "Miscellaneous",
			items: [
				{ label: "Hooks", url: "/misc/hooks", icon: icons.sidebar.hooks },
			]
		},
	];

	return <nav className={style.nav}>
		<ul className={style.routes}>
			{routes.map(({ title, items }) => (
				<li key={title}>
					<h2>{title}</h2>
					<ul>
						{items.map(({ label, url, icon }) => (
							<li key={label}>
								<Link href={url}>
									<i>{icon}</i>
									<span>{label}</span>
								</Link>
							</li>
						))}
					</ul>
				</li>
			))}
		</ul>
	</nav>;
};

const SideBar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = isOpen => setOpen(isOpen);

	return (
		<div className={`${style.sidebar} ${open ? style.collapsed : ""}`}>
			<div className={style.header}>
				<div className={style.title}>
					<h1 className={font.className}><Link href="/">useFuls()</Link></h1>
				</div>
				<div
					className={style.showButton}
					onClick={() => handleClick(!open)}
				>
					<button>{icons.menu[open ? "close" : "open"]}</button>
				</div>
			</div>
			<div className={style.content}>
				<Routes />
			</div>
		</div>
	);
};

export default SideBar;
