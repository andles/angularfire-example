angular.module('fire')
.controller('objectCtrl', function($scope, currentUser, fireObj) {

  // Couple of quick checks
  $scope.test = 'PASSED';
  $scope.currentUser = currentUser;

  // Creating a 'three-way bind' between our view, $scope, and the data in firebase
  // Doing this makes it so that when one user updates firebases' data set
  //   the view for all other connected users updates immediately as well
  fireObj.$bindTo($scope, 'boundfireObj');

  // Adding a single value or an full object to our firebase
  $scope.addPrimitiveToObject = function() {
    fireObj[$scope.keyForPrim] = $scope.primitive;
    fireObj.$save();
  };
  $scope.addObjectToObject = function() {
    // Add properties to a $firebaseObject BEFORE you call $save!!!
    fireObj[$scope.keyForObj] = $scope.objToAdd;
    fireObj.$save();
  };

  // Ignore Below
  // Just Trying to Display Objects In a Fancy Way
  $scope.notObject = function(fireObjValue) {
    return typeof fireObjValue !== "object";
  };
  $scope.isObject = function(fireObjValue) {
    return typeof fireObjValue === "object";
  };

});
