(function() {
  'use strict';

  app.controller('addPlanCtrl', function($scope, planService, locations) {
    // Set initial values on $scope (helps fill in inputs)
    $scope.locations = locations;
    $scope.plan = {
      numberOfPeople: 1,
      numberOfNights: 1
    };
    $scope.plan.location = $scope.locations[0];

    // Calculates total cost whenever any property of $scope.plan changes
    $scope.$watch('plan', function() {
      $scope.plan.totalPrice = ($scope.plan.location.costPerNight * $scope.plan.numberOfPeople * $scope.plan.numberOfNights) + ($scope.plan.carRental ? (30 * $scope.plan.numberOfNights) : 0);
    }, true);

    // Makes add plan api call then resets the form
    $scope.addPlan = function() {
      planService.addPlan($scope.plan).then(function(data) {
        $scope.plan = {
          numberOfPeople: 1,
          numberOfNights: 1
        };
        $scope.plan.location = $scope.locations[0];
      });
    };
  });
}());
