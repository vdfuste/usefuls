const toNumber = value => parseFloat(value);

// Calculate Percent
export const calcPercentFromTip = (amount, tip) => !amount || !tip ? "0" : 
	(toNumber(tip) / toNumber(amount) * 100).toFixed(2);

export const calcPercentFromTotal = (amount, total) => !amount || !total ? "0" : 
	(toNumber(calcTipFromTotal(amount, total)) / toNumber(amount) * 100).toFixed(2);

// Calculate Tip
export const calcTipFromPercent = (amount, percent) => !amount || !percent ? "0" : 
	(toNumber(amount) * toNumber(percent) / 100).toFixed(2);

export const calcTipFromTotal = (amount, total) => !amount || !total ? "0" : 
	(toNumber(total) - toNumber(amount)).toFixed(2);

// Calculate Total
export const calcTotalFromTip = (amount, tip) => !amount || !tip ? "0" : 
	(toNumber(amount) + toNumber(tip)).toFixed(2);

export const calcTotalFromPercent = (amount, percent) => !amount || !percent ? "0" : 
	(toNumber(amount) + toNumber(calcTipFromPercent(amount, percent))).toFixed(2);
