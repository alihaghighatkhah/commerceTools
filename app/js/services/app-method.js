/**
 *
 * @name run
 * @param $rootScope {object} - the scope object of app which wont change in app life cycle
 * @param Loader {service} - See js/services/loader.js
 *
 */
app.run(['$rootScope', 'Loader',
  function ($rootScope, Loader) {

    $rootScope.flags = {
      menu: false
    };

    $rootScope.$on('$stateChangeStart', function() {
      Loader.global.hide();
    });
  }
]);
