PlacesAndThings

.controller('HomeCtrl', ['$scope', '$rootScope', 'CartService', '$http',
  
  function($scope, $rootScope, CartService, $http) {

    var quotesArray = [
      {quote: 'To awaken alone in a strange town is one of the pleasantest sensations in the world.',
      attribution: 'Freya Stark'
      },
      {quote: 'For my part, I travel not to go anywhere, but to go. I travel for travel’s sake. The great affair is to move.',
      attribution: 'Robert Louis Stevenson'},
      {quote: 'We travel, some of us forever, to seek other places, other lives, other souls.',
      attribution: 'Anais Nin'},
      {quote: 'A journey is best measured in friends, rather than miles.',
        attribution: 'Tim Cahill' },
              {quote: 'Travel makes one modest. You see what a tiny place you occupy in the world.',
        attribution: 'Gustave Flaubert' },
              {quote: 'The life you have led doesn’t need to be the only life you have.',
        attribution: 'Anna Quindlen' },
              {quote: 'Broad, wholesome, charitable views of men and things cannot be acquired by vegetating in one little corner of the earth all of one’s lifetime.',
        attribution: 'Mark Twain'}
      ];

    var rand = Math.floor((Math.random() * quotesArray.length) + 0);

    $scope.quote = quotesArray[rand];

    $scope.checkForUser = function() {
      CartService.retrieveCart()
      .then(function(response){
        $scope.userEmail = response.data.user_email;

      })

    }

      $scope.submitForm = function(user) {
      CartService.updateCartUser(user)
      .then(function(response){
        $rootScope.$broadcast("UpdateCart");
      });

    }

    $scope.checkForUser();

  }]);


