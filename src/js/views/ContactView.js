define([
	'backbone',
	'jquery',
	'underscore',
	'text!../../templates/ContactPart.tpl'
], function(Backbone, $, _, Template) {
	var ContactView = Backbone.View.extend({
		el: _.template(Template)
	});

	return ContactView;
})