import style from "./style.module.scss";

const Calculator = ({ children }) => {
	return (
		<section className={style.calculator}>
			<h1>Calculator Layout</h1>
			{children}
		</section>
	);
};

export default Calculator;
