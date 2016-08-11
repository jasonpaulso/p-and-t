PlacesAndThings
  .controller('CartCtrl', ['$scope', '$rootScope', 'CartService',
    function($scope, $rootScope, CartService) {

      var cart = $scope;
      var totalItems;
      var totalPrice;


      cart.current_cart=[];

      cart.updateCart = function(){
        CartService.retrieveCart()
        .then(function(response) {
          cart.current_cart = response.data;
          cart.totalItems = totalItems();
          cart.totalPrice = totalPrice();
          changeNavCartQuantity(cart.totalItems);
        });
      };

      cart.changeItemQuantity = function(product, value) {
          CartService.changeItemQuantity(product, value)
          .then(function(response) {
            cart.updateCart();
          });
      };

      var totalItems = function() {

        var totalItems = 0;
        for(var i=0; i<cart.current_cart.length; i++){
          totalItems = totalItems + cart.current_cart[i].quantity
        };
        return totalItems;
      };

      var totalPrice = function() {
        var totalPrice = 0;
        for(var i=0; i<cart.current_cart.length; i++){
          totalPrice = totalPrice + (cart.current_cart[i].price * cart.current_cart[i].quantity)
        };

        return totalPrice;
      };

      cart.updateCart();

      function changeNavCartQuantity(totalItems) {
        angular.element($("#cartItemsTotal")).scope().quantity = totalItems;
      };

      $rootScope.$on("AddItemToCart", function(){
        $scope.updateCart();
      });

    }
  ]);