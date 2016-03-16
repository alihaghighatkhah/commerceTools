/**
 * @name cents
 * @summery filter for fixing 2 floating points for cents of price and separating using comma
 *
 **/
app.filter('cents', function () {
  return function (text) {
    console.log(text);
    return parseFloat(text).toFixed(2).replace(".", ",");
  };
});
