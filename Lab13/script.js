// Converts milliseconds to a readable time String
function convertMillisecondsToTimeFormat(milliseconds) {
    var hours = milliseconds / (1000 * 60 * 60);    // Calculate the number of hours
    var wholeHours = Math.floor(hours);             // Get the whole integer value of the hours
    var hh = "";     
    if (wholeHours > 9) {                           // Convert the whole hours to a string 
        hh = "" + wholeHours;                        
    } else {                                        // If the whole hours is less than 10
        hh = "0" + wholeHours;                       // add a leading 0 to the string
    }

    var minutes = (hours - wholeHours) * 60;        // Repeat process for minutes
    var wholeMinutes = Math.floor(minutes);
    var mm = "";
    if (wholeMinutes > 9) {                           
        mm = "" + wholeMinutes;                        
    } else {                                        
        mm = "0" + wholeMinutes;                       
    }

    var seconds = (minutes - wholeMinutes) * 60;    // Repeat process for seconds
    var wholeSeconds = Math.floor(seconds);
    var ss = "";
    if (wholeSeconds > 9) {                           
        ss = "" + wholeSeconds;                        
    } else {                                        
        ss = "0" + wholeSeconds;                       
    }

    return hh + ":" + mm + ":" + ss;
}

// Flight object
function Flight (airline, number, origin, destination, dep_time, arrival_time, arrival_gate) {
    this.airline = airline;
    this.number = number;
    this.origin = origin;
    this.destination = destination;
    this.dep_time = dep_time;
    this.arrival_time = arrival_time;
    this.arrival_gate = arrival_gate; 
    this.flightTime = convertMillisecondsToTimeFormat(this.arrival_time.getTime() - this.dep_time.getTime());
}

var one = new Flight("Alaska Airlines", 213, "Seattle, WA", "Los Angeles, CA", new Date("November 10, 2020 06:00:00"), 
            new Date("November 10, 2020 09:00:00"), 124);

var two = new Flight("Delta Air Lines", 632, "Everett, WA", "San Francisco, CA", new Date("November 10, 2020 10:00:00"), 
            new Date("November 10, 2020 12:30:00"), 654);

var three = new Flight("Southwest Airlines", 993, "Portland, OR", "Seattle, WA", new Date("November 10, 2020 12:30:00"), 
            new Date("November 10, 2020 13:45:00"), 937);
            
var four = new Flight("United Airlines", 854, "Seattle, WA", "Newark, NY", new Date("November 10, 2020 06:00:00"), 
            new Date("November 10, 2020 11:30:00"), 126);    

var five = new Flight("American Airlines", 298, "Dallas, TX", "Las Vegas, NV", new Date("November 10, 2020 16:30:00"), 
            new Date("November 10, 2020 18:00:00"), 342);

var flightsArray = [one, two, three, four, five];

// Creates a table to display the information of all the 
// flights in the argument array
function createTable(array) {
    let str = "<tr><th>Airline</th><th>Flight Number</th><th>Origin</th><th>Destination</th><th>"
              + "Departure Time</th><th>Arrival Time</th><th>Flight Duration</th><th>Arrival Gate</th></tr>";

    for (let i = 0; i < array.length; i++) {
        str += "<tr><td>" + array[i].airline + "</td><td>" + array[i].number + "</td><td>" + array[i].origin + "</td><td>" 
        + array[i].destination + "</td><td>" + array[i].dep_time + "</td><td>" 
        + array[i].arrival_time + "</td><td>" + array[i].flightTime + "</td><td>" + array[i].arrival_gate + "</td></tr>";
    }

    return str;
}

document.getElementById("terminal_table").innerHTML = createTable(flightsArray);