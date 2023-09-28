import style from "./style.module.scss";

const Button = ({ className, children, onClick, disabled }) => {
	const handleClick = () => {
		if(!disabled) onClick();
	};
	
	return (
		<button
			className={`${className} ${style.button}`}
			onClick={handleClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;
