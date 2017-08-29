'use strict';

hello = 'hi';
myParents = 'notstrict';
console.log( hello, myParents );





// for v forEach
var iceCream = ['vanilla', 'chocolate', 'strawberry'];

for ( var i = 0; i < iceCream.length; i ++ ) {
  console.log( 'from the for loop --- ', iceCream[i] );
}

iceCream.forEach( function ( itemInArray ) {
  console.log( 'from the forEAch --- ', itemInArray )
});
















//run a command as soon as the DOM loads
$(document).ready(function() {
  // alert('the DOM is ready now!');
  console.log( 'the DOM has loaded' );
});

window.addEventListener('load',function () {
  console.log( 'window has loaded' );
});


//*****basic selectors*****//

//element
$('li');  //returns an array of all matching elements

//class
$('.form-element');

//id
$('#beautiful-list');

//parent descendent
$('#list-container li');  //returns all <li>s anywhere inside the #list-container element

// parent > child
$('#list-container > p');  //returns any <p> that is a DIRECT child of #list-container

//attribute
$('input[name="textbox"]');
$('li[data-category="list-item"]');

//another way to do the previous selection
var category = 'list-item';
$('li[data-category="' + category + '"]');




//*****selector methods*****//

//TODO get the parent element of the <li>s
$( 'li' ).parent();

//TODO get the input box only from the first form-element
$( '.form-element' ).first().find( 'input' );
$( '.form-element:first-of-type input' );



//*****getting and setting data*****//

//get text of the matched element(s)
$('h1').text();

//set text of the matched element(s)
// $('h1').text('this is some new text');

//get the data-category attribute of an li
$('li').attr('data-category');

//set the data-category attribute of an li
// $('li').attr('data-category', 'new-value');




//*****creating and deleting elements*****//

//TODO make a copy of <li> template and append it to the <ul>
var ul = document.getElementById('beautiful-list');
var newLi = document.createElement('li');
newLi.innerText = 'create w document methods';
ul.appendChild(newLi);

// var $ul = $('#beautiful-list');
// var $liClone = $('.li-template').clone();
// $liClone.text('created w jQuery');
// $ul.append($liClone);

var $ul = $('#beautiful-list');
$ul.append( $('.li-template').clone().text('created w jQuery!!!') );

// $('#beautiful-list').append( $('.li-template').clone().text('created w jQuery!!!') );


//TODO remove an element from the DOM
// $('*').remove();