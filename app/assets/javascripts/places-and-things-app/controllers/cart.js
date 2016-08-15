PlacesAndThings

.controller('CartCtrl', ['$scope', '$rootScope', 'CartService', '$http',
  
  function($scope, $rootScope, CartService, $http) {

    var cart = $scope;
    cart.user = {};

    cart.updateCart = function(){
      CartService.retrieveCart()
      .then(function(response) {
        cart.current_cart = response.data.cart_products;
        cart.totalItems = response.data.total_items;
        cart.totalPrice = response.data.total_value;
      });
    }

    cart.changeItemQuantity = function(product, value) {
      CartService.changeItemQuantity(product, value)
      .then(function() {
        $rootScope.$broadcast("UpdateCart");
      });
    }

    cart.submitForm = function(user) {
      CartService.updateCartUser(user)
      .then(function(response){
        $rootScope.$broadcast("UpdateCart");
      });

    }

    cart.clearCart = function() {
      CartService.clearCart();
    }

    cart.checkout = function() {
      alert("Thanks for clicking, but checkout is disabled at this time.")
    }

    cart.$on("UpdateCart", function(){
      cart.updateCart();
    });

    cart.updateCart();

  }]);


