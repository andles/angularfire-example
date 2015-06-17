angular.module('fire')
.controller('objectCtrl', function($scope, fireRoot, currentUser, $firebaseObject) {

  $scope.test = 'PASSED';
  $scope.currentUser = currentUser;

  var rootRef = new Firebase(fireRoot.url);
  $scope.exfireObj = $firebaseObject(rootRef);

  $scope.addPrimitiveToArray = function() {
    $scope.exfireObj.$save($scope.primitive);
  };

  $scope.addObjectToArray = function() {
    $scope.exfireObj.$save($scope.exfireSubObj);
  };

});
