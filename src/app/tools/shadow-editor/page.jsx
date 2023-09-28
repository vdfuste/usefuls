"use client";

import { useState } from "react";
import { Fira_Code } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.scss";

import { icons } from "@/utils/icons";
import { settings, defaultShadowStyle } from "@/utils/tools/shadows/settings";
import { settingsToCSS } from "@/utils/tools/shadows/utils";
import { Button as Btn, Color, Range, Text, Toggle } from "@/components/(elements)/inputs";
import Button from "@/components/(elements)/button";
import CodeBox from "@/components/CodeBox";

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

const ShadowSettings = ({ shadows, shadowId, handleUpdateShadow, handleRemoveShadow }) => {
	return (
		<div className={style.settings}>
			<div className={style.row}>
				<div className={style.column}>
					<Text
						placeholder="Offset X"
						value={shadows[shadowId]["offsetX"]}
						onChange={event => handleUpdateShadow("offsetX", event.target.value)} />
					<Range
						value={shadows[shadowId]["offsetX"]}
						min={-range} max={range}
						step={1}
						onChange={event => handleUpdateShadow("offsetX", event.target.value)} />
				</div>
				<div className={style.column}>
					<Text
						placeholder="Offset Y"
						value={shadows[shadowId]["offsetY"]}
						onChange={event => handleUpdateShadow("offsetY", event.target.value)} />
					<Range
						value={shadows[shadowId]["offsetY"]}
						min={-range} max={range}
						step={1}
						onChange={event => handleUpdateShadow("offsetY", event.target.value)} />
				</div>
			</div>
			<div className={style.row}>
				<div className={style.column}>
					<Text
						placeholder="Blur Radius"
						value={shadows[shadowId]["blur"]}
						onChange={event => handleUpdateShadow("blur", event.target.value)} />
					<Range
						value={shadows[shadowId]["blur"]}
						max={range} step={1}
						onChange={event => handleUpdateShadow("blur", event.target.value)} />
				</div>
				<div className={style.column}>
					<Text
						placeholder="Spread"
						value={shadows[shadowId]["spread"]}
						onChange={event => handleUpdateShadow("spread", event.target.value)} />
					<Range
						value={shadows[shadowId]["spread"]}
						min={-range} max={range}
						step={1}
						onChange={event => handleUpdateShadow("spread", event.target.value)} />
				</div>
			</div>
			<div className={style.row}>
				<Toggle
					label="Inset"
					checked={shadows[shadowId]["inset"]}
					onChange={() => handleUpdateShadow("inset", !shadows[shadowId]["inset"])} />

				<Color
					label="Color"
					value={shadows[shadowId]["color"]}
					onChange={event => handleUpdateShadow("color", event.target.value)} />
			</div>
			<div className={style.column}>
				<Btn
					className={style.deleteBtn}
					label={"Delete Shadow"}
					onClick={handleRemoveShadow}
					disabled={shadows.length < 2} />
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

	console.log(generatedStyle);

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
			<h1>Shadow Editor</h1>
			<div className={`box ${style.editor}`}>
				<div className={style.left}>
					<div
						className={style.thingy}
						style={{ boxShadow: generatedStyle }} />

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
			<CodeBox>
				{`box-shadow: ${generatedStyle};`}
			</CodeBox>
		</div >
	);
};

export default ShadowEditor;
