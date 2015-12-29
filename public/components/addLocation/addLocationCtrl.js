(function() {
  'use strict';

  app.controller('addLocationCtrl', function($scope, locationService) {
    $scope.addLocation = function() {
      locationService.addLocation($scope.location)
      .then(function(data) {
        $scope.location = {};
      });
    };
  });
}());
