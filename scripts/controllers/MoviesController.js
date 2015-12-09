angular.module("MovieDbApp").controller("MoviesController", 
    ["$scope", "$http", 
    function($scope, $http){
    //Inicializacion de Scope
    $scope.movies = [];
    $scope.loading = false;
    $scope.error = null;

    //Recuperamos del servidor el listado de peliculas
    $scope.loading=true;
    $scope.error=null;
    $http.get("/api/movies/").then(function(response){
        //La peticion ha ido bien
        console.log("Respuesta", response);
        $scope.movies = response.data;
        $scope.loading=false;
    }, function(){
        //La peticion ha ido mal
        
        $scope.loading=false;
        $scope.error = "Error al recuperar las peliculas";
    });

}]);