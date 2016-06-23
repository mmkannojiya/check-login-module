angular.module('myTmoApp',['myTmoApp.loginModule','ui.bootstrap']);
angular.module('myTmoApp.loginModule').config(function ($stateProvider ,$locationProvider, $urlRouterProvider,LOGIN_CONST) {
  //$urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(true).hashPrefix('!');
  $stateProvider
      .state('logout', {
        url: '/logout',
		template:'<h1>Welcome {{username}}</h1>',
		controller: function($scope){
			$scope.username = sessionStorage.getItem('username') ;
		}
      });
	  
	LOGIN_CONST.LOGIN_URL = '/validateOtherUser';
	LOGIN_CONST.NEXT_STATE = 'logout';
console.log('stateProvider',$stateProvider.state);
  })
  
