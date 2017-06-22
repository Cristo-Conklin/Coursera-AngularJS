(function () {
'use strict';
	
angular.module('Assignment1', [])
	
	.controller('MyFirstController', function ($scope, $filter, $injector) {
		$scope.food = "Potato";
		$scope.bloat = "Enjoy!";

		$scope.displayBloat = function () {
			if ($scope.food == "") alert("Please enter data first");
			
			var a = $scope.food.split(",");
			var howMany = a.length;
			if (howMany > 3)
				$scope.bloat = "Too much!";
			else
				$scope.bloat = "Enjoy!";
		}


	});

})();
