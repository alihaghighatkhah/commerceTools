/**
 * @name cents
 * @summery filter for fixing 2 floating points for cents of price and separating using comma
 *
 **/
app.filter('cents', [function () {
  return function (txt) {
    return parseFloat(txt).toFixed(2).toString().replace('.', ',');
  };
}]);
