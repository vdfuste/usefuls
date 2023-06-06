"use client";

import style from "./style.module.scss";

import { icons } from "@/utils/icons";
import { useState } from "react";

const SideBar = ({ children }) => {
	const [open, setOpen] = useState(false);

	const handleClick = isOpen => setOpen(isOpen);

	return (
		<>
			<div
				className={`${style.clickable} ${open ? style.visible : ""}`}
				onClick={() => handleClick(false)}
			></div>
			<div className={`${style.sidebar} ${open ? style.open : ""}`}>
				<div className={style.header}>
					<div
						className={style.showButton}
						onClick={() => handleClick(!open)}
					>
						<button>{icons.menu[open ? "close" : "open"]}</button>
					</div>
					<div className={style.title}>
						<p>Some title here</p>
					</div>
				</div>
				<div className={style.content}>
					{children}
				</div>
			</div>
		</>
	);
};

export default SideBar;
