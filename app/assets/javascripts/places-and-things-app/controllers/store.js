PlacesAndThings
.controller('StoreCtrl', StoreCtrl);

function StoreCtrl($scope, $rootScope, $http) {

  $http.get("api/products/")
  .then(function(response) {
    $scope.products = response.data;
  });
  
  $scope.productShow = function(productID) {
    $http.get('api/products/' + productID)
    .then(function(response) {
      console.log(response.data);
    });
  }
}