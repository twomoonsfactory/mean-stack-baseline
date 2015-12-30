var app = angular.module("meanApp", ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider){
  // Defaults to addLocation
  $urlRouterProvider.otherwise('/home/addLocation');

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
    
    .state('home.addLocation', {
      url: '/addLocation',
      templateUrl: './components/addLocation/addLocationTmpl.html',
      controller: 'addLocationCtrl'
    });
});
