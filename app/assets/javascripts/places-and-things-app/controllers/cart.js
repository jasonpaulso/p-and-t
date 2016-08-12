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
      };
      
      cart.changeItemQuantity = function(product, value) {
          CartService.changeItemQuantity(product, value)
          .then(function() {
            $rootScope.$broadcast("UpdateCart");
          });
      };

    cart.submitForm = function(user) {
      $http.patch('api/cart/update', {
        change: "user",
        user_name: user.username, 
        user_email: user.email,
        user_zip: user.zip
      })
      .then(function(response){
        console.log(user);

      });
      
    }



      cart.clearCart = function() {
        CartService.clearCart();
      }

      cart.$on("UpdateCart", function(){
        cart.updateCart();
      });

      cart.updateCart();
      
    


    

  }]);

 
