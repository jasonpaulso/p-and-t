PlacesAndThings
    .controller('CartCtrl', ['$scope', '$rootScope', '$http', 'CartService',
    function($scope, $rootScope, $http, CartService) {


      this.current_cart = CartService.retrieveCart()
      .then(function(response) {
          $scope.current_cart = response.data;
          cart_item_details($scope.current_cart[0]);
        })

        var cart_item_details = function(item) {
          $http.get('/api/products/' + item.id)
            .then(function(response) {
            $scope.cart_item_detail = response.data;
            console.log($scope.cart_item_detail);
          });
        }
        // cart_item_details($scope.current_cart[0]);


    }]);