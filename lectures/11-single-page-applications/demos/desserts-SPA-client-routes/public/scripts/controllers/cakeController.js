'use strict';
var app = app || {};

(function(module) {
  const cakeController = {};
  
  cakeController.init = function () {
    // write a function that will update the view and show/hide the appropriate sections

    $( '.tab-content' ).hide();
    $( '#cake' ).show();

    app.cakeView.init();
  }

  module.cakeController = cakeController;
})(app);
