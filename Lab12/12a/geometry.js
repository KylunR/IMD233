function calcCircleGeometries(radius) {
    const pi = Math.PI;
    var area = pi * radius * radius;
    var circumference = 2 * pi * radius;
    var diameter = 2 * radius;
    var geometries = [area, circumference, diameter];
    return geometries;
}

function printGeometries(area, circumference, diameter) {
    return "Area: " + area + "<br>" + 
           "Circumference: " + circumference + "<br>" +
           "Diameter: " + diameter + "<br>";
}

var randomRadiusOne = Math.random() * 100;
var randomRadiusTwo = Math.random() * 100;
var randomRadiusThree = Math.random() * 100;

document.getElementById("radius_one").innerHTML = "Random Radius One (" + randomRadiusOne + ")<br>" 
                                                + printGeometries.apply(this, calcCircleGeometries(randomRadiusOne));

document.getElementById("radius_two").innerHTML = "Random Radius Two (" + randomRadiusTwo + ")<br>" 
                                                + printGeometries.apply(this, calcCircleGeometries(randomRadiusTwo));

document.getElementById("radius_three").innerHTML = "Random Radius Three (" + randomRadiusThree + ")<br>" 
                                                + printGeometries.apply(this, calcCircleGeometries(randomRadiusThree));