(function() {
  'use strict';

  app.service('planService', function($q, $http) {

    // Makes api call to add plan
    this.addPlan = function(plan) {
      var deferred = $q.defer();
      $http({
        method: "POST",
        url: '/api/travelPlans',
        data: plan
      }).then(function(response) {
        deferred.resolve(response.data);
      });
      return deferred.promise;
    };
  });
}());
