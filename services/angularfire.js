angular.module('fire')

.factory('authFactory', function($firebaseAuth, fireRoot) {
  var authRef = new Firebase(fireRoot.url);
  return $firebaseAuth(authRef);
})

.factory('arrayFactory', function($firebaseArray, fireRoot) {
  var arrayRef = new Firebase(fireRoot.url + '/array');
  return $firebaseArray(arrayRef);
})

.factory('objectFactory', function($firebaseObject, fireRoot) {
  var objectRef = new Firebase(fireRoot.url + '/object');
  return $firebaseObject(objectRef);
});
