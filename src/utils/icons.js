import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowUpRightFromSquare, faBars, faCalculator, faCartShopping, faClone, faCoins, faCopy, faFish, faGlobe, faLayerGroup, faServer, faUserCircle, faWaveSquare } from "@fortawesome/free-solid-svg-icons";

export const icons = {
	user: <Fa icon={faUserCircle} />,
	lang: <Fa icon={faGlobe} />,
	menu: {
		open: <Fa icon={faBars} />,
		close: <Fa icon={faAngleRight} />,
	},
	cart: <Fa icon={faCartShopping} />,
	externalLink: <Fa icon={faArrowUpRightFromSquare} />,
	sidebar: {
		standard: <Fa icon={faCalculator} />,
		tips: <Fa icon={faCoins} />,
		binary: <Fa icon={faServer} />,
		shadow: <Fa icon={faClone} />,
		gradient: <Fa icon={faLayerGroup} />,
		wave: <Fa icon={faWaveSquare} />,
		hooks: <Fa icon={faFish} />,
	},
	copy: <Fa icon={faCopy} />,
};
