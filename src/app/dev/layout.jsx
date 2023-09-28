import style from "./style.module.scss";

const Dev = ({ children }) => {
	return (
		<section className={style.dev}>
			{children}
		</section>
	);
};

export default Dev;
