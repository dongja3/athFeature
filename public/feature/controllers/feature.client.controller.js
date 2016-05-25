// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'example' controller
angular.module('feature').controller('FeatureController', ['$scope','$routeParams', '$location','Features',
	function($scope,$routeParams,$location,Features) {
		$scope.features=Features.query();
	  $scope.create = function(){
			var myFeature ={};
			myFeature.featureId=this.featureId;
			myFeature.featureName = this.featureName;
			myFeature.qualifier = this.qualifier;
			console.log('create feature:' +myFeature.featureName +':' + myFeature.qualifier);
			$scope.features.push(myFeature);
			$location.path('features');
		};

		$scope.find = function(){
			console.log("find method called");
		}

		$scope.findOne = function() {
			var featureId = $routeParams.featureId;

			for (var i = 0; i < $scope.features.length; i++) {
				if(featureId===$scope.features[i].featureId){
						$scope.feature = $scope.features[i];
						return;
				}
			}
			alert("no feature can be found");
			$location.path('features');
		};

		$scope.update = function(){
			var featureName = this.featureName;
			var qualifier = this.qualifier;
			console.log('update:'+featureName +':' + qualifier);
			$location.path('features');
		};
	}
]);
