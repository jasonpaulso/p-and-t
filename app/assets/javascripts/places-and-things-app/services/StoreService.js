PlacesAndThings
.service('StoreService', StoreService);
function StoreService($http, $rootScope) {

  this.getStore = function() {
    return $http.get("api/store/")
  }

  this.addItemtoCart = function(product, quantity) {
    $http.post('api/cart/add_to_cart', {product_id: product.id, quantity: quantity})
    .then(function(response) {
      $rootScope.$broadcast("UpdateCart");
    });

  };

  this.productShow = function(productID) {
    return $http.get('api/store/product/' + productID)
  }
};