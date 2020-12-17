var myURL = "https://api.coindesk.com/v1/bpi/currentprice/";
var codeUrl;
var currCode;
var bitcoinData = [];
var chart;

// Get bitcoin data every 10 seconds
// setInterval(getCoinData, 10000);

$('#hit-me').click(function () {
    bitcoinData = [];       // Reset data
    currCode = "" + document.getElementById("input").value;
    codeUrl = myURL + currCode + "/json";
    createChart();
    setInterval(getCoinData, 10000);
});

function getCoinData() {
    $.ajax({
        url: codeUrl,
        success: function(data) {
            var bc = JSON.parse(data);
            price = bc.bpi[currCode].rate;
            // console.log(price);
            // $('#price').text(price);
            
            if (bitcoinData.length >= 10) {
                // if full, remove first element
                bitcoinData.shift();
            } 

            bitcoinData.push({ time: new Date().getSeconds(), price: price });
            chart.setData(bitcoinData);
        }
    });
}

function createChart() {
    chart = new Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'myfirstchart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: "",
        // The name of the data record attribute that contains x-values.
        xkey: "time",
        // A list of names of data record attributes that contain y-values.
        ykeys: ["price"],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ["price"]
    });
}
