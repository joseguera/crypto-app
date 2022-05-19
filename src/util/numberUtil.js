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
    var a = new Date(t * 1000);
    var today = new Date();
    var yesterday = new Date(Date.now() - 86400000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    if (a.setHours(0,0,0,0) === today.setHours(0,0,0,0))
        return 'today, ' + hour + ':' + min;
    else if (a.setHours(0,0,0,0) === yesterday.setHours(0,0,0,0))
        return 'yesterday, ' + hour + ':' + min;
    else if (year === today.getFullYear())
        return month + ' ' + date;
    else
        return month + ' ' + date;
}