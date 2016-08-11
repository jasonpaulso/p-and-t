PlacesAndThings
.service('CartService', CartService);
function CartService($http, $q) {

  this.retrieveCart = function() {
    return $http.get('api/store/current_cart')
  }

  this.changeItemQuantity = function(product, value) {
    return $http.post('api/store/change_cart_product_quantity', {product_id: product.id, change: value});
  };

};

