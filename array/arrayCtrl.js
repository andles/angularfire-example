angular.module('fire')
.controller('arrayCtrl', function($scope, currentUser, fireArr) {

  // Couple of quick checks
  $scope.test = 'PASSED';
  $scope.currentUser = currentUser;

  // Attaching our 'live link' to firebase via the resolve
  $scope.fireArr = fireArr;

  // Adding a single value or an full object to our firebase
  $scope.addPrimitiveToArray = function() {
    fireArr.$add($scope.primitive);
  };
  $scope.addObjectToArray = function() {
    // Add a new property to a $firebaseArray by putting it in the $add argument
    fireArr.$add($scope.objToAdd);
  };

});
