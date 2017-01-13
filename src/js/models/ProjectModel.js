define([
	'backbone',
	'underscore',
	'jquery'
], function(Backbone, _, $) {
	var ProjectModel = Backbone.Model.extend({
		
		initialize: function() {
			
		},

		getStringRoles: function() {
			var _tmpRoles = this.get('roles');
			_tmpRoles = _tmpRoles.join(', ');

			return _tmpRoles.charAt(0).toUpperCase() + _tmpRoles.slice(1);
		},

		getUrl: function() {
			return '#project/' + this.id;
		}
	});

	return ProjectModel;
})