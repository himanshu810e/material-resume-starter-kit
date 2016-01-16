(function(){

  angular
       .module('recentWorkModule')
       .controller('RecentWorkController', [
          'recentWorkService', '$mdSidenav', '$mdBottomSheet', '$log', '$q','$location','$sce','$scope',
          RecentWorkController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function RecentWorkController( recentWorkService, $mdSidenav, $mdBottomSheet, $log, $q, $location,$sce, $scope) {
    var self = this;
	$scope.currentUrl = $sce.trustAsResourceUrl("https://github.com/*");
    self.recentWorkItems    = [ ];
	self.someConstant = 'Himanshu The Great';
    // Load all registered menu items

    recentWorkService
          .loadAllRecentWorkItems()
          .then( function( recentWorkItems ) {
            self.recentWorkItems    = [].concat(recentWorkItems);
			console.log(self.recentWorkItems);
          });

    }

  }

)();
