/**
 *
 * @name tabs
 * @param $rootScope {object}
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
        $rootScope.$apply();
      });

    }
  };
}]);
