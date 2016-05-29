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
			$scope.management = $routeParams.management;
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
			var featureName = $routeParams.featureId;
			if($routeParams.management==='true'){
				$scope.management=true;
			}else{
				$scope.management=false;
			}
			var features =Features.query();
			for (var i = 0; i < features.length; i++) {
				if(featureName===features[i].featureName){
						$scope.feature = features[i];
						return;
				}
			}
			alert("no feature can be found");
			if($scope.management){
				$location.path('features?management=true');
			}
			$location.path('features');
		};

		$scope.update = function(){
			var myFeature ={};
			myFeature = $scope.feature;
			console.log(JSON.stringify(myFeature));
			// $scope.features.push(myFeature);
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
