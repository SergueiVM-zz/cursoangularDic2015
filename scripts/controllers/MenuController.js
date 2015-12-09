angular.module("MovieDbApp").controller("MenuController", ["$scope", function($scope){
    $scope.activeItem = "";

    $scope.setActiveItem = function(activeItemId){
        this.activeItem = activeItemId;
        this.$emit("ChangePageTitle", this.getPageTitle(activeItemId));
    }

    $scope.classForItem = function(itemId){
        var resultado = "";
        if (this.activeItem == itemId){
            resultado = "active";
        }
        return resultado;
    }

    $scope.getPageTitle = function(activeItemId){
        switch(activeItemId){
            case "movies":
                return "Movies List";
            case "series":
                return "Series List";
            case "people":
                return "People List";
        }
    };
}]); 