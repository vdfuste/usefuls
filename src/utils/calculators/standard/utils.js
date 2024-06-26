export const isNaN = operation => {
	return ["NaN", "Infinity"].includes(operation);
};

export const isSign = value => {
	return ["+", "-", "*", "/"].includes(value);
};

export const deleteLastValue = operation => {
	return operation.slice(0, operation.length - 1);
};

export const calculateResult = operation => {
	try {
		return eval(operation).toString();
	}
	catch(error) {
		return operation;
	}
};

const getLastNumber = operation => {
	// Separates the different numbers
	// in the operation and get the last one
	const values = operation.split(/[*/+-]+/);
	return values[values.length - 1];
};

export const signResolver = (operation, value, prevResult) => {
	// Check if the curent operation is empty
	// if so, adds the preview result before the sign
	if (operation === "") return prevResult + value;

	// Get last value in operation
	const last = operation[operation.length - 1];

	// Check if last value is a sign or a period
	// if so, the last sign is deleted
	const result = last === "." || isSign(last) ? deleteLastValue(operation) : operation;
	return result + value;
};

export const periodResolver = (operation, value) => {
	// Check if the curent operation is empty
	// if so, adds a 0 before the period
	if (operation === "") return "0" + value;

	// Get the last value in operation
	const last = operation[operation.length - 1];

	// Check if last value is a sign
	// if so, adds a 0 before the period
	if (isSign(last)) return operation + "0" + value;

	// Get last number of the operation
	const lastNum = getLastNumber(operation);

	// Check if is a decimal searching a period
	// if so, another period is not added
	if (lastNum.includes(".")) return operation;
	
	// if not, adds a new period
	return operation + value;
};

export const numberResolver = (operation, value) => {
	// Get last number of the operation
	
	const lastNum = getLastNumber(operation);
	
	if (parseInt(lastNum) === 0) {
		if(value === 0) return operation;
		return deleteLastValue(operation) + value;
	}

	return operation + value;
};
