angular.module('fire')
.factory('authFactory', function($firebaseAuth, fireRoot) {
  var authRef = new Firebase(fireRoot.url);
  return $firebaseAuth(authRef);
});
