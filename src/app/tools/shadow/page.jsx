"use client";

import { useEffect, useState } from "react";
import { Fira_Code } from "next/font/google";
import style from "./style.module.scss";
import { icons } from "@/utils/icons";

const font = Fira_Code({ subsets: ["latin"] });

const range = 100;
const defaultShadowStyle = {
	offsetX: 0, offsetY: 12,
	blur: 24, spread: -12,
	color: "#c6c6c6",
	inset: false
};

const settingsToCSS = sh => `${sh.offsetX}px ${sh.offsetY}px ${sh.blur}px ${sh.spread !== "0" ? sh.spread + "px" : ""} ${sh.color}${(sh.inset ? " inset" : "")}`;

const ShadowBtn = ({ value, color = "#c6c6c6", inset, selected = false, onClick }) => {
	return (
		<button
			className={`${style.shadowBtn} ${selected ? style.selected : ""}`}
			style={{ boxShadow: `0px 2px 8px -2px ${color} ${inset ? "inset" : ""}` }}
			onClick={() => onClick()}
		>{value}</button>
	);
};

const ShadowEditor = () => {
	const [shadows, setShadows] = useState([{ ...defaultShadowStyle }]);
	const [shadowId, setShadowId] = useState(0);
	const [settings, setSettings] = useState(shadows[shadowId]);

	const generateStyle = () => {
		let style = "";

		shadows.forEach((shadow, index) => {
			style += settingsToCSS(index !== shadowId ? shadow : settings);
			if (index !== shadows.length - 1) style += ", ";
		});

		return style;
	};

	const generateCSS = () => {

	};

	const handleUpdateSettings = (property, value) => {
		const _settings = { ...settings };
		_settings[property] = value;

		setSettings(_settings);
	};

	const handleAddShadow = () => {
		setShadows([...shadows, { ...defaultShadowStyle }]);
	};

	const handleRemoveShadow = () => {
		if (shadows.length < 2) return;

		const _shadows = [...shadows];
		_shadows.splice(shadowId, 1);
		setShadows(_shadows);
	};

	const handleSelectShadow = id => {
		setShadowId(id);
		setSettings({ ...shadows[id] });
	};

	const handleCopyStyle = () => {
		navigator.clipboard.writeText(`box-shadow: ${generateStyle()};`);
	};

	useEffect(() => {
		const _shadows = [...shadows];
		_shadows[shadowId] = { ...settings };

		setShadows(_shadows);
	}, [settings]);

	return (
		<div className={style.shadowEditor}>
			<div className={`box ${style.editor}`}>
				<div className={style.left}>
					<div className={style.thingy} style={{ boxShadow: generateStyle() }}></div>
					<div className={style.shadowButtons}>
						<ul>
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
				</div>
				<div className={style.right}>
					<div className={style.settings}>
						<div className={style.row}>
							<label htmlFor="offsetX">Offset X: {settings.offsetX}</label>
							<input
								id="offsetX"
								type="range"
								value={settings.offsetX}
								onChange={event => handleUpdateSettings("offsetX", event.target.value)}
								min={-range} max={range} />
						</div>
						<div className={style.row}>
							<label htmlFor="offsetY">Offset Y: {settings.offsetY}</label>
							<input
								id="offsetY"
								type="range"
								value={settings.offsetY}
								onChange={event => handleUpdateSettings("offsetY", event.target.value)}
								min={-range} max={range} />
						</div>
						<div className={style.row}>
							<label htmlFor="blur">Blur: {settings.blur}</label>
							<input
								id="blur"
								type="range"
								value={settings.blur}
								onChange={event => handleUpdateSettings("blur", event.target.value)}
								min="0" max={range} />
						</div>
						<div className={style.row}>
							<label htmlFor="spread">Spread: {settings.spread}</label>
							<input
								id="spread"
								type="range"
								value={settings.spread}
								onChange={event => handleUpdateSettings("spread", event.target.value)}
								min={-range} max={range} />
						</div>
						<div className={style.row}>
							<label htmlFor="color">Color: {settings.color}</label>
							<input
								id="color"
								type="color"
								value={settings.color}
								onChange={event => handleUpdateSettings("color", event.target.value)} />
						</div>
						<div>
							<label htmlFor="inset">
								Inset
							</label>
							<input
								id="inset"
								type="checkbox"
								checked={settings.inset}
								onChange={() => handleUpdateSettings("inset", !settings.inset)} />
						</div>
						<div>
							<button className={style.deleteBtn} onClick={handleRemoveShadow}>Delete Shadow</button>
						</div>
					</div>
				</div>
			</div>
			<div className={`box ${style.css} ${font.className}`}>
				<button
					className={style.copy}
					onClick={handleCopyStyle}
				>
					{icons.copy}
				</button>
				<p className={style.code}>
					<span className={style.property}>box-shadow: </span>
					<span className={style.params}>{generateStyle()}</span>
					<span>;</span>
				</p>
			</div>
		</div>
	);
};

export default ShadowEditor;
