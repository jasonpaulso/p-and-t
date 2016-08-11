PlacesAndThings
.controller('CartCtrl', ['$scope', '$rootScope', '$http', 'CartService',
  function($scope, $rootScope, $http, CartService) {

    var cart = $scope;


    $rootScope.$on("AddItemToCart", function(event, arg){
      $scope.updateCart();
    });

    cart.current_cart = [];

    cart.updateCart = function(){

      CartService.retrieveCart()
      .then(function(response) {
        cart.current_cart = response.data;
        cart.totalItems = totalItems();
        cart.totalPrice = totalPrice();

      })};

      var totalItems = function() {

        var totalItems = 0;
        for(var i=0; i<cart.current_cart.length; i++){
          totalItems = totalItems + cart.current_cart[i].quantity
        }
        changeNavCartQuantity(totalItems);
        return totalItems;
      }

      $scope.changeItemQuantity = function(product, value) {
        $http.post('api/store/change_cart_product_quantity', {product_id: product.id, change: value})
        .then(function(response) {
          cart.updateCart();

        });
      }

    var totalPrice = function() {
          var totalPrice = 0;
          for(var i=0; i<cart.current_cart.length; i++){
            totalPrice = totalPrice + (cart.current_cart[i].price * cart.current_cart[i].quantity)
          }

          return totalPrice;
    };

      cart.updateCart();

    function changeNavCartQuantity(totalItems) {
        angular.element($("#cartItemsTotal")).scope().quantity = totalItems;
      };

    }
  ]);