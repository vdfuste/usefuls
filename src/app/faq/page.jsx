"use client";

import style from "./style.module.scss";

import { useContext } from "react";
import { I18nContext } from "@/providers/i18n";

const FAQ = () => {
	const { i18n } = useContext(I18nContext);

	return (
		<section className={style.faq}>
			<h1>{i18n.pages.faq.title}</h1>
		</section>
	);
};

export default FAQ;