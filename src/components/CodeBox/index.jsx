import React from "react";
import { Fira_Code } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.scss";

import Button from "../(elements)/button";

const codeFont = Fira_Code({ subsets: ["latin"] });

const CodeBox = ({ children, type="css" }) => {
	
	const formatedCode = text => {
		const codeData = [];
		const lines = text.split(";");

		lines.forEach(line => {
			if(!line.length) return;
			
			const [property, params] = line.split(":");
			const _line = {
				property: property.trim(),
				params: [],
			};
			const isFunc = params.includes("(");
			const paramSplit = isFunc ? ")," : ",";
			
			params
				.replace(")", "))")
				.split(paramSplit)
				.forEach(param => {
					if(isFunc) {
						const startValues = param.indexOf("(");
						const endValues = param.indexOf(")");

						_line.params.push({
							nameFunc: param.slice(0, startValues).trim(),
							values: param.slice(startValues + 1, endValues).split(", "),
						});
					}
					else _line.params.push(param.trim().split(" "));
				});

			codeData.push(_line);
		});

		return codeData;
	};

	const handleCopyStyle = () => {
		const _style = generatedStyle.search(", ") !== -1 ? "\n\t" + generatedStyle.replace(/, /g, ",\n\t") : generatedStyle;
		navigator.clipboard.writeText(`box-shadow: ${_style};`);
	};
	
	return (
		<div className={style.codebox}>
			<div className={style.header}>
				{/*
				<div className={style.type}>{type}</div>
				<Button
					className={style.copy}
					onClick={handleCopyStyle}
				>
					<FontAwesomeIcon icon={faCopy} />
				</Button>
				*/}
			</div>
			<div className={`${style.code} ${style[type]} ${codeFont.className}`}>
				<pre>{formatedCode(children)
					.map(({ property, params }, index, array) => {
						return (
							<ul key={"params_" + index}>
								<li>
									<span className={style.property}>{property}: </span>
								</li>
								{params.map((param, pIndex, pArray) => {
									return (
										<li key={"param_" + pIndex}>
											{param.nameFunc ? 
												<>
													<span className={style.tab}>{"\t"}</span>
													<span>{param.nameFunc + "("}</span>
													<span>{param.values}</span>
													<span>{")"}</span>
												</> : 
												<>
													<span className={style.tab}>{"\t"}</span>
													{param.map((value, i, {length}) => {
														return (
															<React.Fragment key={"values_" + i}>
																{isNaN(value[0]) && value[0] !== "-" ?
																	<span className={style.hex}>{value}</span>:
																	<>
																		<span className={style.value}>{value.match(/-/g)}</span>
																		<span className={style.value}>{value.match(/\d+/g)}</span>
																		<span className={style.unit}>{value.match(/[a-z]+/g)}</span>
																	</>
																}
																<span className={style.none}>
																	{i === length - 1 ? 
																		pArray.length - 1 === pIndex ? ";" : "," : " "
																	}
																</span>
															</React.Fragment>
														);
													})}
												</>
											}</li>
									);
								})}
								<li>
									<br />
								</li>
							</ul>
						);
					})
				}</pre>
			</div>
		</div>
	);
};

export default CodeBox;

/*<ul className={`${style.code} ${style[type]} ${codeFont.className}`}>
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
</ul>*/
