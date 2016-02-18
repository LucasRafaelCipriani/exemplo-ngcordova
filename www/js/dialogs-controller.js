(function() {
	'use strict';

	angular.module('app').controller('DialogsCtrl',
			[ '$cordovaDialogs','$cordovaVibration','$cordovaNetwork', DialogCtrl ]);

	function DialogCtrl($cordovaDialogs,$cordovaVibration,$cordovaNetwork) {
		var vm = this;
		
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
		
		this.beep = function() {
			$cordovaDialogs.beep(3);
		};
		this.prompt = function() {
			$cordovaDialogs.prompt('Please Login', "Custom title",['a','b']).then(
					function(result) {
						$cordovaDialogs.alert("Input: " + result.input1
								+ "\n Button index : " + result.buttonIndex);
					});

		};
		vm.confirm = function() {
			$cordovaDialogs.confirm('Are you sure?', "Custom title",
					[ "Sim", "Na na" ]).then(function(buttonIndex) {
				$cordovaDialogs.alert("Button index : " + buttonIndex);
			});
		};
		vm.alert = function() {

			$cordovaDialogs.alert('Wow!', alertClosed, "titulo", "dismiss");
		};
		
		function alertClosed() {
			$cordovaDialogs.alert('close');
		}
		vm.vib = function() {
		$cordovaVibration.vibrate(500);
		}
		/*
		 * $scope.alert = function () { $scope.action = "Alert";
		 * $cordovaDialogs.alert('Wow!'); };
		 * 
		 * $scope.confirm = function () { $scope.action = "Confirm";
		 * $cordovaDialogs.confirm('Are you sure?', "Custom
		 * title").then(function (buttonIndex) { $cordovaDialogs.alert("Button
		 * index : " + buttonIndex); }); };
		 * 
		 * $scope.prompt = function () { $scope.action = "Prompt";
		 * $cordovaDialogs.prompt('Please Login', "Custom title").then(function
		 * (result) { $cordovaDialogs.alert("Input: " + result.input1 + "\n
		 * Button index : " + result.buttonIndex); }); };
		 * 
		 * $scope.beep = function () { $scope.action = "Beep";
		 * $cordovaDialogs.beep(3); };
		 */

	}
})();
