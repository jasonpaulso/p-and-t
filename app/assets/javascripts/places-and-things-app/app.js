var PlacesAndThings = 
angular
    .module('PlacesAndThings', [
        'ui.router',
        'templates', 
        
    ]);
    PlacesAndThings.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {





      $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        })
        // .state('home.another', {
        //     url:'/another',
        //     templateUrl: 'home/homeanother.html',
        //     controller: function($scope) {
        //     $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        // }
        // })
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
        //     controller: function($scope) {
        //     $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        // }
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
    $urlRouterProvider.otherwise('/home');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);
  
    });

