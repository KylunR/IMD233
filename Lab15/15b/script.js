var pac12data = [
    { image: '../../Lab3/3c/oregon_logo.png', name: 'Oregon', conference: '8-1', overall: '12-2', lastgame: 'W 28-27 WIS', id: 'oregon' },
    { image: '../../Lab3/3c/cal_logo.png', name: 'California', conference: '4-5', overall: '8-5', lastgame: 'W 35-20 ILL', id: 'cal' },
    { image: '../../Lab3/3c/uw_logo.png', name: 'Washington', conference: '4-5', overall: '8-5', lastgame: 'W 38-7 BSU', id: 'uw' },
    { image: '../../Lab3/3c/osu_logo.png', name: 'Oregon State', conference: '4-5', overall: '5-7', lastgame: 'L 10-24 ORE', id: 'osu' },
    { image: '../../Lab3/3c/wsu_logo.png', name: 'Washington State', conference: '3-6', overall: '6-7', lastgame: 'L 21-31 AFA', id: 'wsu' },
    { image: '../../Lab3/3c/stanford_logo.png', name: 'Stanford', conference: '3-6', overall: '4-8', lastgame: 'L 24-45 ND', id: 'stanford' }
];

var gridHTML = (
    "<h4>2019-2020 SEASON</h4>" +
    "<div class='row header_row'>" +
        "<div class='col-sm'>" +  "NORTH DIVISION" + "</div>" +
        "<div class='col-sm'>" + "</div>" +
        "<div class='col-sm center_col'>" +  "CONFERENCE" + "</div>" +
        "<div class='col-sm center_col'>" +  "OVERALL" + "</div>" +
        "<div class='col-sm center_col'>" +  "LAST GAME" + "</div>" +
    "</div>"
);

pac12data.forEach(element => {
    
    gridHTML += (
        "<div class='row " + element.id + "'>" +
            "<div class='col-sm'>" +  "<img src=" + element.image + " width='20px' height='20px'>" + "</div>" +
            "<div class='col-sm'>" + element.name + "</div>" +
            "<div class='col-sm center_col'>" +  element.conference + "</div>" +
            "<div class='col-sm center_col'>" +  element.overall + "</div>" +
            "<div class='col-sm center_col'>" +  element.lastgame + "</div>" +
        "</div>"
    );

});





document.getElementById("grid_container").innerHTML = gridHTML;