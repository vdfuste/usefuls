"use client";

import { useState } from "react";
import { Fira_Code } from "next/font/google";
import style from "./style.module.scss";

import { icons } from "@/utils/icons";
import { calculateResult, deleteLastValue, isNaN, numberResolver, periodResolver, signResolver } from "@/utils/calculators/standard/utils";

const codeFont = Fira_Code({ subsets: ["latin"] });

const ButtonType = {
	DELETE: "delete",
	EQUAL: "equal",
	NUMBER: "number",
	PARENTHESIS: "parenthesis",
	PERIOD: "period",
	REMOVE: "remove",
	SIGN: "sign",
}; 

const CalcButton = ({ value, label, type, operation, result, setOperation, setResult }) => {	
	const handleClick = () => {
		setOperation(prev => {
			switch(type) {
				case ButtonType.DELETE:
					setResult("0");	
					return "";
				
				case ButtonType.PERIOD:
					return periodResolver(prev, value);
				
				case ButtonType.EQUAL: {
					const result = calculateResult(prev);
					if(result === prev)	return prev;

					setResult(result);
					return "";
				}

				case ButtonType.REMOVE:
					if(operation === "") {
						setResult("0");		
						return deleteLastValue(result);
					}
					
					if (isNaN(prev)) return "";
					return deleteLastValue(prev);

				case ButtonType.SIGN:
					return signResolver(prev, value, result);

				default:
				case ButtonType.NUMBER:
					return numberResolver(prev, value);
			}
		});
	};
	
	return (
		<button
			className={`${style.button} ${style[type]}`}
			onClick={handleClick}
		>
			{label}
		</button>
	);
};

const StandardCalc = () => {
	const [operation, setOperation] = useState("");
	const [result, setResult] = useState("0");
	
	const buttons = [
		{ value: "delete", type: ButtonType.DELETE },
		{ value: "remove", type: ButtonType.REMOVE },
		{ value: "(", type: ButtonType.PARENTHESIS },
		{ value: ")", type: ButtonType.PARENTHESIS },
		
		{ value: 7, type: ButtonType.NUMBER },
		{ value: 8, type: ButtonType.NUMBER },
		{ value: 9, type: ButtonType.NUMBER },
		{ value: "/", label: "÷", type: ButtonType.SIGN },
		
		{ value: 4, type: ButtonType.NUMBER },
		{ value: 5, type: ButtonType.NUMBER },
		{ value: 6, type: ButtonType.NUMBER },
		{ value: "*", label: "x", type: ButtonType.SIGN },
		
		{ value: 1, type: ButtonType.NUMBER },
		{ value: 2, type: ButtonType.NUMBER },
		{ value: 3, type: ButtonType.NUMBER },
		{ value: "-", type: ButtonType.SIGN },
		
		{ value: ".", type: ButtonType.PERIOD },
		{ value: 0, type: ButtonType.NUMBER },
		{ value: "=", type: ButtonType.EQUAL },
		{ value: "+", type: ButtonType.SIGN },
	];
	
	return (
		<div className={style.standardCalc}>
			<div className={`box ${style.calculator}`}>
				<div className={`${style.result} ${codeFont.className}`}>
					{operation ?
						(operation).replace("*", "x").replace("/", "÷") :
						"R:" + result
					}
				</div>
				<div className={style.buttons}>
					{buttons.map((button) =>
						<CalcButton
							value={button.value}
							label={button?.label || button.value}
							type={button.type}
							operation={operation}
							result={result}
							setOperation={setOperation}
							setResult={setResult}
							key={button.value} />
					)}
				</div>
			</div>
		</div>
	);
};

export default StandardCalc;
