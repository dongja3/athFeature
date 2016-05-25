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
