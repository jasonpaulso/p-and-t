PlacesAndThings
.controller('PlaceCtrl', PlaceCtrl);
function PlaceCtrl($scope, StoreService, $stateParams, PlaceService, $rootScope, $state) {

  var place = $scope;
  var placeId = $stateParams.placeId;
  var imageRootURL = "/assets/places-maps/";


  PlaceService.placeShow(placeId)
  .then(function(response) {
    place.destinations = response.data.destinations;
    place.map = imageRootURL + response.data.map;
    place.name = response.data.name;
  });
}