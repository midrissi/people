var app = angular.module('app', ['ngRoute', 'ngResource'])
.config(['$routeProvider', '$templateCacheProvider', function (rp, tc) {
	rp
	.when('/', {
		templateUrl: 'views/list.html',
		controller: 'AllCtrl'
	})
	.when('/new', {
		templateUrl: 'views/detail.html',
		controller: 'DetailCtrl'
	})
	.when('/:id', {
		templateUrl: 'views/detail.html',
		controller: 'DetailCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);
// app.run(function($templateCache) {
// 	$templateCache.put('views/list.html', '<ul><li ng-repeat="p in people">{{p.name.first}}</li></ul>');
// 	$templateCache.put('views/detail.html', 'Details');
// });