var app = angular.module("EncuestaApp", ["ui","ui.directives"]);
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
            text:'De dónde venimos?',
            validAnswer : 2,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'De allí'},
                {id : 2, text : 'De aquí'}
            ]
        }
    ];

    $scope.userStatus = '';

    $scope.validAnswers = 0;
    
    $scope.currentId = 5;

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
    };
    
    $scope.addQuestion = function () {
    	var $form = $('[name=add-form]'),
    		answers = [];
    	$scope.currentId += 1;

    	$scope.questions.push({
    		id : $scope.currentId,
            text: $scope.question.text,
            validAnswer : $scope.question.validAnswer,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : $scope.question.answer1.text},
                {id : 2, text : $scope.question.answer2.text},
                {id : 3, text : $scope.question.answer3.text}
            ]
    	});
    	$form[0].reset();
    };
    
    $scope.removeQuestion = function (questionId) {
    	for (var i in $scope.questions) {
    		if ($scope.questions[i].id === questionId) {
    			if ($scope.questions[i].status === 'ok') {
    				$scope.validAnswers -= 1;
    			}
    			$scope.questions.splice(i, 1);
    			break;
    		}
    	}
    };

});