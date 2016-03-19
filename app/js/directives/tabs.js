/**
 *
 * @name tabs
 * @param $rootScope {object} - the scope object which wont die in application life cycle
 *
 */
app.directive('tabs', ['$rootScope', function ($rootScope) {
  return {
    link: function ($scope, $element, $attrs) {

      $element.bind('click', function () {

        // initiate tabs if needed
        if ($rootScope.flags.tabs === undefined) {
          $rootScope.flags.tabs = {};
        }

        $rootScope.flags.tabs[$attrs.tabs] = $attrs.index;

        // I need to apply changes manually because no angular function with apply functionality has been used here
        $rootScope.$apply();
      });

    }
  };
}]);
