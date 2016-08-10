PlacesAndThings
    .controller('CartCtrl', CartCtrl);
    function CartCtrl($scope, $rootScope, $http) {
      $http.get('api/store/current_cart')
        .then(function(response) {
        
        $scope.current_cart = response.data;
        console.log($scope.current_cart);
      });
    }