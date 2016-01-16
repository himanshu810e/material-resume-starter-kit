angular
	  .module('profileApp', ['ngMaterial', 'layoutModule', 'projectModule', 'recentWorkModule', 'articleModule','ngRoute'])
	  .config(function($mdThemingProvider, $mdIconProvider,$routeProvider,$sceDelegateProvider){

		  $mdIconProvider
			  .defaultIconSet("./assets/svg/avatars.svg", 128)
			  .icon("menu"       , "./assets/svg/menu.svg"        , 24)
			  .icon("share"      , "./assets/svg/share.svg"       , 24)
			  .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
			  .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
			  .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
			  .icon("phone"      , "./assets/svg/phone.svg"       , 512);

			  $mdThemingProvider.theme('default')
				  .primaryPalette('deep-orange')
				  .accentPalette('cyan');
		$sceDelegateProvider.resourceUrlWhitelist([
			// Allow same origin resource loads.
			'self',
			// Allow loading from our assets domain.  Notice the difference between * and **.
			'https://github.com/**'
		]);
		// Join Team Control Panel
        $routeProvider.when('/aboutme', {
            controller: 'LayoutController',
            templateUrl: 'src/view/aboutme.html',

        // Find Teammates Control Panel
        }).when('/experience', {
            controller: 'ProjectController',
            templateUrl: '/src/view/experience.html',

        // All else forward to the Join Team Control Panel
        }).when('/articles', {
            controller: 'LayoutController',
            templateUrl: '/src/view/articles.html',

        // All else forward to the Join Team Control Panel
        }).when('/recent', {
            controller: 'RecentWorkController',
            templateUrl: '/src/view/recent.html',

        // All else forward to the Join Team Control Panel
        }).when('/contact', {
            controller: 'LayoutController',
            templateUrl: '/src/view/contact.html',

        // All else forward to the Join Team Control Panel
        }).otherwise({redirectTo:'/aboutme'})

	  }
);