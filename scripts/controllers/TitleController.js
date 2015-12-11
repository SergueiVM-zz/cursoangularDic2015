angular.module("MovieDbApp").controller("TitleController", ["$scope", "$log", function($scope, $log){
    $scope.title = "";
    $scope.$on("ChangePageTitle", function(event, data){
        $log.debug(data);
        $scope.title = data;
    });
}]);