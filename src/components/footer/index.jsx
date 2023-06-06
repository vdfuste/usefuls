import style from "./style.module.scss";

const Footer = () => {
	const Copyright = () => {
		let year = 2023;

		const currentYear = new Date().getFullYear();
		if (currentYear > year) year += " - " + currentYear;

		return <small>{`Copyright © ${year} VDFUSTE. All rights reserved.`}</small>;
	};

	return (
		<footer className={style.footer}>
			<Copyright />
		</footer>
	);
};

export default Footer;
