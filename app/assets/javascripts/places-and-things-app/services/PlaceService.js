PlacesAndThings
.service('PlaceService', PlaceService);
function PlaceService($http) {

  this.placeShow = function(placeId) {
    return $http.get('api/place/' + placeId)
  }

  this.placesIndex = function(placeId) {
    return $http.get('api/places/')
  }
};