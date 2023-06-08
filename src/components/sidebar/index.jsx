"use client";
import { useState } from "react";
import Link from "next/link";
import style from "./style.module.scss";

import { icons } from "@/utils/icons";

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
				{ label: "Shadow Editor", url: "/tools/shadow", icon: icons.sidebar.shadow },
				{ label: "Sine Function Editor", url: "/tools/sin-cos", icon: icons.sidebar.sine },
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
					<h1><Link href="/">useFuls( )</Link></h1>
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
