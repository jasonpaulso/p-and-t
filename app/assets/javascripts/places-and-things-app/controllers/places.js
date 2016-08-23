PlacesAndThings

.controller('PlacesCtrl', ['$scope','$stateParams', 'PlaceService', '$http',

  function($scope, $stateParams, PlaceService, $http) {

    var place = $scope;
    // var placeId = $stateParams.placeId;

  // PlaceService.placeShow(1)
  //   .then(function(response) {
  //   place.destinations = response.data.destinations;
  // });

// place.getPlace();

var url = 'api/place/';
// var placeId = $stateParams.placeId;

  // $http.get(url + placeId)
  //   .then(function(response) {
  //   place.destinations = response.data.destinations;
  //   console.log(response);
  // });
  // console.log(placeId);

}]);

