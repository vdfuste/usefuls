import style from "./style.module.scss";

const Calculators = ({ children }) => {
	return (
		<section className={style.calculators}>
			{children}
		</section>
	);
};

export default Calculators;
