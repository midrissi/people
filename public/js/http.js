angular.module('app', ['ngResource'])
	.controller('HttpCtrl', ['$http', '$scope', 'Person', function($http, $scope, Person) {
		$scope.people = Person.query();
		$scope.messages = [];
		$scope.current = null;

		($scope.refresh = function() {
			$scope.people = Person.query();
		})();

		$scope.save = function(p) {
			p[p._id? '$update': '$save']().then(function () {
				$scope.refresh();
			});
			
			// var p = new Person(p);
			// p.$save().then(function () {
			// 	$scope.refresh();
			// });
		};

		$scope.addNew = function () {
			$scope.current = new Person({});
		};

		$scope.select = function (p) {
			$scope.current = p;
		};

		$scope.deleteOne = function (p) {
			confirm('Voulez-vous supprimer cette personne?') && p.$delete(function () {
				$scope.refresh();
			});
		}
	}])