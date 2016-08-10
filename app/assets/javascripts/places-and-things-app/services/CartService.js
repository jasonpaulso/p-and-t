PlacesAndThings
.service('CartService', CartService);
  function CartService($http) {

    this.retrieveCart = function() {
      return $http.get('api/store/current_cart')
    }



};

