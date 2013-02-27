define({
	app_name: "App Example",
	shim: {
		"ember": {
			deps: ["handlebars", "jquery"],
			exports: "Ember"
		}
	},
	paths: {
		"ember": "http://cdnjs.cloudflare.com/ajax/libs/ember.js/1.0.0-rc.1/ember.min",
		"jquery": "http://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min",
		"handlebars": "http://cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.0-rc.3/handlebars.min"
	}
});
