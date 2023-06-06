import style from "./style.module.scss";

const Select = ({ options, callback }) => {
	return (
		<select
			className={style.select}
			onChange={event => callback(event.target.value)}
		>
			{options.map(opt => <option value={opt.value} key={opt.value}>{opt.label}</option>)}
		</select>
	);
};

export default Select;
