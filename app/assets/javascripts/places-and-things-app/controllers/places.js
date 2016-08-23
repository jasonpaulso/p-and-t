PlacesAndThings

.controller('PlacesCtrl', ['$scope','$stateParams', 'PlaceService', '$http',

  function($scope, $stateParams, PlaceService, $http) {

    places = $scope

    PlaceService.placesIndex()
      .then(function(response) {
        places.cities = response.data
        console.log(places.cities)
  });


}]);

