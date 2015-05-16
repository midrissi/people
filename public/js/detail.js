angular.module('app')
	.controller('DetailCtrl', ['$scope', 'Person', '$location', '$routeParams', function($scope, Person, $location, $routeParams) {
		if($routeParams.id){
			$scope.current = Person.get({
				id: $routeParams.id
			});

			$scope.current.$promise.catch(function () {
				$location.path('/');
			});
		}else{
			$scope.current = new Person();
		}

		$scope.save = function(p) {
			p[p._id? '$update': '$save']().then(function () {
				$location.path('/');
			});
		};
	}]);