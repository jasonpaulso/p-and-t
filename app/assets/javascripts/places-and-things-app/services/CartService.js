PlacesAndThings
.service('CartService', CartService);
function CartService($http, $rootScope) {

  this.retrieveCart = function() {
    return $http.get('api/cart/show')
  }

  this.changeItemQuantity = function(product, value) {
    return $http.patch('api/cart/update', {product_id: product.product_id, change: value});
  };

  this.updateCartUser = function(user) {
    return $http.patch('api/cart/update', {
      change: "user",
      // user_name: user.username, 
      user_email: user.email,
      // user_zip: user.zip
    });

  }

  this.clearCart = function() {
    $http.delete('api/cart/clear_cart')
    .then(function(response) {
      $rootScope.$broadcast("UpdateCart");
    });
  }



};
