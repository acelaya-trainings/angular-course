var app = angular.module("EncuestaApp",["ui","ui.directives"]);
app.controller("TestController", function($scope){
	 $scope.questions = [
        {
            id : 1,
            text:'Como declaramos en Java un atributo de una clase que solo pueda ser accedido desde la propia clase?',
            validAnswer : 1,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Con "private"'},
                {id : 2, text : 'Con "public"'},
                {id : 3, text : 'Con mucho amor'},
                {id : 4, text : 'Eso no se puede hacer!'}
            ]
        },
        {
            id : 2,
            text:'Que significan las siglas del patron MVC?',
            validAnswer : 2,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Modelo Vista Concurrente'},
                {id : 2, text : 'Modelo Vista Controlador'},
                {id : 3, text : 'Me Voy de Casa'}
            ]
        },
        {
            id : 3,
            text:'Quien es el mejor futbolista del mundo?',
            validAnswer : 3,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Leo Messi (F.C. Barcelona)'},
                {id : 2, text : 'Cristiano Ronaldo (Real Madrid C.F.)'},
                {id : 3, text : 'Koke (Atletico de Madrid)'}
            ]
        },
        {
            id : 4,
            text:'Hace sol?',
            validAnswer : 2,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'No, esta nublado'},
                {id : 2, text : 'Si, bastante'},
                {id : 3, text : 'No sabe'}
            ]
        },
        {
            id : 5,
            text:'Quien es el autor del Lazarillo?',
            validAnswer : 1,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Anonimo'},
                {id : 2, text : 'Cervantes'},
                {id : 3, text : 'Yo mismo'}
            ]
        }
    ];

    $scope.userStatus = '';

    $scope.validAnswers = 0;
    
    $scope.addQuestion = function(){
    	var entry = {
                id : $scope.questions.length+1,
                text:$scope.inputData.question,
                validAnswer : $scope.inputData.validAnswer,
                userAnswer : null,
                status : '',
                answers: [
                    {id : 1, text : $scope.inputData.answer1},
                    {id : 2, text : $scope.inputData.answer2},
                    {id : 3, text : $scope.inputData.answer3}
                ]
            }
    	$scope.questions.push(entry);
    };
    
    $scope.deleteQuestion = function(id){
    	var arrayAuxiliar=[];
    	for (x=0;x<$scope.questions.length;x++){
    		if($scope.questions[x].id!=id)
    			arrayAuxiliar.push($scope.questions[x]);
    	};
    	$scope.questions = arrayAuxiliar;
    };

    $scope.validate = function (question) {
        if (question.validAnswer == question.userAnswer) {
            $scope.validAnswers ++;
            question.status = 'ok';
        } else {
            if (question.status == 'ok' && $scope.validAnswers > 0) {
                $scope.validAnswers --;
            }
            question.status = 'error';
        }

        updateUserStatus();
    };

    function updateUserStatus() {
        var avgValidAnswers = ($scope.validAnswers / $scope.questions.length) * 100;
        if (avgValidAnswers == 0) {
            $scope.userStatus = 'looser';
        } else if (avgValidAnswers == 100) {
            $scope.userStatus = 'guru';
        } else {
            $scope.userStatus = 'poor';
        }
    }

});