angular.module('fire')
.controller('loginCtrl', function($scope, authFactory) {

  $scope.test = 'this is loginCtrl successful test';

  $scope.error = null;
  $scope.message = null;

  $scope.submitLogin = function() {
    $scope.error = null;
    $scope.message = null;

    authFactory.$authWithPassword({
      email: $scope.email,
      password: $scope.password
    }).then(function(authData) {
      $scope.message = authData;
    }).catch(function(error) {
      $scope.error = error;
    });
  };

});
