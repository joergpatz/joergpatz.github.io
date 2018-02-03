import SunCalc from "suncalc";

export const black = '#000000';
export const white = '#ffffff';
export const grey = '#9b9b9b';
export const gray = grey;

const times = SunCalc.getTimes(new Date(), 51.5, -0.1);
const date = new Date();
const gmtDate = new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000);

//From Dawn Till Dusk
const isLightTheme = gmtDate > times.dawn && gmtDate < times.dusk;

export const background = isLightTheme ? white : black;
export const foreground = isLightTheme ? black : white;
