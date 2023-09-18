"use client";

import { useState } from "react";
import { Fira_Code } from "next/font/google";
import style from "./style.module.scss";
import { icons } from "@/utils/icons";

const font = Fira_Code({ subsets: ["latin"] });

const GradientTypes = {
	LINEAR: "linear-gradient",
	RADIAL: "radial-gradient",
	CONIC: "conic-gradient",
};

const defaultGradienStyle = {
	type: GradientTypes.LINEAR,
	transform: 45,
	points: [
		{ color: "#4158D0", position: 0 },
		{ color: "#C850C0", position: 50 },
		{ color: "#FFCC70", position: 100 },
	],
};

const gradientToCSS = gr => {
	let points = "";

	gr.points.forEach(({ color, position }) => {
		points += `, ${color} ${position}%`;
	});

	switch (gr.type) {
		default:
		case GradientTypes.LINEAR:
			return `${gr.type}(${gr.transform}deg${points})`;

		case GradientTypes.RADIAL:
			return "";

		case GradientTypes.CONIC:
			return "";
	}

};

const CodeBox = ({ generatedStyles }) => {
	const generateCSS = () => {
		const _style = generatedStyles.split(", ");

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
		const _style = generatedStyles.search(", ") !== -1 ? "\n\t" + generatedStyles.replace(/, /g, ",\n\t") : generatedStyles;
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

const GradientBtn = ({ value, generatedStyle, selected = false, onClick }) => {
	return (
		<button
			className={`${style.gradientBtn} ${selected ? style.selected : ""}`}
			style={{ backgroundImage: gradientToCSS(generatedStyle) }}
			onClick={() => onClick()}
		>{value}</button>
	);
};

const GadientButtons = ({ gradients, gradientId, handleSelectGradient, handleAddGradient }) => {
	return (
		<ul>
			{gradients.map((gr, index) => <li key={index}>
				<GradientBtn
					selected={index === gradientId}
					onClick={() => handleSelectGradient(index)} />
			</li>)}
		</ul>
	);
};

const GradientEditor = () => {
	const [meh, setMeh] = useState(true);

	const [gradients, setGradients] = useState([{ ...defaultGradienStyle }]);
	const [gradientId, setGradientId] = useState(0);
	// const [settings, setSettings] = useState(gradients[gradientId]);

	const generatedStyle = (() => {
		let _style = "";

		gradients.forEach((gradient, index) => {
			_style += gradientToCSS(gradient);
			if (gradients.length - 1 !== index) _style += ", ";
		});

		return _style;
	})();

	const handleUpdateGradient = (property, value) => {
		const _gradients = [...gradients];
		_gradients[gradientId][property] = value;

		setGradients(_gradients);
	};

	const handleUpdateGradientPoint = (pointIndex, property, value) => {
		const _gradients = [...gradients];
		_gradients[gradientId].points[pointIndex][property] = value;

		setGradients(_gradients);
	};

	const handleAddGradient = () => {
		setGradients([...gradients, { ...defaultGradienStyle }]);
	};

	const handleAddGradientPoint = () => {
		if (gradients[gradientId].points.length === 8) return;

		const _gradients = [...gradients];
		const points = _gradients[gradientId].points;

		points.push({ color: "#56A2F6", position: 100 });

		const len = points.length - 1;
		for (let i = 0; i < len; i++) points[i].position = ((100 / len) * i).toFixed(0);

		setGradients(_gradients);
	};

	const handleRemoveGradientPoint = index => {
		if (gradients[gradientId].points.length === 1) return;

		const _gradients = [...gradients];
		_gradients[gradientId].points.splice(index, 1);

		setGradients(_gradients);
	};

	const handleSelectType = value => {
		const _gradients = [...gradients];
		_gradients[gradientId].type = value;

		console.log(value);

		setGradients(_gradients);
	};

	/*const handleSelectColor = id => {
		setGradientId(id);
		// setSettings({ ...gradients[id] });
	};*/

	return (
		<div className={style.gradientEditor}>
			<div className={`box ${style.editor}`}>
				<div className={style.left}>
					<div className={style.gradient} style={{ backgroundImage: generatedStyle }}></div>
				</div>
				<div className={style.right}>
					<div className={style.settings}>
						<div className="row">
							<label htmlFor="lineal">
								<input
									type="radio"
									id="lineal"
									name="gradient"
									value={GradientTypes.LINEAR}
									checked={gradients[gradientId].type === GradientTypes.LINEAR}
									onChange={event => handleSelectType(event.target.value)}
								/>
								Linear
							</label>
							<label htmlFor="radial">
								<input
									type="radio"
									id="radial"
									name="gradient"
									value={GradientTypes.RADIAL}
									checked={gradients[gradientId].type === GradientTypes.RADIAL}
									onChange={event => handleSelectType(event.target.value)}
								/>
								Radial
							</label>
							<label htmlFor="conic">
								<input
									type="radio"
									id="conic"
									name="gradient"
									value={GradientTypes.CONIC}
									checked={gradients[gradientId].type === GradientTypes.CONIC}
									onChange={event => handleSelectType(event.target.value)}
								/>
								Conic
							</label>
						</div>
						<div>
							<label htmlFor="transform">Transform: {gradients[gradientId].transform} degrees</label>
							<input
								id="transform"
								type="range"
								value={gradients[gradientId].transform}
								onChange={event => handleUpdateGradient("transform", event.target.value)}
								min={-180} max={180} />
						</div>
						<div>
							{gradients[gradientId].points.map((point, index) => {
								return <div className={style.row} key={index}>
									<input
										type="color"
										value={point.color}
										onChange={event => handleUpdateGradientPoint(index, "color", event.target.value)} />

									<input
										type="range"
										value={point.position}
										onChange={event => handleUpdateGradientPoint(index, "position", event.target.value)}
										min={0} max={100} />

									<p>{point.position}%</p>
									<div onClick={() => handleRemoveGradientPoint(index)}>X</div>
								</div>;
							})}
							<button onClick={handleAddGradientPoint}>Add color</button>
						</div>
					</div>
				</div>
			</div>
			{/* <CodeBox generatedStyles={generatedStyles} /> */}
		</div >
	);
};

export default GradientEditor;
