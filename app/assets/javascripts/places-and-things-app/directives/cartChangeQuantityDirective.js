PlacesAndThings
.directive('changeQuantity', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      templateUrl: 'cart/cartItemQuantityButtons.html'
  };
});