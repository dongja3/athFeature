// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'example' controller
angular.module('feature').controller('FeatureController', ['$scope','$routeParams',
    '$location','Features','Orgnizations',
	function($scope,$routeParams,$location,Features,Orgnizations) {
	  $scope.create = function(){
			var myFeature ={};
			myFeature = $scope.feature;
			var qualifiers ={};
			qualifiers = $scope.qualifierList;
			console.log('create feature:' + myFeature);
			console.log('create qualifier:' + qualifiers);
			// $scope.features.push(myFeature);
			// $location.path('features');
		};

		$scope.find = function(){
			$scope.features=Features.query();
			console.log("find method called");
		};

		$scope.createInit=function(){
			$scope.orginzations=Orgnizations.query();
			$scope.addQualifier();
			$scope.feature={};
		};

		$scope.changeOrg = function (selectedOrg) {
			$scope.domains = selectedOrg.domains;
			$scope.feature.featureId1=selectedOrg.id;
		};

		$scope.changeDomain = function (selectedDomain) {
			$scope.feature.featureId2=selectedDomain.id;
		};

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

		$scope.qualifierList=[];
		$scope.addQualifier = function () {
			$scope.qualifierList.push({
				name: '',
				description: ''
			});
		};

		$scope.deleteQualifier = function(qualifier) {
			if(!qualifier){
				return;
			}
			for (var i in $scope.qualifierList) {
					if ($scope.qualifierList[i] === qualifier) {
							$scope.qualifierList.splice(i, 1);
					}
			}
		};
	}
]);
