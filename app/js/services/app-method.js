/**
 *
 * @name run
 * @param $rootScope {object} - the scope object of app which wont change in app life cycle
 * @param Loader {service} - See js/services/loader.js
 *
 * @summery
 *   This is a right place to call functions and define flags and variables in the start of application
 *
 *   Also listeners like $stateChangeStart must be called here to ensure they're not route and state depended.
 *
 */
app.run(['$rootScope', 'Loader',
  function ($rootScope, Loader) {

    $rootScope.flags = {
      menu: false
    };

    $rootScope.$on('$stateChangeStart', function() {

      // I'm hiding the global loader at the begging of route changes
      // to ensure the number of shows is equal to number of hides
      Loader.global.hide();
    });
  }
]);
