$(document).ready(function() {
    const base_url="https://api.weather.gov/stations/";
    const endpoint="/observations/latest";

    // weather update button click
    $('#getwx').on('click', function(e) {
        var mystation = $('input').val();
        var myurl = base_url + mystation + endpoint;
        $('input#my-url').val(myurl);

        // clear out any previous data
        $('ul li').each(function() {
            // enter code to clear each li
            $(this).remove();
        });

        console.log("Cleared Elements of UL");

        // execute AJAX call to get and render data
        $.ajax({
            url: myurl,
            dataType: "json",
            success: function(data) {
                var tempC= data['properties']['temperature'].value.toFixed(1);
                var tempF = (tempC * 9/5 + 32).toFixed(1);
                
                // get wind info and convert m/s to kts
                var windDirection = data['properties']['windDirection'].value.toFixed(1);
                var windSpeed = (data['properties']['windSpeed'].value.toFixed(1) / 3.6) * 1.94384;
                
                // uncomment this if you want to dump full JSON to textarea
                var myJSON = JSON.stringify(data);
                $('textarea').val(myJSON);
                
                var str = "<li>Current temperature: " + tempC +"C " + tempF + "F" + "</li>"; 
                $('ul').append(str);
                $('ul li:last').attr('class', 'list-group-item');

                // add additional code here for the Wind direction, speed, weather contitions and icon image
                str = "<li>Wind Direction: " + windDirection + " degrees" + "</li>"; 
                $('ul').append(str);
                $('ul li:last').attr('class', 'list-group-item');
                str = "<li>Wind Speed: " + windSpeed.toFixed(2) + " kts" + "</li>"; 
                $('ul').append(str);
                $('ul li:last').attr('class', 'list-group-item');
                str = "<li>Weather Condition: " + "<img src=" + data['properties']['icon'] + ">" + "  " + data['properties']['textDescription'] + "</li>"; 
                $('ul').append(str);
                $('ul li:last').attr('class', 'list-group-item');
            }
        });
    });
});