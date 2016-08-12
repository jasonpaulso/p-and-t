var PlacesAndThings = 
angular
    .module('PlacesAndThings', [
        'ui.router',
        'templates', 
        
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

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
            url: '/store',
            templateUrl: 'store/store.html',
            controller: 'StoreCtrl'
        })
        .state('store.product', {
             url: '/product/:productId',
            templateUrl: 'store/product.html',
            controller: 'ProductCtrl',
        })

        // // temp place view
        // .state('places', {
        //     url: '/stockholm',
        //     templateUrl: 'places.html',
        //     controller: 'placesCtrl'
        // })

        
        // .state('place', {
        //     url: '/place/:id',
        //     templateUrl: 'places.html',
        //     controller: 'PlacesCtrl'
        // })
        ;

        

    // default route
    $urlRouterProvider.otherwise('/home');

    // enable HTML5 Mode for to remove # from URL
    $locationProvider.html5Mode(true);
  
    });

