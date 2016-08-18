PlacesAndThings
.controller('StoreCtrl', StoreCtrl);

function StoreCtrl($scope, StoreService, $stateParams, $rootScope) {

  var store = $scope

 StoreService.getStore()
  .then(function(response) {
    store.products = response.data;
  });

  store.addItemtoCart = function(product, quantity) {
    
    StoreService.addItemtoCart(product, quantity);
    
  };

  store.resultOrder = function(x) {
    store.orderBy = x;


  }

  // $scope.resetSearch = function(){$scope.quantity = "";}

}