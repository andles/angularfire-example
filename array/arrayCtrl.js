angular.module('fire')
.controller('arrayCtrl', function($scope, fireRoot, currentUser, $firebaseArray) {

  $scope.test = 'PASSED';
  $scope.currentUser = currentUser;

  var rootRef = new Firebase(fireRoot.url);
  $scope.exfireArr = $firebaseArray(rootRef);

  $scope.addPrimitiveToArray = function() {
    $scope.exfireArr.$add($scope.primitive);
  };

  $scope.addObjectToArray = function() {
    $scope.exfireArr.$add($scope.exfireArrObj);
  };

});
