(function() {
  'use strict';

  app.service('planService', function($q, $http) {
    // Gets all locations for add plan view
    this.getAllLocations = function() {
      var deferred = $q.defer();
      $http({
        method: "GET",
        url: '/api/locations'
      }).then(function(response) {
        deferred.resolve(response.data);
      });
      return deferred.promise;
    };

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

    // Gets all plans in db for view plans
    this.getAllPlans = function() {
      var deferred = $q.defer();
      $http({
        method: "GET",
        url: '/api/travelPlans'
      }).then(function(response) {
        deferred.resolve(response.data);
      });
      return deferred.promise;
    };
  });
}());
