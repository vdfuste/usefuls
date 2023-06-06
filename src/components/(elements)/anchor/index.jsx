import Link from "next/link";
import style from "./style.module.scss";

import { icons } from "@/utils/icons";

const Anchor = ({ children, href, external }) => {
	return (
		<Link
			className={style.anchor}
			href={href}
			target={external && "_blank"}
		>
			{children}
			{external && icons.externalLink}
		</Link>
	);
};

export default Anchor;
