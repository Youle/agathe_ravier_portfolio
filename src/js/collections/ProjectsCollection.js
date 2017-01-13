define([
	'backbone',
	'jquery',
	'underscore',
	'../models/ProjectModel'
], function(Backbone, $, _, Project) {
	
	var ProjectsCollection = Backbone.Collection.extend({
		
		model: Project,
		
		url: 'js/collections/projects.json',
		
		parse: function(res) {
			return res.projects;
		}
	
	});

	return ProjectsCollection;
});