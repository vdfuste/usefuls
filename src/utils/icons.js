import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowUpRightFromSquare, faBars, faCalculator, faCartShopping, faClone, faCoins, faCopy, faFish, faGlobe, faLayerGroup, faServer, faUserCircle, faWaveSquare } from "@fortawesome/free-solid-svg-icons";

export const icons = {
	user: <FontAwesomeIcon icon={faUserCircle} />,
	lang: <FontAwesomeIcon icon={faGlobe} />,
	menu: {
		open: <FontAwesomeIcon icon={faBars} />,
		close: <FontAwesomeIcon icon={faAngleRight} />,
	},
	cart: <FontAwesomeIcon icon={faCartShopping} />,
	externalLink: <FontAwesomeIcon icon={faArrowUpRightFromSquare} />,
	sidebar: {
		standard: <FontAwesomeIcon icon={faCalculator} />,
		tips: <FontAwesomeIcon icon={faCoins} />,
		binary: <FontAwesomeIcon icon={faServer} />,
		shadow: <FontAwesomeIcon icon={faClone} />,
		gradient: <FontAwesomeIcon icon={faLayerGroup} />,
		wave: <FontAwesomeIcon icon={faWaveSquare} />,
		hooks: <FontAwesomeIcon icon={faFish} />,
	},
	copy: <FontAwesomeIcon icon={faCopy} />,
};
