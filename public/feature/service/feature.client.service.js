angular.module('feature').factory('Features', function() {
    var features = {};
    features.query = function() {
        // In real apps, we'd pull this data from the server...
      return [
        {featureId:'001', featureName: 'Feature-Paint pots', qualifier: 'Collection Office'},
        {featureId:'002', featureName: 'Feature-Polka dots', qualifier: 'Collection Office'},
        {featureId:'003', featureName: 'Feature-Pebbles', qualifier: 'Collection Office'}
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
