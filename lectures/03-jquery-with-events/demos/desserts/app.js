'use strict';

// CREATING TABS WITH JQUERY
// hide our sections
$( '.tab-content' ).hide();

// attach click listener to nav links
$( 'a[data-tab]' ).click( function () {
    $('.tab-content' ).hide();
    $('section#' + $( this ).data('tab') ).show();
});






/*                                                      cake tab */
var $cakeLayers = $( '#actual-cake div' );
$( '#new-icing' ).hide();

// attach event listener: when dropdown changes - update cake
$( 'select[name="icing"]' ).change( function () {
    $cakeLayers.css( 'border-color', $( this ).val() );
});

$( 'input[name="flavor"]' ).change( function () {
    $cakeLayers.css('background-color', $( this ).val() );
});

// special new icing color button
$( '#cake button' ).click( function () {
    $( '#new-icing' ).show();
});

$( '#new-icing' ).submit( function () {
    event.preventDefault();
    
    var $colorInput = $( this ).find( 'input' );
    var color = $colorInput.val();
    var newOption = '<option value="' +  color + '">' + color + '</option>';
    $( 'select' ).append( newOption );

    $colorInput.val('');
});







/*                                                      ice cream tab */


// adding click listeners to our cone and cup
// using shorthand event listener
$( '#cone' ).on( 'click', function () {
    $( this ).before( $( '.scoop.template' ).clone().removeClass( 'template' ) );
});

$( '#cup' ).on( 'click', function () {
    $( this ).before( $( '.scoop.template' ).clone().removeClass( 'template' ) );
});




// EVENT DELEGATION (and sprinkles!)
// using 'on' to attach event listener - allowing us to delegate if we want!
// add event listeners to div.scoop
$( 'div[data-type="cup"] .scoop' ).on( 'click', function () {
    var clicked = $(event.target);
    clicked.addClass( 'mint' );
});

// add event listener to div.scoop parent
$( 'div[data-type="cone"]' ).on( 'click', '.scoop', function () {
    // if ( event.target.id === 'cone' ) { return; }
    var clicked = $(event.target);
    clicked.addClass( 'mint' );
});




// special sprinkle button
$( '#ice-cream button' ).on( 'click', function () {
    $( '.scoop' ).each( function () {
        $( this ).css( 'background-color', randomColor() );
    });
});

// helper function
function randomColor () {
    var colors = ['peachpuff', 'lightblue', 'mistyrose', 'salmon', 'honeydew', 'navy', 'red', 'cyan', 'gold', 'orchid'];
    
    return colors[ Math.floor( Math.random() * colors.length ) ];
}








// simulate a click on the cake tab
$( 'a[data-tab="cake"]').click();