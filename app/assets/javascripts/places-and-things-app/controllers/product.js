PlacesAndThings
.controller('ProductCtrl', ProductCtrl);
function ProductCtrl($scope, StoreService, $stateParams, CartService, $rootScope) {

  var product = $scope;

  var productID = $stateParams.productId;

  StoreService.productShow(productID)
  .then(function(response) {
    product.details = response.data;
    product.checkInCart();
  });

    product.addItemtoCart = function(product, quantity) {
    StoreService.addItemtoCart(product, quantity);
  };

  product.checkInCart = function() {
    CartService.retrieveCart()
    .then(function(response){
      response.data.cart_products.filter(function (item) { 
        if (item.product_id === product.details.id) {
          product.inCart = item.quantity
        } 

      });
    })
  }

  $rootScope.$on("UpdateCart", function(){
      product.checkInCart();
    });
}