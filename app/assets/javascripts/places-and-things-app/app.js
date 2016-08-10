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
            templateUrl: 'cart.html',
            controller: 'CartCtrl'
        })
        // .state('store', {
        //     url: '/store',
        //     templateUrl: 'store.html',
        //     controller: 'CartCtrl'
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