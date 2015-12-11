angular.module(APP_NAME).service("MovieDbApiClient", ["$log", "$http", function($log, $http){
    this.getMovies = function(){
        $log.debug("Obteniendo movies");
        return $http.get("/api/movies/");
    };
    this.getSeries = function(){
        $log.debug("Obteniendo series");
        return $http.get("/api/series/");
    };
    this.getPeople = function(){
        $log.debug("Obteniendo people");
        return $http.get("/api/people/");
    };
}]);