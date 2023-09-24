import { Fira_Code } from "next/font/google";
import style from "./style.module.scss";

const codeFont = Fira_Code({ subsets: ["latin"] });

const CodeBox = ({ property, values, type="css" }) => {
	return (
		<div className={style.codebox}>
			<div className={style.header}>
				<div className={style.type}>{type}</div>
				<div className={style.copy}>Copy</div>
			</div>
			<ul className={`${style.code} ${style[type]} ${codeFont.className}`}>
				<li>
					<p>
						<span className={style.property}>{property}: </span>
					</p>
				</li>
				<li>
					<p>
						<span className={style.tab}></span>
						<span className={style.value}>0</span>
						<span className={style.unit}>px</span>
						
						<span className={style.value}> 12</span>
						<span className={style.unit}>px</span>
						
						<span className={style.value}> 24</span>
						<span className={style.unit}>px</span>
						
						<span className={style.value}> -12</span>
						<span className={style.unit}>px</span>
						
						<span className={style.hex}> #c6c6c6</span>
						<span className={style.none}>,</span>
					</p>
				</li>
				<li>
					<p>
						<span className={style.tab}></span>
						<span className={style.value}>0</span>
						<span className={style.unit}>px</span>
						<span className={style.value}> 12</span>
						<span className={style.unit}>px</span>
						<span className={style.value}> 24</span>
						<span className={style.unit}>px</span>
						<span className={style.value}> -12</span>
						<span className={style.unit}>px</span>
						<span className={style.hex}> #c6c6c6</span>
						<span className={style.none}>,</span>
					</p>
				</li>
				<li>
					<p>
						<span className={style.tab}></span>
						<span className={style.value}>0</span>
						<span className={style.unit}>px</span>
						<span className={style.value}> 12</span>
						<span className={style.unit}>px</span>
						<span className={style.value}> 24</span>
						<span className={style.unit}>px</span>
						<span className={style.value}> -12</span>
						<span className={style.unit}>px</span>
						<span className={style.hex}> #c6c6c6</span>
						<span className={style.none}>;</span>
					</p>
				</li>
			</ul>
		</div>
	);
};

export default CodeBox;
