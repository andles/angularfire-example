angular.module('fire')
.controller('registerCtrl', function($scope, authFactory) {

  $scope.test = 'test passes for registerCtrl';

  $scope.error = null;
  $scope.message = null;

  $scope.submitRegister = function() {
    $scope.error = null;
    $scope.message = null;

    authFactory.$createUser({
      email: $scope.email,
      password: $scope.password
    }).then(function(authData) {
      $scope.message = 'User created with uid: ' + authData.uid;
    }).catch(function(error) {
      $scope.error = error;
    });
  };

});
