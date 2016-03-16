/**
 *
 * @name ProductsController
 * @param {object} $scope - the scope object specific for this controller
 * @param {object} $stateParams - Native Angular JS object containing all parameters passed to current state
 * @param {service} Api - See app/js/services/app.js
 *
 * @summery
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
