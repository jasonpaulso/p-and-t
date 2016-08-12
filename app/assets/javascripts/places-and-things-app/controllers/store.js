PlacesAndThings
.controller('StoreCtrl', StoreCtrl);

function StoreCtrl($scope, StoreService, $stateParams) {

  var store = $scope

 StoreService.getStore()
  .then(function(response) {
    store.products = response.data;
  });

  store.addItemtoCart = function(product) {
    StoreService.addItemtoCart(product);

  };

  store.resultOrder = function(x) {
    store.orderBy = x;
  }
  
}