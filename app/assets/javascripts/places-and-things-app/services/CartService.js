PlacesAndThings
.service('CartService', CartService);
function CartService($http) {

  this.retrieveCart = function() {
    return $http.get('api/cart/show')
  }

  this.changeItemQuantity = function(product, value) {
    return $http.post('api/cart/update', {product_id: product.product_id, change: value});
  };

};





