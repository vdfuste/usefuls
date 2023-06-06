"use client";

import style from "./page.module.scss";

import { useContext } from "react";
import { I18nContext } from "@/providers/i18n";

const Home = () => {
	const { i18n } = useContext(I18nContext);

	return (
		<section className={style.home}>
			<h1>{i18n.title}</h1>

			<h2>Things the template must have</h2>
			<ol>
				<li>Responsiveness</li>
				<li>Darkmode</li>
				<li>A login form</li>
				<li>A filter component</li>
				<li>One or more contexts</li>
				<li>An end-point ready to call to the database</li>
				<li>Improve I18n select component</li>
				<li>Some layouts</li>
			</ol>
		</section>
	);
};

export default Home;
