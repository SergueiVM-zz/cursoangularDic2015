angular.module(APP_NAME).controller("PeopleController", 
    ["$scope", "MovieDbApiClient", "$log",
    function($scope, MovieDbApiClient, $log){
    //Inicializacion de Scope
    $scope.people = [];
    $scope.loading = true;
    $scope.error = null;

    //Recuperamos del servidor el listado de peliculas
    $scope.loading=true;
    $scope.error=null;
    MovieDbApiClient.getPeople().then(function(response){
        //La peticion ha ido bien
        $log.info("Respuesta", response);
        $scope.people = response.data;
        $scope.loading=false;
    }, function(){
        //La peticion ha ido mal
        $log.warn("Error al recuperar las personas")
        $scope.loading=false;
        $scope.error = "Error al recuperar las personas";
    });

}]);