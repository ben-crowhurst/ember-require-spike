define(["ember"], function(Ember) {
	var view = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile("login page <a href='#' {{action 'login'}}>Login</a>")
	});

	return view;
});