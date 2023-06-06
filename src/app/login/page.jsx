"use client";

import style from "./style.module.scss";

import { useContext } from "react";
import { I18nContext } from "@/providers/i18n";

const Login = () => {
	const { i18n } = useContext(I18nContext);

	return (
		<section className={style.login}>
			{/* <h1>{i18n.pages.login.title}</h1> */}
			<h1>Login</h1>
			<form action="">
				<input type="text" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<input type="submit" value="Login" />
				<div className={style.separator}>
					<span>or</span>
				</div>
				<button className={style.googleBtn}>Login with Google</button>
				<button className={style.facebookBtn}>Login with Facebook</button>
				<button className={style.appleBtn}>Login with Apple</button>
			</form>
		</section>
	);
};

export default Login;
