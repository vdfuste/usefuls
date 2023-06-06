import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowUpRightFromSquare, faBars, faCartShopping, faGlobe, faUserCircle } from "@fortawesome/free-solid-svg-icons";

export const icons = {
	user: <FontAwesomeIcon icon={faUserCircle} />,
	lang: <FontAwesomeIcon icon={faGlobe} />,
	menu: {
		open: <FontAwesomeIcon icon={faBars} />,
		close: <FontAwesomeIcon icon={faAngleRight} />,
	},
	cart: <FontAwesomeIcon icon={faCartShopping} />,
	externalLink: <FontAwesomeIcon icon={faArrowUpRightFromSquare} />,
};
