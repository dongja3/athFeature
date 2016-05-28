// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'example' controller
angular.module('feature').controller('FeatureController', ['$scope','$routeParams',
    '$location','Features','Orgnizations',
	function($scope,$routeParams,$location,Features,Orgnizations) {
	  $scope.create = function(){
			var myFeature ={};
			myFeature = $scope.feature;
			console.log(JSON.stringify(myFeature));
			// $scope.features.push(myFeature);
			$location.path('features');
		};

		$scope.find = function(){
			$scope.features=Features.query();
			console.log("find method called");
		};

		$scope.createInit=function(){
			$scope.orginzations=Orgnizations.query();
			$scope.feature={};
			$scope.feature.qualifierList=[];
			$scope.addQualifier();
		};

		$scope.changeOrg = function (selectedOrg) {
			$scope.domains = selectedOrg.domains;
			$scope.feature.featureId1=selectedOrg.id;
		};

		$scope.changeDomain = function (selectedDomain) {
			$scope.feature.featureId2=selectedDomain.id;
		};

		$scope.findOne = function() {
			var featureName = $routeParams.featureName;

			for (var i = 0; i < $scope.features.length; i++) {
				if(featureName===$scope.features[i].featureName){
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

		$scope.addQualifier = function () {
			var qualifier = {name:'',description:''}
			$scope.feature.qualifierList.push(qualifier);
		};

		$scope.deleteQualifier = function(qualifier) {
			if(!qualifier){
				return;
			}
			for (var i in $scope.feature.qualifierList) {
					if ($scope.feature.qualifierList[i] === qualifier) {
							$scope.feature.qualifierList.splice(i, 1);
					}
			}
		};
	}
]);
