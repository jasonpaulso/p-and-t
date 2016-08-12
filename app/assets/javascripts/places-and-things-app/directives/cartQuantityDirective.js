PlacesAndThings
.directive('cartTotal', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      template: '<span>[{{totalItems || "0"}}]</span>'
  };
});