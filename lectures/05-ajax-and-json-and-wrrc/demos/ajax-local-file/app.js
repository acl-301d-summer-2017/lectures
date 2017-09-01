'use strict';


// TODO use AJAX to load data from a JSON file
// $.ajax()
// $.get()
// $.getJSON()

// TODO cache our JSON file in localStorage 
// TODO only make the AJAX request if it's not in localStorage

// TODO use let and var
// TODO use template literals


function appendToDOM ( data ) {
    data.forEach(function (ele) {
        ele.batter.forEach(function (batter) {
            $('#batter').append('<h3>' + batter.type + '</h3>')
        });
        ele.topping.forEach(function (topping) {
            $('#toppings').append('<h3>' + topping.type + '</h3>')
        });
    });
}
