(function() {
  'use strict';

  app.controller('viewPlansCtrl', function($scope, planService, plans) {
    // Sets up ui-grid
    $scope.grid = {
      // Puts $http response into grid
      data: plans,
      // Defines columns
      columnDefs: [
        { name: "location", field: "location.city"},
        { name: "# of people", field: "numberOfPeople"},
        { name: "# of nights", field: "numberOfNights"},
        { name: "car rental", field: "carRental"},
        // cellTemplate formats the cell for currency
        { name: "price", field: "totalPrice", cellTemplate: "<div class='ui-grid-cell-contents'>${{COL_FIELD}}</div>"}
      ]
    };
  });
}());
