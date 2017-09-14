var app = app || {};

(function( module ){
    const storeView = {};

    storeView.init = ( stores ) => {
        $( '#stores' ).empty();

        var render = Handlebars.compile( $( '#store-template' ).html() );
        $( '#stores' ).append( stores.map( render ) );

    };

    module.storeView = storeView;
    
})( app );