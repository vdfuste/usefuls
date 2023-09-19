"use client";

import { useState } from "react";
import { Fira_Code } from "next/font/google";
import style from "./style.module.scss";

import { icons } from "@/utils/icons";
import { settings, defaultShadowStyle } from "@/utils/tools/shadows/settings";
import { settingsToCSS } from "@/utils/tools/shadows/utils";

const font = Fira_Code({ subsets: ["latin"] });

const range = 200;

const ShadowBtn = ({ value, color = "#c6c6c6", inset, selected = false, onClick }) => {
	return (
		<button
			className={`${style.shadowBtn} ${selected ? style.selected : ""}`}
			style={{ boxShadow: `0px 2px 8px -2px ${color} ${inset ? "inset" : ""}` }}
			onClick={() => onClick()}
		>{value}</button>
	);
};

const ShadowButtons = ({ shadows, shadowId, handleSelectShadow, handleAddShadow }) => {
	return (
		<div className={style.shadowButtons}>
			<ul>
				{console.log("Re-rendering Shadow Buttons")}

				{shadows.map(({ color, inset }, index) => <li key={index}>
					<ShadowBtn
						color={color}
						inset={inset}
						selected={index === shadowId}
						onClick={() => handleSelectShadow(index)} />
				</li>)}
				<li><ShadowBtn value="+" onClick={handleAddShadow} /></li>
			</ul>
		</div>
	);
};

const Input = ({ type, label, value, property, min = -range, handleUpdateShadow }) => {
	return (
		<label>
			<span>{label} {value}</span>
			{type === "range" ?
				<input
					type="range"
					value={value}
					min={min}
					max={range}
					onChange={event => handleUpdateShadow(property, event.target.value)} />
				:
				(type === "checkbox" ?
					<input
						type="checkbox"
						checked={value}
						onChange={() => handleUpdateShadow(property, !value)} />
					:
					<input
						type="color"
						value={value}
						onChange={event => handleUpdateShadow(property, event.target.value)} />
				)
			}
		</label>
	);
};

const ShadowSettings = ({ shadows, shadowId, handleUpdateShadow, handleRemoveShadow }) => {
	return (
		<div className={style.settings}>

			{settings.map(({ type, label, property, min }) =>
				<Input
					key={label}
					type={type}
					label={label}
					property={property}
					value={shadows[shadowId][property]}
					min={min}
					handleUpdateShadow={handleUpdateShadow} />
			)}
			<div>
				<button className={style.deleteBtn} onClick={handleRemoveShadow}>Delete Shadow</button>
			</div>
		</div>
	);
};

const CodeBox = ({ generatedStyle }) => {
	const generateCSS = () => {
		const _style = generatedStyle.split(", ");

		if (_style.length === 1) return <p>
			<span className={style.property}>box-shadow: </span>
			<span className={style.params}>{_style[0]}</span>
			<span>;</span>
		</p>;

		return <>
			<p><span className={style.property}>box-shadow: </span></p>
			{_style.map((s, index) => (
				<p key={index}>
					<span className={style.tab}></span>
					<span className={style.params}>{s}</span>
					<span>{index !== _style.length - 1 ? "," : ";"}</span>
				</p>
			))}
		</>;
	};

	const handleCopyStyle = () => {
		const _style = generatedStyle.search(", ") !== -1 ? "\n\t" + generatedStyle.replace(/, /g, ",\n\t") : generatedStyle;
		navigator.clipboard.writeText(`box-shadow: ${_style};`);
	};

	return (
		<div className={`box ${style.css} ${font.className}`}>
			<button
				className={style.copy}
				onClick={handleCopyStyle}
			>
				{icons.copy}
			</button>
			<div className={style.code}>
				{generateCSS()}
			</div>
		</div>
	);
};

const ShadowEditor = () => {
	const [shadows, setShadows] = useState([{ ...defaultShadowStyle }]);
	const [shadowId, setShadowId] = useState(0);

	const generatedStyle = (() => {
		let _style = "";
		shadows.forEach((shadow, index) => {
			_style += settingsToCSS(shadow);
			if (index !== shadows.length - 1) _style += ", ";
		});

		return _style;
	})();

	const handleUpdateShadow = (property, value) => {
		const _shadows = [...shadows];
		_shadows[shadowId][property] = value;

		setShadows(_shadows);
	};

	const handleAddShadow = () => {
		setShadows([...shadows, { ...defaultShadowStyle }]);
	};

	const handleRemoveShadow = () => {
		if (shadows.length === 1) return;

		const _shadows = [...shadows];
		_shadows.splice(shadowId, 1);

		if (shadowId === _shadows.length) setShadowId(_shadows.length - 1);
		setShadows(_shadows);
	};

	const handleSelectShadow = id => {
		setShadowId(id);
	};

	return (
		<div className={style.shadowEditor}>
			<div className={`box ${style.editor}`}>
				<div className={style.left}>
					<div className={style.thingy} style={{ boxShadow: generatedStyle }}>
					</div>
					<ShadowButtons
						shadows={shadows}
						shadowId={shadowId}
						handleSelectShadow={handleSelectShadow}
						handleAddShadow={handleAddShadow} />
				</div>
				<div className={style.right}>
					<ShadowSettings
						shadows={shadows}
						shadowId={shadowId}
						handleUpdateShadow={handleUpdateShadow}
						handleRemoveShadow={handleRemoveShadow} />
				</div>
			</div>
			<CodeBox generatedStyle={generatedStyle} />
		</div >
	);
};

export default ShadowEditor;
