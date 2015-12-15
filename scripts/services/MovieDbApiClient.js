angular.module(APP_NAME).service("MovieDbApiClient",
 ["$log", "$http","MovieDbApiClientConstants", "MovieDbApiClientValues",
 function($log, $http, MovieDbApiClientConstants, MovieDbApiClientValues){
    this.getUrl = function(path){
        var url =  "";
        if (MovieDbApiClientConstants.useHTTPS){
            url += "https://";
        }else{
            url += "http://";
        }

        if (MovieDbApiClientConstants.apiHost == ""){
            $log.error("MovieDbApiClient", "You didn´t set the apiHost constant");
            return "";
        }else{
            url += MovieDbApiClientConstants.apiHost;
        }

        url += MovieDbApiClientConstants.apiUrl;
        url += path;

        return url;
    }
    this.getMovies = function(){
        $log.debug("Obteniendo movies");
        return $http.get(this.getUrl("movies/"));
    };
    this.getSeries = function(){
        $log.debug("Obteniendo series");
        return $http.get(this.getUrl("series/"));
    };
    this.getPeople = function(){
        $log.debug("Obteniendo people");
        return $http.get(this.getUrl("people/"));
    };

    this.getMovie = function(id){
      return $http.get(this.getUrl("movies/"+id));  
    };

    this.getSerie = function(id){
      return $http.get(this.getUrl("series/"+id));  
    };

    this.getPerson = function(id){
      return $http.get(this.getUrl("people/"+id));  
    };   

    this.saveSerie = function(serie){
        $log.debug("saveSerie");
        if (typeof(serie.id) == "undefined"){
            return $http.post(this.getUrl("series/"), serie);
        }else{
            return $http.put(this.getUrl("series/"+serie.id), serie);
        }
    };

    this.saveMovie = function(movie){
        $log.debug("saveMovie");
        if (typeof(movie.id) == "undefined"){
            return $http.post(this.getUrl("movies/"), movie);
        }else{
            return $http.put(this.getUrl("movies/"+movie.id), movie);
        }
    };    
}]);