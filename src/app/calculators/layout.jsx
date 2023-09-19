import style from "./style.module.scss";

const Calculators = ({ children }) => {
	return (
		<section className={style.calculators}>
			<h1>Calculators Layout</h1>
			{children}
		</section>
	);
};

export default Calculators;
