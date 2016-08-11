PlacesAndThings
.service('CartService', CartService);
function CartService($http, $q) {

  this.cart;
  this.cart = this.retrieveCart;

  this.retrieveCart = function() {
    return $http.get('api/store/current_cart')
  }
};

