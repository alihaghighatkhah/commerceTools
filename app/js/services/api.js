/**
 *
 * @name Api
 * @summary Global service for data handling with API
 * @param {service} $http - Angular builtin service
 * @param {service} Loader - Calls loader service before http request and after the response
 * @returns {object|Array} Result of http call
 *
 **/
app.service('Api', [
  '$http', 'Loader',
  function ($http, Loader) {

    /** products namespace */
    this.products = {};


    /**
     * @name products.getById
     * @param {number} id - the id of the product to get details for
     * @todo this gets a local json file, in the actual request, we pass the id too
     * @returns {object} data
     */
    this.products.getById = function (id) {
      Loader.global.show();
      return $http.get(app.apiBaseUrl + 'product-detail.json').success(function (response) {
        /** hide the loader successful ajax request */
        Loader.global.hide();
        return response.data;
      });
    };


  }
]);