// Prints the prompt to the user and
// returns the response from the user
function getUserInput() {
    var cmd = prompt(
        'Current state: ' + state + 
        '\n\nOptions:' +
        '\nTo start: "run"' +
        '\nTo move to next state: "next"' +
        '\nTo move to previous state: "prev"' + 
        '\nTo stop: "exit" or "quit"' + 
        '\n\nEnter a command: ' , 'next'
    );
    return cmd;
}

var state ="IDLE";
var cmd = "";

do {
    switch (state) {
        case "IDLE":
            if (cmd === "run") {
                state = "S1";
            }
            break;
        case "S1":
            if (cmd === "next") {
                state = "S2";
            } else if (cmd === "skip") {
                state = "S3";
            } else if (cmd === "prev") {
                state = "S4";
            }
            break;
        case "S2":
            if (cmd === "next") {
                state = "S3";
            } else if (cmd === "skip") {
                state = "S4";
            } else if (cmd === "prev") {
                state = "S1";
            }
            break;
        case "S3":
            if (cmd === "next") {
                state = "S4";
            } else if (cmd === "skip") {
                state = "S1";
            } else if (cmd === "prev") {
                state = "S2";
            }
            break;
        case "S4":
            if (cmd === "next") {
                state = "S1";
            } else if (cmd === "skip") {
                state = "S2";
            } else if (cmd === "prev") {
                state = "S3";
            }
            break;
    } 

    cmd = getUserInput();
} while (cmd !== "exit" && cmd !== "quit");

