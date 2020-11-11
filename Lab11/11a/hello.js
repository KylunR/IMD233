var username = prompt("Enter username: ");
var password = prompt("Enter password: ");

console.log("Username: " + username);
console.log("Password: " + password);

var username_text = document.getElementById("username");
username_text.textContent = "Username: " + username;

var password_text = document.getElementById("password");
password_text.textContent = "Password: " + password;


