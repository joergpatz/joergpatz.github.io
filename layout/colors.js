import SunCalc from "suncalc";

export const black = '#000000';
export const white = '#ffffff';
export const grey = '#9b9b9b';
export const gray = grey;

const times = SunCalc.getTimes(new Date(), 51.5, -0.1);
const date = new Date();
const gmtDate = new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000);

//From Dusk Till Dawn
const isDarkTheme = gmtDate > times.dusk && gmtDate < times.dawn;

export const background = isDarkTheme ? black : white;
export const foreground = isDarkTheme ? white : black;
