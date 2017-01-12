/**
 * Angular UI-Routing
 */
angular.module('layout')

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    //SET Route Unique AND Layouts
   $stateProvider
    .state('login.oauth', {
      url: "/oauth",
      templateUrl: 'modules/oauth/views/login.html',
      controller: "oauth.login"
    })
    .state('default.home', {
      url: '/home',
      templateUrl: 'modules/home/views/index.html',
      controller: 'home.index'
    })
    .state('default.error', {
      url: '/error',
      templateUrl: 'modules/error/views/70.html',
      controller: 'home.error'
    });

}]);
