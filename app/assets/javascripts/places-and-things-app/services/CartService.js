PlacesAndThings
.service('CartService', CartService);
  function CartService($http, $q) {

    this.cart;
    this.cart = this.retrieveCart;

    this.retrieveCart = function() {
      return $http.get('api/store/current_cart')
    }

    //     this.cartTotal = function() {
    //   var totalItems = 0;
    //   for(var i=0; i<this.retrieveCart().length; i++){
    //     totalItems = totalItems + cart.current_cart[i].quantity
    //   }
    //   return totalItems;
    // }


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

