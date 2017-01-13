define([
	'backbone',
	'jquery',
	'underscore',
	'text!../../templates/ProjectThumbnail.tpl'
	], function(Backbone, $, _, ThumbnailTemplate) {

		var FooterView = Backbone.View.extend({

			el: '#footer',

			events : {
				"click .ProjectThumbnail": "onThumbnailClicked"
			},

			initialize: function(options) {
				if(options.projectIndex !== undefined) {
					this.render(options.collection, options.projectIndex);
				} else {
					this.$el.empty();
				}
			},

			onThumbnailClicked: function(e) {
				var target = $(e.currentTarget).data('target');
				Backbone.history.navigate('project/' + target, {trigger: true});
			},


			render: function(collection, index) {
				var $ctn = $('<div class="FooterThumbnails">');

				for(var i = 1; i <= 3; i++) {
					var projectIndex = i + index;
					var project = collection.at(projectIndex) || collection.at(projectIndex - collection.length);
					$ctn.append(_.template(ThumbnailTemplate)({
						title: project.get('title'),
						imgIndex: project.id,
						roles: project.getStringRoles()
					}))
				}
				this.$el.html([$('<div class="subtitle">à découvrir aussi :</div>'), $ctn]);
			}
		});

		return FooterView;
	})