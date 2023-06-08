"use client";

import { useState } from "react";
import { Fira_Code } from "next/font/google";
import style from "./style.module.scss";

const font = Fira_Code({ subsets: ["latin"] });

const ShadowEditor = () => {
	const [offsetX, setOffsetX] = useState(0);
	const [offsetY, setOffsetY] = useState(12);
	const [blur, setBlur] = useState(24);
	const [spread, setSpread] = useState(-12);
	const [color, setColor] = useState("#c6c6c6");
	const [inset, setInset] = useState(false);

	const boxShadow = `${offsetX}px ${offsetY}px ${blur}px${spread ? ` ${spread}px` : ""} ${color}${inset ? " inset" : ""}`;

	const shadowStyle = { boxShadow };

	const range = 100;

	return (
		<div className={style.shadowEditor}>
			<div className={`box ${style.editor}`}>
				<div className={style.left}>
					<div className={style.thingy} style={shadowStyle}></div>
				</div>
				<div className={style.right}>
					<div className={style.settings}>
						<div className={style.row}>
							<label htmlFor="offsetX">Offset X: {offsetX}</label>
							<input
								id="offsetX"
								type="range"
								value={offsetX}
								onChange={event => setOffsetX(event.target.value)}
								min={-range} max={range} />
						</div>
						<div className={style.row}>
							<label htmlFor="offsetY">Offset Y: {offsetY}</label>
							<input
								id="offsetY"
								type="range"
								value={offsetY}
								onChange={event => setOffsetY(event.target.value)}
								min={-range} max={range} />
						</div>
						<div className={style.row}>
							<label htmlFor="blur">Blur: {blur}</label>
							<input
								id="blur"
								type="range"
								value={blur}
								onChange={event => setBlur(event.target.value)}
								min="0" max={range} />
						</div>
						<div className={style.row}>
							<label htmlFor="spread">Spread: {spread}</label>
							<input
								id="spread"
								type="range"
								value={spread}
								onChange={event => setSpread(event.target.value)}
								min={-range} max={range} />
						</div>
						<div className={style.row}>
							<label htmlFor="color">Color: {color}</label>
							<input
								id="color"
								type="color"
								value={color}
								onChange={event => setColor(event.target.value)} />
						</div>
						<div>
							<label htmlFor="inset">
								Inset .
								<input
									id="inset"
									type="checkbox"
									checked={inset}
									onChange={() => setInset(!inset)} />
							</label>

						</div>
					</div>
				</div>
			</div>
			<div className={`box ${style.css} ${font.className}`}>
				<p>box-shadow: {boxShadow};</p>
			</div>
		</div>
	);
};

export default ShadowEditor;
