/**
 *
 * Defining the Angular app and injecting dependencies to it
 *
 *
 */


var app = angular.module('app',
  ['ui.router', 'ngSanitize']
);


/**
 *
 * This is the base url of all XHR requests. it's easy to change the dev server to dist server
 *
 */
app.apiBaseUrl = '/api/';


app.config(['$stateProvider', '$logProvider', '$urlRouterProvider',
  function ($stateProvider, $logProvider, $urlRouterProvider) {
    $logProvider.debugEnabled(true);

    /**
     *
     * Defining states
     * Here only one state is defined which is the detail page of the product
     * as shown in PNG outputs
     *
     */
    $stateProvider

    .state('products', {
      url: "/products/:id",
      templateUrl: "templates/products/main.html",
      controller: 'ProductsController'
    });

    $urlRouterProvider.otherwise('/');


  }
]);

