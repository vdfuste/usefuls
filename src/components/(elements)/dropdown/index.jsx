import { useState } from "react";
import style from "./style.module.scss";

const Dropdown = ({ label, options }) => {
	const [optionId, setOptionId] = useState(0);

	return (
		<div id={`label_${label}`} className={style.dropdown}>
			<label htmlFor={`label_${label}`}>{label}</label>
			<p>{options[optionId]}</p>

			<select>
				{options.map((option, index) => (
					<option value={option} key={option + index}
					//onClick={() => setOptionId(index)}
					>{option}</option>
				))}
			</select>
		</div>
	);
};

export default Dropdown;
