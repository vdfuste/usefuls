import style from "./style.module.scss";

const ToolsLayout = ({ children }) => {
	return (
		<section className={style.tools}>
			<h1>Tools Layout</h1>
			<div>
				{children}
			</div>
		</section>
	);
};

export default ToolsLayout;
