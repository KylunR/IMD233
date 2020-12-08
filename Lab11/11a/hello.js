// Prompt and store response for username and password
var username = prompt("Enter username: ");
var password = prompt("Enter password: ");

// Log the responses to the console
console.log("Username: " + username);
console.log("Password: " + password);

// Update values on screen
document.getElementById("username").innerHTML = "Username: " + username;
document.getElementById("password").innerHTML = "Password: " + password;


