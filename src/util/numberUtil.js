import dayjs from "dayjs";

export const roundToNumber = (number, roundNum) => {
    return +(Math.round(number + `e+${roundNum}`) + `e-${roundNum}`);
}; 

export const formatCurrency = (num) => {
    if (num < 1e3) return num;
    if (num >= 1e3 && num < 1e6) return +(num / 1e3).toFixed(2) + "K";
    if (num >= 1e6 && num < 1e9) return +(num / 1e6).toFixed(2) + "M";
    if (num >= 1e9 && num < 1e12) return +(num / 1e9).toFixed(2) + "B";
    if (num >= 1e12) return +(num / 1e12).toFixed(1) + "T";
};

export const timeConverter = (t) => {
    return dayjs(t).$d.toLocaleDateString('en-us', { month:"short", day:"numeric"});
}

export const UnixConverter = (t) => {
    return dayjs.unix(t).$d.toLocaleDateString('en-us', { month:"short", day:"numeric"});
}