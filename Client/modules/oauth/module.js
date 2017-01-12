angular.module('app')

.controller('oauth.login', function authLogin($stateParams, $scope, $state, $Api) {

    $scope.model = {
        email : "",
        password : ""
    };

    $scope.actionAuth = function() {
        $Api.POST('oauth', $scope.model).then(function(result) {
            Materialize.toast('Inicio de sesion existoso, Bienvenido!', 4000, 'rounded')
            localStorage.setItem("email", result.data.email);
            localStorage.setItem("role", result.data.role);
            $state.go("default.home");
        }, function(err){
            Materialize.toast('Usuario no encontrador, Datos ingresados no son validos!', 4000, 'rounded')
        });
    };
})
