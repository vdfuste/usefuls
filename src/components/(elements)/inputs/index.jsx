"use client";
import style from "./style.module.scss";

export const Button = ({ label, onClick, type = "button", disabled = false }) => {
	return (
		<div className={style.button}>
			<input
				type={type}
				value={label}
				onClick={onClick}
				disabled={disabled} />
		</div>
	);
};

export const Text = ({ value, placeholder, onChange }) => {
	return (
		<div className={style.text}>
			<input
				type="text"
				value={value}
				placeholder=" "
				onChange={onChange} />

			<span className={style.placeholder}>
				{placeholder}
			</span>

			<div className={style.line}>
				<div className={style.fill}></div>
			</div>
		</div>
	);
};

export const TextArea = ({ value, placeholder, onChange, height = "250px" }) => {
	return (
		<div className={style.text}>
			<textarea
				style={{ height }}
				value={value}
				placeholder={placeholder}
				onChange={onChange} />
		</div>
	);
};

export const Range = ({ className, value, min = 0, max = 100, step = 0.1, onChange }) => {
	const progressStyle = {
		width: `${value}%`
	};

	return (
		<div className={`${style.range} ${className}`}>
			<div className={style.track}>
				<div className={style.progress} style={progressStyle} />
			</div>
			<input
				type="range"
				value={value}
				min={min} max={max}
				step={step}
				onChange={onChange} />
		</div>
	);
};
