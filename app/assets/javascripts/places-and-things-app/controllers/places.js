PlacesAndThings
.controller('PlacesCtrl', PlacesCtrl);

PlacesCtrl.$inject = ['$scope','PlaceService'];

function PlacesCtrl($scope, PlaceService) {

  places = $scope
  places.cities = [];

  places.getPlaces = function() 
  {PlaceService.placesIndex()
    .then(function(response) {
      places.cities = response.data;
    });}

    places.getPlaces();
  };

