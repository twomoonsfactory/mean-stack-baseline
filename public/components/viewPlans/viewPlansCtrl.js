(function() {
  'use strict';

  app.controller('viewPlansCtrl', function($scope, planService, plans) {

    $scope.plans = plans;

    $scope.removePlan = function(id) {
      planService.removePlan(id)
      .then(function(newPlans) {
        $scope.plans = newPlans;
      });
    };
  });
}());
