let username = "";
let password = "";

function printFormInfo() {
    // Get inputted values for username and password
    username = document.getElementById("usernameForm").value;
    password = document.getElementById("passwordForm").value;

    // Change html text on page to show username and password
    document.getElementById("username").innerHTML = "Username: " + username;
    document.getElementById("password").innerHTML = "Password: " + password;

    // Log the username and password to the console
    console.log("Username: " + username);
    console.log("Password: " + password);
}