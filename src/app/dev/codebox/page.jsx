"use client";

import { useState } from "react";
import style from "./style.module.scss";

import CodeBox from "@/components/CodeBox";
import { TextArea } from "@/components/(elements)/inputs";

const defaultText = 
`background-image: linear-gradient(45deg, #4158D0 0%, #C850C0 50%, #FFCC70 100%),
linear-gradient(45deg, #4158D0 0%, #C850C0 50%, #FFCC70 100%);

box-shadow:
    0px 4px 24px -12px #aaa,
    0px 4px 32px -16px #aaa;

box-shadow: 0px 4px 24px -12px #aaa, 0px 4px 32px -16px #aaa;`;

const CodeBoxTest = () => {
	const [text, setText] = useState(defaultText);
	
	return (
		<div className={style.codeBoxTest}>
			<h1>CodeBox testing</h1>
			<div className={`box ${style.text}`}>
				<TextArea
					value={text}
					onChange={event => setText(event.target.value)} />
			</div>
			<CodeBox>
				{text}
			</CodeBox>
		</div >
	);
};

export default CodeBoxTest;
