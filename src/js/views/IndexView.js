define([
	'backbone',
	'underscore',
	'jquery',
	'router',
	'views/ProjectSuggestFooterView',
	'../collections/ProjectsCollection',
	'text!../../templates/index.tpl',
	'text!../../templates/ProjectThumbnail.tpl'
], function(Backbone, _, $, Router, FooterView, ProjectsCollection, Template, ThumbnailTemplate) {
	var indexView = Backbone.View.extend({

		el: _.template(Template),
		thumbnailTpl: _.template(ThumbnailTemplate),
		
		events : {
			"click .ProjectThumbnail": "onThumbnailClicked"
		},

		initialize: function() {
			this.render();
		},

		render: function() {
			new FooterView({});
			this.collection.each(function(elem, k) {
				this.addProject(elem);
			}, this);
			$('#content').html(this.$el);
		},

		addProject: function(model) {
			var $elem = $(this.thumbnailTpl({
				imgIndex: model.get('id'),
				title: model.get('title'),
				roles: model.getStringRoles()
			}));
			this.$el.find('#ProjectList').append($elem);
		},

		onThumbnailClicked: function(e) {
			var target = $(e.currentTarget).data('target');
			Backbone.history.navigate('project/' + target, {trigger: true})
		}
	});

	return indexView;
})