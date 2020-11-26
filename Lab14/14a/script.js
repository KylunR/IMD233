var wx_data = [
    { day: "fri", hi: 82, lo: 55 },
    { day: "sat", hi: 75, lo: 52 },
    { day: "sun", hi: 69, lo: 52 },
    { day: "mon", hi: 69, lo: 48 },
    { day: "tue", hi: 68, lo: 51 }
];

// Adds the high temps for all days in array
function findHighTemperatue(total, num) {
    return total + num.hi;
}

// Adds the low temps for all days in array
function findLowTemperatue(total, num) {
    return total + num.lo;
}

// Adds the high AND low temps for all days in array
function findTotalTemperatue(total, num) {
    return total + num.hi + num.lo;
}

var html = document.getElementById("weather_forecast");
// Print the total temps divided by the length of the array to compute
// averages
html.innerHTML = (
    "High Average: " + (wx_data.reduce(findHighTemperatue, 0) / wx_data.length) + "<br>" + 
    "Low Average: " + (wx_data.reduce(findLowTemperatue, 0) / wx_data.length) + "<br>" +
    "Weekly Average: " + (wx_data.reduce(findTotalTemperatue, 0) / (wx_data.length * 2)) + "<br>"
);