'use strict';
var app = app || {};

(function(module) {
  const iceCreamController = {};

  iceCreamController.init = () => {
    // write a function that will update the view and show/hide the appropriate sections

    $('.tab-content').hide();
    $('#ice-cream').show();
    
    app.iceCreamView.init();
  }
  
  module.iceCreamController = iceCreamController;
})(app);
