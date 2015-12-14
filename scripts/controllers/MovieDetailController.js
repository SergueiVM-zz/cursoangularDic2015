angular.module(APP_NAME).controller("MovieDetailController", 
    ["$scope","$routeParams", "$log","MovieDbApiClient",
    function($scope, $routeParams, $log, MovieDbApiClient){

        //Inicializamos
        $scope.loading = true;
        $scope.item = null;
        $scope.error = null;

        $log.debug("PARAMETROS", $routeParams, $routeParams.id );

        MovieDbApiClient.getMovie($routeParams.id).then(function(response){
            $scope.item = response.data;
            $log.debug("ITEM", $scope.item );
            $scope.loading = false;
        }, function(response){
            $scope.error = "Error al recuperar pelicula";
            $scope.loading = false;
        });

        

    }]
);