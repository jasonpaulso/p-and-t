PlacesAndThings
.service('CartService', CartService);
function CartService($http, $rootScope) {

  this.retrieveCart = function() {
    return $http.get('api/cart/show')
  }

  this.changeItemQuantity = function(product, value) {
    return $http.patch('api/cart/update', {product_id: product.product_id, change: value});
  };

  this.getCartQuantity = function() {
    return $http.get('api/cart/show') 
  }

  this.clearCart = function() {
    $http.delete('api/cart/clear_cart')
    .then(function(response) {
    $rootScope.$broadcast("UpdateCart");
  });
  }

};





