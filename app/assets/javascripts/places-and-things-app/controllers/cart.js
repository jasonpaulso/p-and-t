PlacesAndThings
  .controller('CartCtrl', ['$scope', '$rootScope', 'CartService',
    function($scope, $rootScope, CartService) {


      var cart = $scope;

      cart.updateCart = function(){
        CartService.retrieveCart()
        .then(function(response) {
          cart.current_cart = response.data.cart_products;
          cart.totalItems = response.data.total_items
          cart.totalPrice = response.data.total_value;
          changeNavCartQuantity(cart.totalItems);
        });
      };
      
      cart.changeItemQuantity = function(product, value) {
          CartService.changeItemQuantity(product, value)
          .then(function(response) {
            cart.updateCart();
          });
      };

      function changeNavCartQuantity(totalItems) {
        angular.element($("#cartItemsTotal")).scope().quantity = totalItems;
      };

      $rootScope.$on("AddItemToCart", function(){
        $scope.updateCart();
      });

      cart.updateCart();
    }
  ]);
