(function () {
  angular
    .module('app.main')
    .controller('MainController', MainController);

  /**
   * The MainController code.
   */
  MainController.$inject = ['$log'];
  function MainController ($log) {
    var vm = this;

    // Properties

    // Methods

    /**
     * This function does any initialization work the
     * controller needs.
     */
    (function activate () {
      $log.debug('Activated MainController.');
    })();
  }
})();