PlacesAndThings

.controller('HomeCtrl', ['$scope', '$rootScope', 'CartService', '$http',
  
  function($scope, $rootScope, CartService, $http) {




    $scope.quotesArray = [
      {quote: '“To awaken alone in a strange town is one of the pleasantest sensations in the world."',
      attribution: '—Freya Stark'
      },
      {quote: '“For my part, I travel not to go anywhere, but to go. I travel for travel’s sake. The great affair is to move.”',
      attribution: '—Robert Louis Stevenson'},
      ];

    $scope.quote = {

      quote: $scope.quotesArray[1].quote,
      attribution: $scope.quotesArray[1].attribution

    };

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


