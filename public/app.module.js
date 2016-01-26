/* global angular */

(function () {
  angular
    .module('app', [
      'ngRoute',
      'app.layout',
      'app.bst',
    ])
    .config(config);

  function config ($routeProvider, $locationProvider) {
    // Configure the routes.
    $routeProvider
      .when('/', {
        templateUrl: 'bst/bst.html',
        controller: 'BSTController',
        controllerAs: 'bst',
        activeTab: 'bst'
      })
      .otherwise({
        redirectTo: '/'
      });

    // Make the URLs pretty.
    $locationProvider.html5Mode(true);
  }
})();