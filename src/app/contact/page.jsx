"use client";

import style from "./style.module.scss";

import { useContext } from "react";
import { I18nContext } from "@/providers/i18n";

const Contact = () => {
	const { i18n } = useContext(I18nContext);

	return (
		<section className={style.contact}>
			<h1>{i18n.pages.contact.title}</h1>
		</section>
	);
};

export default Contact;
