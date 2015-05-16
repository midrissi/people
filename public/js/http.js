angular.module('app', [])
.controller('HttpCtrl', ['$http', '$scope', function ($http, $scope) {
	var arr = $scope.arr = [];
	$scope.size = 5;
	$scope.people = [];
	$http.get('/api/v1/people').success(function (data, status, headers) {
		$scope.arr = arr = data;
		$scope.gotoPage(0);
	});

	$scope.getArray = function (length) {
		return new Array(parseInt(length));
	};

	$scope.gotoPage = function (page) {
		var tmp = angular.copy(arr);
		$scope.people = tmp.splice(page*$scope.size, $scope.size);
		$scope.current = page;
	}
}])