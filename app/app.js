angular.module('myTmoApp',['myTmoApp.loginModule','ui.bootstrap']);
angular.module('myTmoApp.loginModule').config(function ($stateProvider ,$locationProvider, $urlRouterProvider) {
  //$urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(true).hashPrefix('!');
  $stateProvider
      .state('logout', {
        url: '/logout',
		template:'<h1>Got Logout</h1>'
      });
console.log('stateProvider',$stateProvider.state);
  })
  
