PlacesAndThings

.controller('HomeCtrl', ['$scope', '$rootScope', 'CartService', '$http',
  
  function($scope, $rootScope, CartService, $http) {

        $scope.submitForm = function(user) {
      CartService.updateCartUser(user)
      .then(function(response){
        $rootScope.$broadcast("UpdateCart");
      });

    }


  }]);


