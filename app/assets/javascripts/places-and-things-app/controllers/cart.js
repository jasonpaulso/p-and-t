PlacesAndThings
.controller('CartCtrl', ['$scope', '$rootScope', '$http', 'CartService',
  function($scope, $rootScope, $http, CartService) {

    var cart = $scope;

    cart.current_cart = {};
    $rootScope.totalItems = "";


    CartService.retrieveCart()
    .then(function(response) {
      cart.current_cart = response.data;
      $rootScope.totalItems = totalItems();

    })

    var totalItems = function() {
      var totalItems = 0;
      for(var i=0; i<cart.current_cart.length; i++){
        totalItems = totalItems + cart.current_cart[i].quantity
      }
      return totalItems;
    }

  }]);