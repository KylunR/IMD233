// var todos = document.querySelector("ul");

var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++) {
    // console.log(this.id);
    lis[i].addEventListener("mouseover", function(event) {
        console.log("mouseover");
        event.target.id = 'selected';
        event.target.innerHTML = "Focused!";
    });

    lis[i].addEventListener("mouseout", function(event) {
        console.log("mouseout");
        event.target.id = 'deselected';
        event.target.innerHTML = "Not focused";
    });

    lis[i].addEventListener("click", function(event) {
        console.log("clicked");
    });
}