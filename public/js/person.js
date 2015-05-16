angular.module('app')
.service('Person', ['$resource', function ($resource) {
	return $resource('/api/v1/people/:id', {
		id:'@_id'
	}, {
		update: {
			method: 'PUT'
		}
	});
}])