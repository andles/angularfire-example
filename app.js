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
  .when('/array', {
    templateUrl: 'array/array.html',
    controller: 'arrayCtrl',
    resolve: {
      currentUser: function(authFactory) {
        return authFactory.$getAuth();
      }
    }
  })
  .when('/object', {
    templateUrl: 'object/object.html',
    controller: 'objectCtrl',
    resolve: {
      currentUser: function(authFactory) {
        return authFactory.$getAuth();
      }
    }
  })
  .otherwise({
    redirectTo: '/object'
  });
});
