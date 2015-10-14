var app = angular.module("meanApp", ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {
  // Defaults to add plan
  $urlRouterProvider.otherwise('/home/addPlan');

  // Defines different states for ui-view
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: './components/home/homeTmpl.html'
    })

    .state('home.addPlan', {
      url: '/addPlan',
      templateUrl: './components/addPlan/addPlanTmpl.html',
      controller: 'addPlanCtrl',
      resolve: {
        locations: function(locationService) {
          return locationService.getAllLocations();
        }
      }
    })

    .state('home.viewPlans', {
      url: '/viewPlans',
      templateUrl: './components/viewPlans/viewPlansTmpl.html',
      controller: 'viewPlansCtrl',
      resolve: {
        plans: function(planService) {
          return planService.getAllPlans();
        }
      }
    })

    .state('home.addLocation', {
      url: '/addLocation',
      templateUrl: './components/addLocation/addLocationTmpl.html',
      controller: 'addLocationCtrl'
    });
});
