(function(){

  angular
       .module('layoutModule')
       .controller('LayoutController', [
          'layoutService', '$mdSidenav', '$mdBottomSheet', '$log', '$q','$location','$window',
          LayoutController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function LayoutController( layoutService, $mdSidenav, $mdBottomSheet, $log, $q, $location,$window) {
    var self = this;

    self.selected     = null;
    self.menuItems    = [ ];
    self.selectMenuItem   = selectMenuItem;
    self.toggleList   = toggleMenuItemsList;
    self.showContactOptions  = showContactOptions;

    // Load all registered menu items

    layoutService
          .loadAllMenuItems()
          .then( function( menuItems ) {
            self.menuItems    = [].concat(menuItems);
            self.selected = menuItems[0];
          });

    // *********************************
    // Internal methods
    // *********************************
	function openWindow(url){
	$window.open(url);
	}
    /**
     * First hide the bottomsheet IF visible, then
     * hide or Show the 'left' sideNav area
     */
    function toggleMenuItemsList() {
      var pending = $mdBottomSheet.hide() || $q.when(true);

      pending.then(function(){
        $mdSidenav('left').toggle();
      });
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectMenuItem ( menuItem ) {
      self.selected = angular.isNumber(menuItem) ? $scope.menuItems[menuItem] : menuItem;
      self.toggleList();
	  $location.path(menuItem.link);
    }

    /**
     * Show the bottom sheet
     */
    function showContactOptions($event) {
        var menuItem = self.selected;

        return $mdBottomSheet.show({
          parent: angular.element(document.getElementById('content')),
          templateUrl: './src/users/view/contactSheet.html',
          controller: [ '$mdBottomSheet', ContactPanelController],
          controllerAs: "cp",
          bindToController : true,
          targetEvent: $event
        }).then(function(clickedItem) {
          clickedItem && $log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * Bottom Sheet controller for the Avatar Actions
         */
        function ContactPanelController( $mdBottomSheet ) {
          this.user = user;
          this.actions = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
            { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
            { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
          ];
          this.submitContact = function(action) {
            $mdBottomSheet.hide(action);
          };
        }
    }

  }

})();
