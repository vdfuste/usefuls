"use client";

import style from "./style.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const Button = ({ className, label, onClick, type = "button", disabled = false }) => {
	return (
		<input
			className={`${style.button} ${className}`}
			type={type}
			value={label}
			onClick={onClick}
			disabled={disabled} />
	);
};

export const Checkbox = ({ label, checked = false, onChange }) => {
	return (
		<label className={`${style.checkbox} no-select-text`}>
			<input
				type="checkbox"
				name={label}
				checked={checked}
				onChange={onChange} />

			<div className={style.box}>
				<div className={style.check}>
					<FontAwesomeIcon icon={faCheck} />
				</div>
			</div>
			<span htmlFor={label}>{label}</span>
		</label>
	);
};

export const Color = ({ label, value, onChange }) => {
	return (
		<label className={style.color}>
			<input
				type="color"
				value={value}
				onChange={onChange} />
			<span htmlFor={label}>{label}</span>
		</label>
	);
};

export const Text = ({ value, placeholder, onChange, spellCheck = false }) => {
	return (
		<div className={style.text}>
			<input
				type="text"
				value={value}
				placeholder=" "
				onChange={onChange}
				spellCheck={spellCheck} />

			<span className={style.placeholder}>
				{placeholder}
			</span>

			<div className={style.line}>
				<div className={style.fill}></div>
			</div>
		</div>
	);
};

export const TextArea = ({ value, placeholder, onChange, height = "250px", spellCheck = false }) => {
	return (
		<div className={style.text}>
			<textarea
				style={{ height }}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				spellCheck={spellCheck} />
		</div>
	);
};

export const Toggle = ({ label, checked = false, onChange }) => {
	return (
		<label className={`${style.toggle} no-select-text`}>
			<input
				type="checkbox"
				name={label}
				checked={checked}
				onChange={onChange} />

			<div className={style.track}>
				<div className={style.thumb}></div>
			</div>
			<span htmlFor={label}>{label}</span>
		</label>
	);
};

export const Range = ({ className, value, min = 0, max = 100, step = 0.1, onChange }) => {
	const progressStyle = {
		width: `${(value - min)/(max - min) * 100}%`
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

