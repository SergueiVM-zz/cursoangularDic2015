var APP_NAME="MovieDbApp";
angular.module(APP_NAME, ["ngRoute"]).config(
    ["$routeProvider", "MovieDbApiClientConstants", function($routeProvider,MovieDbApiClientConstants){

        //Configura MovieDbApiClient
        MovieDbApiClientConstants.apiHost = "localhost:8000";
        
        //Defino rutas de la apliacion
        $routeProvider.when("/movies", {
            controller: "MoviesController",
            templateUrl: "views/Movies.html"
        }).when("/movies/:id", {
            controller: "MovieDetailController",
            templateUrl: "views/MediaItem.html"
        }).when("/series", {
            controller: "SeriesController",
            templateUrl: "views/Series.html"
        }).when("/series/new", {
            controller: "SerieFormController",
            templateUrl: "views/SerieForm.html"
        }).when("/series/:id", {
            controller: "SerieDetailController",
            templateUrl: "views/MediaItem.html"
        }).when("/people", {
            controller: "PeopleController",
            templateUrl: "views/People.html"
        }).otherwise({
            templateUrl: "views/404.html"
        })
    }]
);