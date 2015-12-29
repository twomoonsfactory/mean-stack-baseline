(function() {
  'use strict';

  app.service('locationService', function($q, $http) {

    this.addLocation = function(location) {
      var deferred = $q.defer();
      $http({
        method: "POST",
        url: '/api/locations',
        data: location
      }).then(function(response) {
        deferred.resolve(response.data);
      });
      return deferred.promise;
    };
  });
}());
