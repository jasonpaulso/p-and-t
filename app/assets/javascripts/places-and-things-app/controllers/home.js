PlacesAndThings

.controller('HomeCtrl', ['$scope', '$rootScope', 'CartService', '$http',
  
  function($scope, $rootScope, CartService, $http) {

    // $rootScope.userEmail = "";

    $scope.checkForUser = function() {
      CartService.retrieveCart()
      .then(function(response){
        $scope.userEmail = response.data.user_email;
        // console.log(response.data.user_email);
      })

    }

      

      $scope.submitForm = function(user) {
      CartService.updateCartUser(user)
      .then(function(response){
        $rootScope.$broadcast("UpdateCart");
      });

    }

    $scope.checkForUser();

  }]);


