PlacesAndThings
.controller('StoreCtrl', StoreCtrl);

function StoreCtrl($scope, $rootScope, $http) {

  $http.get("api/products/")
  .then(function(response) {
    $scope.products = response.data;
  });

  $scope.productShow = function(productID) {
    $http.get('api/products/' + productID)
    .then(function(response) {

    });
  }


  $scope.addItemtoCart = function(product) {
    $http.post('api/store/add_to_cart', {product_id: product.id})
    .then(function(response) {
      $rootScope.$broadcast("AddItemToCart", product);
      // alert("Added!");
    });

  };
}