var app = app || {};

(function( module ){
    const storeController = {};

    storeController.loadAll = ( ctx, next ) => {
        app.Store.loadAll( stores => {
            ctx.stores = stores;
            next(); 
        });
    };

    // TODO write method to get store by id
    storeController.findById = ( ctx, next ) => {
    };
    
    storeController.findByLocation = ( ctx, next ) => {
        let saveToCtx = stores => {
            ctx.stores = stores;
            next();
        }
        
        app.Store.find( 'location', ctx.params.location, saveToCtx )
    };

    storeController.showStores = ( ctx ) => {
        app.storeView.init( ctx.stores );
    };

    module.storeController = storeController;

})( app );  
