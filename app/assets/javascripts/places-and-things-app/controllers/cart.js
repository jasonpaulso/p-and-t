PlacesAndThings
.controller('CartCtrl', ['$scope', '$rootScope', '$http', 'CartService',
  function($scope, $rootScope, $http, CartService) {

    var cart = $scope;

    cart.current_cart = [];
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


      cart.addItemtoCart = function(product) {

      $http.post('api/store/add_to_cart', {product_id: product})
      .then(function(response) {
        console.log(response.data);
        
      });
      
    };


    // cart.addItemtoCart(1);

        //     $scope.decrementItems = function(item) {
        //   if (item.quantity <= 1) {return}
        //   item.quantity -= 1;

        // };
        // $scope.incrementItems = function(item) {
        //   item.quantity += 1;

        // };



  }]);