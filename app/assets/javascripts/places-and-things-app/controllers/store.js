PlacesAndThings
.controller('StoreCtrl', StoreCtrl);

StoreCtrl.$inject = ['$scope','StoreService'];

function StoreCtrl($scope, StoreService) {

  var store = $scope;

  store.countryFilter = {};

  store.searchCities = [
    {name: "Sweden"},
    {name: "Denmark"},
    {name: "Finland"},
  ];

  store.select= function(item) {
         $scope.selected = item; 
  };
  store.isActive = function(item) {
         return $scope.selected === item;
  };

  StoreService.getStore()
  .then(function(response) {
    store.products = response.data;
  });

  store.addItemtoCart = function(product, quantity) {

    StoreService.addItemtoCart(product, quantity);

  };

}