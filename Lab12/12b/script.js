var carsArray = [
    ['Toyota', 'Cambry', 2020, '$24,000'],
    ['Tesla', 'Model 3', 2019, '$40,000'],
    ['Honda', 'Accord', 2003, '$6,500'],
    ['Chevy', 'Impala', 2012, '$11,500'],
    ['Nissan', 'GTR', 2021, '$100,000']
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