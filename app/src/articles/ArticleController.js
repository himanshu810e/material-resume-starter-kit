(function(){

  angular
       .module('articleModule')
       .controller('ArticleController', [
          'articleService', '$mdSidenav', '$mdBottomSheet', '$log', '$q','$location','$sce','$scope',
          ArticleController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function ArticleController( articleService, $mdSidenav, $mdBottomSheet, $log, $q, $location,$sce, $scope) {
    var self = this;
	$scope.currentUrl = $sce.trustAsResourceUrl("https://github.com/*");
    self.articleItems    = [ ];
	self.someConstant = 'Himanshu The Great';
    // Load all registered menu items

    articleService
          .loadAllArticleItems()
          .then( function( articleItems ) {
            self.articleItems    = [].concat(articleItems);
			console.log(self.articleItems);
          });

    }

  }

)();
