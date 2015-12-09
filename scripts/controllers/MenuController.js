angular.module("MovieDbApp").controller("MenuController", ["$scope", function($scope){
    $scope.activeItem = "";

    $scope.setActiveItem = function(activeItemId){
        this.activeItem = activeItemId;
    }

    $scope.classForItem = function(itemId){
        var resultado = "";
        if (this.activeItem == itemId){
            resultado = "active";
        }
        return resultado;
    }
}]); 