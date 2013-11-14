var repos = [
				"WTAScrollViewKeyboardManager",
				"WTACURLStringFromURLRequest",
  				"WTATagStringBuilder",
   				"MTStackViewController",
   				"uicolor-helpers",
   				"WTAZoomNavigationController",
   				"xcrake",
   			].sort();
var repoTemplate;

$(document).ready(function() {
	compileTemplates();
	displayPlaceholder();
	loadRepos();
});

function loadRepos() {
	repos.forEach(function (value, index) {
		getRepo(value, function(data) {
			$("#repos li:eq(" + index + ")").replaceWith(repoTemplate(data));
		});
	});
}

function displayPlaceholder() {
	repos.forEach(function (value) {
		var context = {name: value};
		$("#repos").append(repoTemplate(context));
	});
}

function compileTemplates() {
	repoTemplate = Handlebars.compile($("#repo-template").html());
}

function getRepo(repoName, completion) {
	$.getJSON("https://api.github.com/repos/willowtreeapps/" + repoName, function(data) {
 		completion(data);
	});
}