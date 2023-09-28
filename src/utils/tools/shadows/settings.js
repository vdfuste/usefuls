export const settings = [
	{ type: "range", label: "Offset X: ", property: "offsetX", min: -100 },
	{ type: "range", label: "Offset Y: ", property: "offsetY", min: -100 },
	{ type: "range", label: "Blur Radius: ", property: "blur" },
	{ type: "range", label: "Spread: ", property: "spread" },
	{ type: "color", label: "Color: ", property: "color" },
	{ type: "check", label: "Inset ", property: "inset" },
];

export const defaultShadowStyle = {
	offsetX: 0, offsetY: 12,
	blur: 24, spread: -12,
	color: "#c6c6c6",
	inset: false
};
