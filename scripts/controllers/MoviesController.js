angular.module("MovieDbApp").controller("MoviesController", ["$scope", function($scope){
    //Inicializacion de Scope
    $scope.movies = [{
        poster_url: "https://image.tmdb.org/t/p/w185/nXJt0JZ0UXxwPBcVj2KJ19bUBQ6.jpg",
        title: "Ant-man",
        rate: "6.9",
        year: "2015"
    },
    {
        poster_url: "https://image.tmdb.org/t/p/w185/eDmm19Wz4l3gN6ZtFJTuV3twDNS.jpg",
        title: "Terminator Génesis",
        rating: "6.2",
        year: "2015"
    },
    {
           poster_url: "https://image.tmdb.org/t/p/w185/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg",
           title: "Whiplash",
           rating: 8.4,
           year: 2014
    }];
    $scope.loading = false;

}]);