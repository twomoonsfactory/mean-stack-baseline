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

    // Deletes plan and receives updated list of plans
    this.removePlan = function(id) {
      var deferred = $q.defer();
      $http({
        method: "DELETE",
        url: '/api/travelPlans/' + id
      }).then(function(response) {
        deferred.resolve(response.data);
      });
      return deferred.promise;
    };
  });
}());
