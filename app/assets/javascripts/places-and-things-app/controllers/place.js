PlacesAndThings
.controller('PlaceCtrl', PlaceCtrl);
function PlaceCtrl($scope, StoreService, $stateParams, PlaceService, $rootScope, $state) {

  var place = $scope;
  var placeId = $stateParams.placeId;

  PlaceService.placeShow(placeId)
  .then(function(response) {
    place.destinations = response.data.destinations;
  
  });
}