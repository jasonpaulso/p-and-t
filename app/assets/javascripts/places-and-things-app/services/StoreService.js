PlacesAndThings
.service('StoreService', StoreService);
function StoreService($http, $rootScope) {

  this.getStore = function() {
    return $http.get("api/products/")
  }

    this.addItemtoCart = function(product) {
    $http.post('api/store/add_to_cart', {product_id: product.id})
    .then(function(response) {
      $rootScope.$broadcast("AddItemToCart", product);
    });

  };

};



