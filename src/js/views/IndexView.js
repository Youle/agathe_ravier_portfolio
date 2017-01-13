define([
	'backbone',
	'underscore',
	'jquery',
	'router',
	'views/ProjectSuggestFooterView',
	'views/ContactView',
	'../collections/ProjectsCollection',
	'text!../../templates/index.tpl',
	'text!../../templates/ProjectThumbnail.tpl'
], function(Backbone, _, $, Router, FooterView, ContactView, ProjectsCollection, Template, ThumbnailTemplate) {
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
			var dif = this.collection.length % 3 - 1
			if(dif) {
				this.$el.find('#ProjectList').append(this.getProjectPlaceholder())
			}
			$('#content').html(this.$el);
			console.log(new ContactView())
			$('#footer').html(new ContactView().$el)
		},

		addProject: function(model) {
			var $elem = $(this.thumbnailTpl({
				imgIndex: model.get('id'),
				title: model.get('title'),
				roles: model.getStringRoles()
			}));
			this.$el.find('#ProjectList').append($elem);
		},

		getProjectPlaceholder: function() {
			return $('<div>').addClass('ProjectItem')
		},

		onThumbnailClicked: function(e) {
			var target = $(e.currentTarget).data('target');
			Backbone.history.navigate('project/' + target, {trigger: true})
		}
	});

	return indexView;
})