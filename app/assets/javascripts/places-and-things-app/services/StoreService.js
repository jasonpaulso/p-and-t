PlacesAndThings
.service('StoreService', StoreService);
function StoreService($http, $rootScope, $stateParams) {

  this.getStore = function() {
    return $http.get("api/store/")
  }

  this.addItemtoCart = function(product) {
  $http.post('api/cart/add_to_cart', {product_id: product.id})
  .then(function(response) {
    $rootScope.$emit("AddItemToCart", product);
  });

};

  this.productShow = function(productID) {
    return $http.get('api/store/product/' + productID)
  }
};



