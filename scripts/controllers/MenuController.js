angular.module("MovieDbApp").controller("MenuController", ["$log", "$scope","$location", function($log, $scope, $location){
    $scope.activeItem = $location.path();

    //escuchamos cuando cambia la url
    $scope.$on("$locationChangeSuccess", function(){
        $log.debug("$locationChangeSuccess", arguments, $location.path());
        $scope.setActiveItem($location.path());
    });

    $scope.setActiveItem = function(activeItemId){
        this.activeItem = activeItemId.split("/")[1] || "";
        if (this.activeItem == ""){
            $location.url("/movies");
        }else{
            this.$emit("ChangePageTitle", this.getPageTitle(this.activeItem ));
        }
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