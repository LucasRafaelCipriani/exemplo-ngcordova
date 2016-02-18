
angular.module('app', ['ngCordova','ionic'])

.run(function($ionicPlatform, $cordovaLocalNotification,$cordovaNetwork) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    

  });
}).config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

	.state('dialog', {
		url : '/dialog',
		templateUrl : 'pages/dialog.html'
	})
	
	$urlRouterProvider.otherwise('/dialog');
});
