var PlacesAndThings = angular.module('PlacesAndThings', ['ui.router','templates']);

PlacesAndThings.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

PlacesAndThings.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

      $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        })
        .state('cart', {
            url: '/cart',
            templateUrl: 'cart/cart.html',
            controller: 'CartCtrl'
        })
        .state('store', {
            url: '/things',
            templateUrl: 'store/store.html',
            controller: 'StoreCtrl'
        })
        .state('store.product', {
             url: '/thing/:productId',
            templateUrl: 'store/product.html',
            controller: 'ProductCtrl',
        })

        .state('places', {
            url: '/places',
            templateUrl: 'places/places.html',
            controller: 'PlacesCtrl'
        })

        .state('places.place', {
            url: '/place/:placeId',
            templateUrl: 'places/place.html',
            controller: 'PlaceCtrl',
        });

        

    // default route
    $urlRouterProvider.otherwise('/home');

    // enable HTML5 Mode to remove # from URL
    $locationProvider.html5Mode(true);
  
});

