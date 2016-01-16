(function(){

  angular
       .module('projectModule')
       .controller('ProjectController', [
          'projectService', '$mdSidenav', '$mdBottomSheet', '$log', '$q','$location',
          ProjectController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function ProjectController( projectService, $mdSidenav, $mdBottomSheet, $log, $q, $location) {
    var self = this;

    
    self.projectItems    = [ ];
	self.someConstant = 'Himanshu The Great';
    // Load all registered menu items

    projectService
          .loadAllProjectItems()
          .then( function( projectItems ) {
            self.projectItems    = [].concat(projectItems);
			console.log(self.projectItems);
          });

    }

  }

)();
