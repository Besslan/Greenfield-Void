angular.module('app1')
	.component('userinfo', {
		controller : function($http){
			this.logout=() => {
			$http({
			method:'GET',
			url:'/logout'
			
		}).then(function onSuccess(response){
				window.location.href = 'index.html'
			})
	}
		
	},
	templateUrl:'userinfo.html'
	})
