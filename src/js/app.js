define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  './views/MainContainerView'
], function($, _, Backbone, Router, MainContainerView){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    new MainContainerView();
    Router.initialize();
  }

  return {
    initialize: initialize
  };
});