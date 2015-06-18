angular.module('fire', ['ngRoute', 'firebase'])

.constant('fireRoot', {
  url: 'https://anguish.firebaseio.com/'
})

.config(function($routeProvider) {
  $routeProvider
  .when('/login', {
    templateUrl: 'login/login.html',
    controller: 'loginCtrl'
  })
  .when('/register', {
    templateUrl: 'register/register.html',
    controller: 'registerCtrl'
  })
  .when('/object', {
    templateUrl: 'object/object.html',
    controller: 'objectCtrl',
    resolve: {
      // Passing through the most recent authenticated user from our global authFactory
      currentUser: function(authFactory) {
        return authFactory.$getAuth();
      },
      // Passing a 'live link' to our firebase data from our objectFactory
      fireObj: function(objectFactory) {
        return objectFactory;
      }
    }
  })
  .when('/array', {
    templateUrl: 'array/array.html',
    controller: 'arrayCtrl',
    resolve: {
      // Passing through the most recent authenticated user from our global authFactory
      currentUser: function(authFactory) {
        return authFactory.$getAuth();
      },
      // Passing a 'live link' to our firebase data from our arrayFactory
      fireArr: function(arrayFactory) {
        return arrayFactory;
      }
    }
  })
  .otherwise({
    redirectTo: '/object'
  });
});
