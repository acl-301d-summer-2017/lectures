var app = app || {};

(function( module ){
    const storeController = {};

    storeController.loadAll = ( ctx, cb ) => {
        app.Store.loadAll( stores => {
            ctx.stores = stores;
            console.log( 'ctx with stores:', ctx.stores );
            cb();
        });
    };

    // TODO write method to get store by id
    storeController.findById = ( ctx, next ) => {
        console.log( 'in findby id', ctx.params.id );

        app.Store.find( 'store_id', ctx.params.id, (store) => {
            ctx.stores = store;
            next();
        });
    };
    
    storeController.findByLocation = ( ctx, next ) => {
        let saveToCtx = stores => {
            ctx.stores = stores;
            next();
        }
        
        app.Store.find( 'location', ctx.params.location, saveToCtx )
    };

    storeController.showStores = ( ctx ) => {
        console.log( ctx.stores );
        app.storeView.init( ctx.stores );
    };

    module.storeController = storeController;

})( app );  
