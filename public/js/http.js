angular.module('app', [])
	.controller('HttpCtrl', ['$http', '$scope', function($http, $scope) {
		var arr = $scope.arr = [];
		$scope.size = 5;
		$scope.people = [];
		$scope.messages = [];

		$scope.getArray = function(length) {
			var parsed = parseInt(length);
			parsed += length > parsed ? 1:0;
			return new Array(parsed);
		};

		$scope.gotoPage = function(page) {
			var tmp = angular.copy(arr);
			$scope.people = tmp.splice(page * $scope.size, $scope.size);
			$scope.current = page;
		};

		($scope.refresh = function() {
			$http.get('/api/v1/people').success(function(data, status, headers) {
				$scope.arr = arr = data;
				$scope.gotoPage(0);
			});
		})();

		//$scope.refresh();

		$scope.save = function(p) {
			$http.post('/api/v1/people', p).success(function(data) {
				$scope.refresh();
				// $scope.messages.push({
				// 	type: 'success',
				// 	content: 'Sauvegardé avec succé'
				// });
			}).error(function (d) {
				$scope.messages.push({
					type: 'danger',
					content: 'Erreur: ' + d.message
				});
			});
		};
	}])