(function(root){
	require(["configuration"], function(configuration) {
		console.log(configuration);
		require.config(configuration);

		require(["core","ember"], function(Core, Ember) {
			console.log(Core, Ember);

			var app_name = configuration.app_name || "App";

			root[app_name] = Application = Ember.Application.create(Core);

			console.log(Application);

			//Application.Router.map(function() {
			//	this.route("index", {
			//		path: "/login" 
			//	});
			//});

			Application.deferUntilDOMReady();
		});
	});
})(this);