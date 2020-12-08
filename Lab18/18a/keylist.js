$(document).ready(function() {
    $("li").css("id", "uw");
    const states = ["idle", "gather", "process"];
    var state = states[1];
    var words = new Array();
    var ndx = 0;
  
    $("ul").on("mouseover", "li", function() {
      console.log("x:" + $(this).text());
      $(this).attr("id", "uw");
    });
  
    $("ul").on("mouseleave", "li", function() {
      $(this).attr("id", "uw-gold");
    });
  
    // reset button click
    $("button").on("click", function(e) {
        words = [];
        $(".list-group").html("");
        state = "process";
    });
  
    // keypress
    $("input").on("keypress", function(e) {
      var code = e.which;
      console.log(e.target.value);    
      // var char = String.fromCharCode(code);
      console.log('key:' + code + '\tstate:' + state);
      console.log(e);
      switch (state) {
        // gather
        case "gather":
            // If enter
            if (code === 13) { 
                if (e.target.value === "") {
                    return;
                }
                words.push(e.target.value);
                e.target.value = "";
                let arrayHTML = "";
                words.forEach(element => {
                    arrayHTML += "<li>" + element + "</li>";
                });
                console.log("here" + arrayHTML);
                $(".list-group").html(arrayHTML);
            }
          break;
  
        // process
        case "process":
            $(".list-group").html("");
            state = "gather";
          break;
  
        default:
          break;
      }
    });
  });
  