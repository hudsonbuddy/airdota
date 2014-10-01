var app = angular.module('airdota', ['ngSanitize', 'ngRoute']);
//This is the main method of the app

app.run(function($rootScope) {

});

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
    
    $locationProvider.html5Mode(true);

    //Navigation Routes
    $routeProvider.otherwise({redirectTo: '/'});
    $routeProvider.when('/', {templateUrl:'/templates/home.html'});
    $routeProvider.when('/essays', {templateUrl:'/templates/essays.html'});
    $routeProvider.when('/dict', {templateUrl:'/templates/dict.html'});
    $routeProvider.when('/entry', {templateUrl:'/templates/dictentry.html'});

    //Essay Routes
    $routeProvider.when('/beginnings', {templateUrl:'/essays/beginnings.html'});
    $routeProvider.when('/soul', {templateUrl:'/essays/soul.html'});
    $routeProvider.when('/medusa', {templateUrl:'/essays/medusa.html'});   
    

}]);

app.controller('airdotaController', function($scope) {
    
});
