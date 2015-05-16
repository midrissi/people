angular.module('app')
	.controller('AllCtrl', ['$scope', 'Person', '$location', function($scope, Person, $location) {
		$scope.people = Person.query();

		$scope.deleteOne = function(p) {
			confirm('Voulez-vous supprimer cette personne?') && p.$delete(function() {
				$scope.people = Person.query();
			});
		};

		$scope.updateOne = function(p) {
			$location.path('/' + p._id);
		};
	}]);