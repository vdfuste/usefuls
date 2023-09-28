import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.scss";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Icon = ({ icon }) => {
	return (
		<div className={style.icon}>
			<FontAwesomeIcon icon={icon} />
		</div>
	);
};

export default Icon;
