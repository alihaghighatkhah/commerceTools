/**
 *
 * @name mainHeader
 * @summery
 *   The header of the website, defined as a partial template for simplicity reasons and clearing index.html file
 *   should be used as <main-header></main-header> tag or as main-header attribute which I prefer the former
 *
 */
app.directive('mainHeader', function () {
  return {
    templateUrl: '/templates/misc/main-header.html',
    replace: true
  };
});
