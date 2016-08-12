PlacesAndThings
.controller('ProductCtrl', ProductCtrl);
function ProductCtrl($scope, StoreService, $stateParams) {

  var product = $scope;

  var productID = $stateParams.productId;

  StoreService.productShow(productID)
  .then(function(response) {
    product.details = response.data;
    console.log(product.details)
  });

    product.addItemtoCart = function(product) {
    StoreService.addItemtoCart(product);
  };
}