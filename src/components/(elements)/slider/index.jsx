"use client";

import style from "./style.module.scss";

const Slider = ({ className, min = 0, max = 100, step = 0.1, progress, timelineRef, onChange }) => {
	const progressStyle = {
		width: `${progress}%`
	};

	return (
		<div className={`${style.slider} ${className}`}>
			<div className={style.track}>
				<div className={style.progress} style={progressStyle} />
			</div>
			<input
				type="range"
				ref={timelineRef}
				defaultValue={0}
				min={min} max={max}
				step={step}
				onChange={onChange} />
		</div>
	);
};

export default Slider;
