'use strict';

// set up pagejs to listen for routes

page('/', function () { alert('I\'m home!!!'); });
page('/cake', app.cakeController.init );
page('/ice-cream', app.iceCreamController.init );

page.start(); //page();