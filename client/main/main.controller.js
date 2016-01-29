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
    vm.input1 = null;
    vm.input2 = null;

    // Methods
    vm.add = add;
    vm.subtract = subtract;
    vm.multiply = multiply;
    vm.divide = divide;
    vm.reverseInputs = reverseInputs;

    /**
     * This function does any initialization work the
     * controller needs.
     */
    (function activate () {
      $log.debug('Activated MainController.');
    })();
    
    function add (a, b) {
      return a + b;
    }
    
    function subtract (a, b) {
      return a - b;
    }
    
    function multiply (a, b) {
      return a * b;
    }
    
    function divide (a, b) {
      if (b === 0) {
        return 'can\'t do that';
      } else {
        return a / b;
      }
    }
    
    function reverseInputs () {
      var temp = vm.input1;
      vm.input1 = vm.input2;
      vm.input2 = temp;
    }
  }
})();