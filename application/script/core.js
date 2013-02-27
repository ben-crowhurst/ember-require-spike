define(["view/index", "controller/index"], function(IndexView, IndexController) {
	var Application = {
		LOG_TRANSITIONS: true,
		IndexView: IndexView,
		IndexController: IndexController
	};

	return Application;
});