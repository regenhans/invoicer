var app = angular.module("invoice",[]);


//FECHA BONITA
var monthNames = [
  "Enero", "Febrero", "Marzo",
  "Abril", "Mayo", "Junio", "Julio",
  "Augosto", "Septiembre", "Octubre",
  "Noviembre", "Diciembre"
];

var date = new Date();
var day = date.getDate();
var monthIndex = date.getMonth();
var year = date.getFullYear();
var today = (monthNames[monthIndex]+ ' ' + day + ', ' + year);
// OBTENGO TODAY -> FECHA BONITA


//IVA



app.controller("controlador", function($scope){
	$scope.date = today;
	$scope.iva = '';
	$scope.total= '';
	$scope.beforedate = '';
	


	$scope.$watch('deadline', function(){

		var myDate = new Date();
		//fecha actual + deadline
		myDate.setDate(myDate.getDate() + parseInt($scope.deadline));
		//separar fecha
		var day = myDate.getDate();
		var monthIndex = myDate.getMonth();
		var year = myDate.getFullYear();
		var dead = (monthNames[monthIndex]+ ' ' + day + ', ' + year);
		//fecha estilizada
		$scope.beforedate = dead;
	});

	$scope.$watchGroup(['iva', 'amount'], function(){
		var iva = ($scope.iva * $scope.amount)/100;
        $scope.total = parseInt($scope.amount) + iva;
	});

});



