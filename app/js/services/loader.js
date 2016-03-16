/**
 *
 * @name Loader
 * @summery global Loader Service for toggling loader bar in the view
 * @param {scope} $rootScope - global scope to use between controllers
 * @callback  anonymous function - (optional) can be called for view manipulations
 *
 **/
app.service('Loader', [
  '$rootScope',
  function ($rootScope) {
    var number = 0;
    this.reset = function () {
      $rootScope.loader = {
        visibility: false
      };
      number = 0;
      return this;
    };

    this.global = {};
    this.global.show = function (type) {
      number++;
      $rootScope.loader = {
        visibility: true
      };
      return this;
    };

    this.global.hide = function () {
      number--;
      if (number <= 0) {
        $rootScope.loader = {
          visibility: false
        };
      }
      return this;
    };

    this.particular = {};
    // target must be angular element or JS selected DOM element
    this.particular.show = function (target) {
      window.angular.element(target).attr('disabled', 'disabled');
      window.angular.element(target).addClass('loading');
    };

    this.particular.hide = function (target) {
      window.angular.element(target).removeClass('loading');
      window.angular.element(target).removeAttr('disabled');
    };

  }
]);