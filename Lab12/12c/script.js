var counter = 0;

var counterHTML = document.getElementById("counter");

function incrementCounter() {
    counterHTML.innerHTML = "My Counter Value: " + counter;
    counter++;    
}

setInterval(incrementCounter, 3000);