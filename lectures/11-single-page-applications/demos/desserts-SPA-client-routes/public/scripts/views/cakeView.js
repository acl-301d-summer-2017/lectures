'use strict';
var app = app || {};

(function(module){

    const cakeView = {};

    cakeView.init = function () {
        var $cakeLayers = $( '#actual-cake div' );
        
        // attach event listener: when dropdown changes - update cake
        $( 'select[name="icing"]' ).change( selectHandler );
        
        function selectHandler () {
            $cakeLayers.css( 'border-color', $( this ).val() );
        }
        
        $( 'input[name="flavor"]' ).change( function () {
            console.log( 'this is the element listening for the event:', this );
            console.log( '$(this) is that same element as jQuery object!:', $(this) );
            
            $cakeLayers.css('background-color', $( this ).val() );
        });
                
        $( '#new-icing' ).submit( function () {
            event.preventDefault();
            console.log( 'this.newColor', this.newColor );
            // var $colorInput = $( this ).find( 'input' );
            
            var $colorInput = $( this.newColor );
            var color = $colorInput.val();
            var newOption = '<option value="' +  color + '">' + color + '</option>';
            $( 'select' ).append( newOption );
            
            $colorInput.val('');
        });
    };


    module.cakeView = cakeView;

})(app);