PlacesAndThings
    .controller('CartCtrl', ['$scope', '$rootScope', '$http', 'CartService',
    function($scope, $rootScope, $http, CartService) {

      $rootScope.totalItems = ""
      this.current_cart = CartService.retrieveCart()
      .then(function(response) {
          $scope.current_cart = response.data;
          $rootScope.totalItems = $scope.totalItems();
          $scope.totalItems = $scope.totalItems();
        })

        $scope.totalItems = function() {
          var totalItems = 0;
          for(var i=0; i<$scope.current_cart.length; i++){
            totalItems = totalItems + $scope.current_cart[i].quantity
          }
          return totalItems;
        };

    }]);