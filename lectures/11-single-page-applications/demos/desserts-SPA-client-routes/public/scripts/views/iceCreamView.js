'use strict';

var app = app || {};

(function(module){

    const iceCreamView = {};

    iceCreamView.init = function () {

        // adding click listeners to our cone and cup
        // using shorthand event listener
        
        // $( '#cone' ).click( function... );
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
        // use .each bc we can't use .forEach on a jQuery object!
        $( '#ice-cream button' ).on( 'click', function () {
            $( '.scoop' ).each( function () {
                $( this ).css( 'background-color', randomColor() );
            });
        });
        
    }

    // helper function
    function randomColor () {
        var colors = ['peachpuff', 'lightblue', 'mistyrose', 'salmon', 'honeydew', 'navy', 'red', 'cyan', 'gold', 'orchid'];
        
        return colors[ Math.floor( Math.random() * colors.length ) ];
    }

    app.iceCreamView = iceCreamView;

})(app);