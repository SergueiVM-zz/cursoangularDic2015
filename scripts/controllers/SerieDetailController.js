angular.module(APP_NAME).controller("SerieDetailController", 
    ["$scope","$routeParams", "$log","MovieDbApiClient",
    function($scope, $routeParams, $log, MovieDbApiClient){

        //Inicializamos
        $scope.loading = true;
        $scope.item = null;
        $scope.error = null;

        $log.debug("PARAMETROS", $routeParams, $routeParams.id );

        MovieDbApiClient.getSerie($routeParams.id).then(function(response){
            $scope.item = response.data;
            $log.debug("ITEM", $scope.item );
            $scope.$emit("ChangePageTitle", $scope.item.title );
            $scope.loading = false;
        }, function(response){
            $scope.error = "Error al recuperar serie";
            $scope.loading = false;
        });

        

    }]
);