angular.module('app')

.controller('home.index', function homeIndex($stateParams, $scope, $Api) {
	$('.modal').modal({
		dismissible: false
	});
	$scope.question = {
		question : "",
		type : "",
		user : localStorage.getItem("email"),
		answer: ""
	};

	if(localStorage.getItem("modal") === "true"){
		$Api.GET('question/'+localStorage.getItem("role")).then(function(result) {
          $scope.question.question = result.data.question;
          $scope.question.type = result.data.type;
          $('#questions').modal('open'); 
    	});
	}

    $scope.actionResponse = function(){

    	$Api.POST('answer', $scope.question).then(function(result) {
    		localStorage.setItem("modal", "false");
        });

    };


	//$('#questions').modal('open');
});
