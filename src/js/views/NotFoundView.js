define([
	'backbone',
	'underscore',
	'jquery',
	'text!../../templates/404.tpl'
], function(Backbone, _, $, Template) {
	var NotFoundView = Backbone.View.extend({
		el: _.template(Template),

		render: function() {
			$('#content').html(this.$el);
		}
	});

	return NotFoundView;
})