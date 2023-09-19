import { Fira_Code } from "next/font/google";
import style from "./style.module.scss";

import { defaultShadowStyle } from "@/utils/tools/shadows/settings";

import CodeBox from "@/components/CodeBox";

const font = Fira_Code({ subsets: ["latin"] });

const FalseTips = () => {
	const shadows = [
		{...defaultShadowStyle},
		{...defaultShadowStyle},
		{...defaultShadowStyle},
	];

	console.log(shadows);
	
	return (
		<div className={style.meh}>
			<CodeBox property="box-shadow" values={shadows} />
		</div >
	);
};

export default FalseTips;
