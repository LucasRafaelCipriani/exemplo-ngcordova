# exemplo-ngcordova
 coisas importante dioalog e vibration
adicionar isso

no projeto
cordova plugin add cordova-plugin-dialogs
cordova plugin add cordova-plugin-vibration


.run(function($ionicPlatform, $cordovaLocalNotification,$cordovaNetwork) {

e essa parada no modulo metodo run

ja no network info add o modulo 
cordova plugin add cordova-plugin-network-information

e essa parada na classe

document.addEventListener("deviceready", function () {

		    vm.type = $cordovaNetwork.getNetwork()

		    vm.isOnline = $cordovaNetwork.isOnline()

		    vm.isOffline = $cordovaNetwork.isOffline()


		    // listen for Online event
		    $rootScope.$on('networkOffline', function(event, networkState){
		      var onlineState = networkState;
		    })

		    // listen for Offline event
		    $rootScope.$on('networkOffline', function(event, networkState){
		      var offlineState = networkState;
		    })

		  }, false);

