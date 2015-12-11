angular.module(APP_NAME).controller("MoviesController", 
    ["$scope", "MovieDbApiClient", "$log",
    function($scope, MovieDbApiClient, $log){
    //Inicializacion de Scope
    $scope.movies = [];
    $scope.orderby = "rating";
    $scope.loading = false;
    $scope.error = null;

    //Recuperamos del servidor el listado de peliculas
    $scope.loading=true;
    $scope.error=null;
    MovieDbApiClient.getMovies().then(function(response){
        //La peticion ha ido bien
        $log.info("Respuesta", response);
        $scope.movies = response.data;
        $scope.loading=false;
    }, function(){
        //La peticion ha ido mal
        $log.warn("Error al recuperar las peliculas")
        $scope.loading=false;
        $scope.error = "Error al recuperar las peliculas";
    });

}]);