"use client";

import style from "./style.module.scss";

import { useContext } from "react";
import { I18nContext } from "@/providers/i18n";

const About = () => {
	const { i18n } = useContext(I18nContext);

	return (
		<section className={style.about}>
			<h1>{i18n.pages.about.title}</h1>
		</section>
	);
};

export default About;
