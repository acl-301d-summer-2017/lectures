
page( '/', app.storeController.loadAll, app.storeController.showStores );
page( '/locations/:location', app.storeController.findByLocation, app.storeController.showStores );
// TODO set up a route to view an individual store

page();