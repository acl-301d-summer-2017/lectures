var app = app || {};

(function( module ){

    function Store ( iceCreamStore ) {
        Object.keys( iceCreamStore ).forEach( key => this[key] = iceCreamStore[key] );
    }

    Store.all = [];

    Store.loadAll = ( callback ) => {
        $.get('/stores')
            .then( stores => Store.all = stores )
            .then( callback );
    }

    Store.find = function(field, value, callback) {
        $.get('/stores/find', {field: field, val: value})
            .then(callback);
    };
    
    module.Store = Store;
    
})( app );