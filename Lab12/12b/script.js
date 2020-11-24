var carsArray = [
    ['Toyota', 'Cambry', 2020, 24000],
    ['Tesla', 'Model 3', 2019, 40000],
    ['Honda', 'Accord', 2003, 6500],
    ['Chevy', 'Impala', 2012, 11500],
    ['Nissan', 'GTR', 2021, 100000]
];

let tableBody = document.getElementById("table_body");
let htmlString = "";

// Loop through array
for (let i = 0; i < carsArray.length; i++) {
    
    htmlString += "<tr>"

    // Add array data
    for (let j = 0; j < carsArray[i].length; j++) {
        htmlString += "<td>" + carsArray[i][j] + "</td>";
    }

    htmlString += "</tr>"
}

tableBody.innerHTML = htmlString;