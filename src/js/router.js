define([
  'jquery',
  'underscore',
  'backbone',
  'collections/ProjectsCollection',
  'views/IndexView',
  'views/NotFoundView',
  'views/ProjectView'
  ], function($, _, Backbone, ProjectsCollection, IndexView, NotFoundView, ProjectView){
    var projects = new ProjectsCollection();
    var AppRouter = Backbone.Router.extend({
      routes: {
        '': 'showIndex',
        'project/:projectId': 'showProject',
        '*actions': 'defaultAction'
      },

      showIndex: function() {
        new IndexView({
          collection: projects
        });
        $('body').scrollTop(0);
        
      },

      showProject: function(id) {
        $.get('../../templates/projects/' + id + '.tpl', function(res) {
          new ProjectView({
            model: projects.get(id),
            projectTpl: res
          });
          $('body').scrollTop(0);
        })
      },

      defaultAction: function() {
        var notFound = new NotFoundView();
        notFound.render();
        $('body').scrollTop(0);

      }

    });

    return {
      initialize: function(){
        projects.on('sync', function() {
          new AppRouter;
          Backbone.history.start();
        })
        projects.fetch();
      }
    };
  });