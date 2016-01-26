(function () {
  angular
    .module('app.bst')
    .controller('BSTController', BSTController);

  /**
   * The BSTController code.
   */
  BSTController.$inject = ['$log'];
  function BSTController ($log) {
    var vm = this;

    // Properties

    // Methods

    /**
     * This function does any initialization work the
     * controller needs.
     */
    (function activate () {
      $log.debug('Activated BSTController.');
    })();
  }
})();