"use client";

import { useState } from "react";
import { Fira_Code } from "next/font/google";
import style from "./style.module.scss";

import { calcPercentFromTip, calcPercentFromTotal, calcTipFromPercent, calcTipFromTotal, calcTotalFromPercent, calcTotalFromTip } from "@/utils/calculators/tips";
import { Range, Text } from "@/components/(elements)/inputs";

const font = Fira_Code({ subsets: ["latin"] });

const TipsCalc = () => {
	const [data, setData] = useState({
		amount: "250.00",
		percent: "15.00",
		tip: "37.50",
		total: "287.50",
	});

	const { amount, percent, tip, total } = data;

	const handleChange = (event, key) => {
		const { value } = event.target;
		
		setData(() => {
			switch(key) {
				case "amount": return {
					amount: value,
					percent: percent,
					tip: calcTipFromPercent(value, percent),
					total: calcTotalFromTip(value, tip),
				};
				case "percent": return {
					amount: amount,
					percent: value,
					tip: calcTipFromPercent(amount, value),
					total: calcTotalFromPercent(amount, value),
				};
				case "tip": return {
					amount: amount,
					percent: calcPercentFromTip(amount, value),
					tip: value,
					total: calcTotalFromTip(amount, value),
				};
				case "total": return {
					amount: amount,
					percent: calcPercentFromTotal(amount, value),
					tip: calcTipFromTotal(amount, value),
					total: value,
				};
			}
		});
	};

	return (
		<div className={style.tipsCalc}>
			<h1>Tips Calculator</h1>
			<div className={`box ${style.tips}`}>
				<div className={style.row}>
					<Text
						value={amount}
						placeholder="Amount"
						onChange={event => handleChange(event, "amount")} />
				</div>
				<div className={style.column}>
					<div className={style.row}>
						<Text
							value={percent}
							placeholder="Tip (%)"
							onChange={event => handleChange(event, "percent")} />
						
						<Text
							value={tip}
							placeholder="Tip ($)"
							onChange={event => handleChange(event, "tip")} />
					</div>
					<Range
						value={percent}
						step={1}
						onChange={event => handleChange(event, "percent")} />
				</div>
				<div className={style.row}>
					<Text
						value={total}
						placeholder="Total"
						onChange={event => handleChange(event, "total")} />
				</div>
			</div>
		</div >
	);
};

export default TipsCalc;
