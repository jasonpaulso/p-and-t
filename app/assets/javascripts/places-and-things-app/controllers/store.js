PlacesAndThings
.controller('StoreCtrl', StoreCtrl);

function StoreCtrl($scope, StoreService) {

  var store = $scope

 StoreService.getStore()
  .then(function(response) {
    store.products = response.data;
  });

  store.addItemtoCart = function(product) {
    StoreService.addItemtoCart(product);

  };

  // $scope.productShow = function(productID) {
  //   $http.get('api/products/' + productID)
  //   .then(function(response) {

  //   });
  // }
}