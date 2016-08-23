PlacesAndThings

  .controller('PlacesCtrl', ['$scope', '$rootScope', 'CartService', '$http', '$state', '$location',

    function($scope, $rootScope, CartService, $http, $state, $location) {

      var place = $scope;


          $http.get("api/places/")
          .then(function(response) {
            place.destinations = response.data.destinations;
          });


  // place.getPlace();

}]);

