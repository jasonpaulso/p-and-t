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
      console.log(response.data);
    });
  }

      $scope.changeItemQuantity = function(value) {
      $http.post('api/store/change_cart_product_quantity', {product_id: product.id, change: value})
      .then(function(response) {
        console.log(response.data);
        
      });
    }
          $scope.addItemtoCart = function(product) {
          $http.post('api/store/add_to_cart', {product_id: product.id})
          .then(function(response) {
          console.log(response.data);
        
      });
      
    };
}