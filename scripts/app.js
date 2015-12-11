var APP_NAME="MovieDbApp";
angular.module(APP_NAME, ["ngRoute"]).config(
    ["$routeProvider", "MovieDbApiClientConstants", function($routeProvider,MovieDbApiClientConstants){

        //Configura MovieDbApiClient
        MovieDbApiClientConstants.apiHost = "localhost:8000";
        
        //Defino rutas de la apliacion
        $routeProvider.when("/movies", {
            controller: "MoviesController",
            templateUrl: "views/Movies.html"
        }).when("/series", {
            controller: "SeriesController",
            templateUrl: "views/Series.html"
        }).when("/people", {
            controller: "PeopleController",
            templateUrl: "views/People.html"
        }).otherwise({
            templateUrl: "views/404.html"
        })
    }]
);