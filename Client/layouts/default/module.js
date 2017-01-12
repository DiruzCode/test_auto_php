angular.module('layout')

.controller("layout.default", function layoutDefault($scope, $rootScope, $state) {
    $scope.user = {
        email : localStorage.getItem("email"),
        role : localStorage.getItem("role")
    };

  
    $scope.actionLogAuth = function(){
        localStorage.removeItem("email");
        localStorage.removeItem("role");
        $state.go('login.oauth');
    };

});
