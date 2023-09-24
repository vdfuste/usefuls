export const settingsToCSS = sh => `${sh.offsetX}px ${sh.offsetY}px ${sh.blur}px ${sh.spread !== "0" ? sh.spread + "px" : ""} ${sh.color}${(sh.inset ? " inset" : "")}`;
