var PlacesAndThings = 
angular
    .module('PlacesAndThings', [
        'ui.router',
        'templates', 
        
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

      $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        })
        .state('cart', {
            url: '/cart',
            templateUrl: 'cart/cart.html',
            controller: 'CartCtrl'
        })
        .state('store', {
            // abstract: true,
            url: '/store',
            templateUrl: 'store/store.html',
            controller: 'StoreCtrl'
        })
        // .state('product', {
        //     // abstract: true,
        //     parent: 'store',
        //     url: '/store/product/:id',
        //     templateUrl: 'store/store.html',
        //     controller: 'StoreCtrl'
        // })
        // .state('dashboard.one', {
        //   url: '',
        //   templateUrl: 'dashboard/one.html'
        // })

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

        

    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);
  
    });