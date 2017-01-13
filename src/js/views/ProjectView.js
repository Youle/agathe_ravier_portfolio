define([
	'backbone',
	'jquery',
	'underscore',
	'views/ProjectSuggestFooterView',
	'text!../../templates/ProjectPage.tpl',
	'text!../../templates/ProtectedPage.tpl'
	], function(Backbone, $, _, FooterView, Template, ProtectedTemplate) {
		var _tadam = 'secretfile2017';
		var ProjectView = Backbone.View.extend({

			initialize: function(options) {
				this.projectTpl = options.projectTpl
				if(this.model.get('protected')) {
					this.renderProtected();
				} else {
					this.render()
				}
				new FooterView({
					collection: this.model.collection,
					projectIndex: this.model.collection.indexOf(this.model)
				});
			},

			getEl: function() {
				var mainTpl = _.template(Template)({
					id: this.model.id,
					title: this.model.get('title'),
					roles: this.getRolesList(),
					year: this.model.get('year'),
					agency: this.model.get('agency'),
					richText: this.model.get('richText'),
					projectTemplate: this.projectTpl,
					mainColor: this.model.get('mainColor') || '#ffffff'
				});

				return mainTpl;
			},

			getRolesList: function() {
				var $ctn = $('<div>');
				_.each(this.model.get('roles'), function(role, k) {
					var $role = $('<div>');
					$role.addClass('ProjectRole').text(role.charAt(0).toUpperCase() + role.slice(1));
					$ctn.append($role);
				});
				return $ctn.html();
			},

			renderProtected: function() {
				$('#content').html(_.template(ProtectedTemplate)).on('click', '.UnlockButton', _.bind(this.onUnlockButtonClicked, this));
			},

			onUnlockButtonClicked: function() {
				var $input = $('#content').find('input');
				var val = $input.val();

				if(val === _tadam) {
					this.render();
				} else {
					$input.addClass('wrong');
				}
			},

			render: function() {
				this.$el = this.getEl();
				$('#content').html(this.$el)
			}
		});

		return ProjectView;
	});