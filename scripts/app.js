var APP_NAME="MovieDbApp";
angular.module(APP_NAME, ["ngRoute"]).config(
    ["$routeProvider", function($routeProvider){
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