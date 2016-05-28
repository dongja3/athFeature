angular.module('feature').factory('Features', function() {
    var features = {};
    features.query = function() {
        // In real apps, we'd pull this data from the server...
      return [
        {"featureId1":"100","featureId2":"110","featureId3":"120","featureId4":"110","featureName":"Feature-Polka 111111",
          "permissonView":true,"permissonEdit":true,"releaseId":"R22.4","releaseDate":"2016-07-11",
          "qualifierList":[
          {"name":"Qualifier1","description":"q1 description"},
          {"name":"Qualifier2","description":"q2 description"}]
        },
        {"featureId1":"100","featureId2":"120","featureId3":"120","featureId4":"110","featureName":"Feature-Polka 2222222",
          "permissonView":true,"permissonEdit":true,"releaseId":"R22.4","releaseDate":"2016-07-11",
          "qualifierList":[
          {"name":"Qualifier1","description":"q1 description"},
          {"name":"Qualifier2","description":"q2 description"}]
        },
        {"featureId1":"100","featureId2":"130","featureId3":"120","featureId4":"110","featureName":"Feature-Polka 3333333",
          "permissonView":true,"permissonEdit":true,"releaseId":"R22.4","releaseDate":"2016-07-11",
          "qualifierList":[
          {"name":"Qualifier1","description":"q1 description"},
          {"name":"Qualifier2","description":"q2 description"}]
        }
      ];
    };
  return features;
});

angular.module('feature').factory('Orgnizations', function() {
    var orgnizations = {};
    orgnizations.query = function() {
        // In real apps, we'd pull this data from the server...
      return [
        {id:'100', name: 'OOCL',
          domains: [
            {id:'110',name:'Common'},
            {id:'120',name:'ARP'},
            {id:'130',name:'ARP'}
          ]
        },
        {id:'200', name: 'OLP',
          domains: [
            {id:'210',name:'Report'},
            {id:'220',name:'DCS'},
            {id:'230',name:'4PL'}
          ]
        }
      ];
    };
  return orgnizations;
});
