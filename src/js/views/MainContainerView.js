define([
	'backbone',
	'underscore',
	'jquery',
	'text!../../templates/MainContainer.tpl'
], function(Backbone, _, $, Template) {
	var mainContainerView = Backbone.View.extend({
		
		el: _.template(Template),

		events: {
			'click .headerPart-Title': 'onTitleClicked',
			'scroll body': 'onScroll'
		},

		initialize: function() {
			this.render();
			$(document).off('scroll').on('scroll', _.bind(this.onScroll, this))
		},

		onTitleClicked: function() {
			Backbone.history.navigate('', {trigger: true})
		},

		onScroll: function(e) {
			/*var scrollTop = $('body').scrollTop();
			if(scrollTop >= 50) {
				console.log(this.$el)
				this.$el.find('#header').css({position: 'fixed'})
			}*/
		},

		render: function() {
			$('body').html(this.$el)
		}
	})

	return mainContainerView;
})