var app = angular.module('airdota', ['ngSanitize', 'ngRoute']);
//This is the main method of the app

app.run(function($rootScope) {
      $rootScope.name = "Hudson";
});

app.config(["$routeProvider", function($routeProvider){

    $routeProvider.otherwise({redirectTo: '/'});


}]);

app.controller('airdotaController', function($scope) {
    
    $scope.person = "Duan"; 

        


});
