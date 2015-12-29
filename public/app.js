var app = angular.module("meanApp", ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider){
  // Defaults to home
  $urlRouterProvider.otherwise('/home');

  // Defines different states for ui-view
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: './components/home/homeTmpl.html'
    });
});
