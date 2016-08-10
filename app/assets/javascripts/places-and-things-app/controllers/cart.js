PlacesAndThings
    .controller('CartCtrl', CartCtrl);
    function CartCtrl($scope, $rootScope, $http) {
      $http.get('api/store/current_cart')
        .then(function(response) {
        console.log(response);
      });
    }