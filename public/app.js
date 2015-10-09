var app = angular.module("meanApp", []);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './components/home/homeTmpl.html',
      controller: 'homeCtrl'
    });
});
