'use strict';

// TODO make AJAX request on click
// TODO use AJAX to load data from a JSON file
// $.ajax({
//     url: 'data.json',
//     method: 'GET',
//     success: function ( data ) {
//         console.log( 'successfully got the json file' );
//     }
// });


// $.get( 'data.json', function ( hufflepuff ) {
//     console.log( 'got the stuff', hufflepuff );
// });

if ( localStorage.data ) {
    appendToDOM( JSON.parse( localStorage.data ) );
} else {
    $.getJSON( 'data.json' )
        .done( function ( data ) {
            console.log( 'got the stuff?', data );
            localStorage.setItem( 'data', JSON.stringify( data ) );
            appendToDOM( data );
        })
        .fail( function ( ravenclaw ) {
            console.log( 'something bad', ravenclaw );
        })
        .always( function ( slytherin ) {
            console.log( 'all the time!!', slytherin );
        });
}
    
// TODO cache our JSON file in localStorage
// TODO only make the AJAX request if it's not in localStorage


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



// ES2015 new things!
// TODO use let and const

var day = 'Friday!';
console.log( day );
day = 'Monday ):';
console.log( day );

const month = 'September';
console.log( month );
// month = 'October';
// console.log( month );

const cat = { name: 'Ferby', color: 'gray' };
console.log( cat );
cat.name = 'James';
console.log( cat );

// cat = 'cat';

let hour = 'Lunch';
console.log( hour );
hour = 'still lecture, sorry';
console.log( hour );



// TODO use template literals
var plant = { name: 'george', color: 'light green' };
console.log( 'This plant\'s name is ' + plant.name + '. it\'s color is ' +  plant.color );
console.log( `This plant's name is ${plant.name}. it's color is ${plant.color}` );
