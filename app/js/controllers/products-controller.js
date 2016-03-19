/**
 *
 * @name ProductsController
 * @param {object} $scope - the scope object specific for this controller
 * @param {object} $stateParams - Native Angular JS object containing all parameters passed to current state
 * @param {service} Api - See app/js/services/app.js
 *
 * @summery
 *   all the data fetching and usages happen here. I'm initiating purchase item by the least possible quantity and
 *   then it's easy to pass the selected quantity to a purchase Api
 *
 *   as an assumption, I'm passing the id of the item to getById Api, which corrently is a local JSON file,
 *   this means I'm getting details of a single product
 *
 *   because this controller is specific for details of a products, it'll get called on /products/:id route
 *
 */
app.controller('ProductsController', ['$scope', '$stateParams', 'Api',
  function ($scope, $stateParams, Api) {


    // initiating purchase basket
    $scope.purchase = {
      quantity: 1
    };

    Api.products.getById($stateParams.id).success(function (result) {
      $scope.product = result.data;
    });

  }
]);
