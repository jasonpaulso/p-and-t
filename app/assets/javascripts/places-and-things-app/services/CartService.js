PlacesAndThings
.service('CartService', CartService);
  function CartService($http, $q) {

    this.retrieveCart = function() {
      return $http.get('api/store/current_cart')
    }



};

// PlacesAndThings
// .service('CartService', CartService);
//   function CartService($http, $q) {

//     this.retrieveCart = function() {
//       var deferred = $q.defer();
//       $http({
//         method: "GET",
//         url: 'api/store/current_cart'
//       }).success(function(data){
//         deferred.resolve(data);
//       }).error(function(){
//         deferred.reject("There was an error.")
//       })
//       return deferred.promise;
//     }



// };

// PlacesAndThings
//     .factory('cartFactory', ['$http', function($http) {
//         var cartResponse = {};
//         var baseUrl = 'api/store/current_cart'

//         cartService.getCart = function() {
//           return $http.get(baseUrl);
//         }
//         return cartFactory;
//     }]);

