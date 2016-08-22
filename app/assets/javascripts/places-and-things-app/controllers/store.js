PlacesAndThings
.controller('StoreCtrl', StoreCtrl);

function StoreCtrl($scope, StoreService, $stateParams, $rootScope) {

  var store = $scope
  ;
  $scope.countryFilter = {};

  store.searchCities = [
    {name: "Sweden"},
    {name: "Denmark"},
    {name: "Finland"},
  ];

  $scope.select= function(item) {
         $scope.selected = item; 
  };
  $scope.isActive = function(item) {
         return $scope.selected === item;
  };

  StoreService.getStore()
  .then(function(response) {
    store.products = response.data;;
  });

  store.addItemtoCart = function(product, quantity) {

    StoreService.addItemtoCart(product, quantity);

  };

  // store.resultOrder = function(x) {
  //   store.orderBy = x;
  // }


}