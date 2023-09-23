import style from "./style.module.scss";

const ToolsLayout = ({ children }) => {
	return (
		<section className={style.tools}>
			{children}
		</section>
	);
};

export default ToolsLayout;
