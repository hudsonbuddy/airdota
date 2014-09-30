var app = angular.module('airdota', ['ngSanitize', 'ngRoute']);
//This is the main method of the app

app.run(function($rootScope) {
      $rootScope.name = "Hudson";
});

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){

    $routeProvider.otherwise({redirectTo: '/'});
    $routeProvider.when('/', {templateUrl:'/templates/home.html'});

    $locationProvider.html5Mode(true);
    


}]);

app.controller('airdotaController', function($scope) {
    
    $scope.person = "Duan"; 

});
