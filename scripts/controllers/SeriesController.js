angular.module(APP_NAME).controller("SeriesController", 
    ["$scope", "MovieDbApiClient", "$log",
    function($scope, MovieDbApiClient, $log){
    //Inicializacion de Scope
    $scope.series = [];
    $scope.loading = false;
    $scope.error = null;

    //Recuperamos del servidor el listado de peliculas
    $scope.loading=true;
    $scope.error=null;
    MovieDbApiClient.getSeries().then(function(response){
        //La peticion ha ido bien
        $log.info("Respuesta", response);
        $scope.series = response.data;
        $scope.loading=false;
    }, function(response){
        //La peticion ha ido mal
        $log.warn("Error al recuperar las series", response);
        $scope.loading=false;
        $scope.error = "Error al recuperar las series";
    });

}]);