angular.module(APP_NAME).controller("SerieFormController", 
    ["$scope", "$log", "MovieDbApiClient", "$location",
    function($scope, $log, MovieDbApiClient, $location){

        // Error and success messages
        $scope.success = null;
        $scope.error = null;

        $scope.model = {
            title: "",
            overview: "",
            poster_url: "",
            categories: [],
            rating: null,
            date: null
        };

        $scope.categories = ["Drama", "Action", "Sci-Fi", "Terror", "Thriller", "Comedy"];
        //Selected categories in UI
        $scope.selectedCategories = {};


        //Escuchamos cambios en selectedCategories (Seleccion de checkboxes)
        $scope.$watchCollection("selectedCategories", function(newValue, oldValue){
            $log.debug("SELECTEDCATEGORIES", newValue);
            var categories = [];
            for (var key in newValue){
                if(newValue[key] == true){
                    categories.push(key);
                }
            }
            $scope.model.categories = categories;
        });

      // Send the new Serie to the API
        $scope.saveSerie = function(){
            MovieDbApiClient.saveSerie($scope.model).then(
                function(response) { // se ha guardado bien
                    $scope.success = "Serie guardado con éxito!";
                    $scope.model = {
                        title: "",
                        overview: "",
                        poster_url: "",
                        categories: [],
                        rating: null,
                        date: null
                    };
                    $scope.selectedCategories = {};
                    var fields = ["title", "overview", "poster_url", "date", "rating"];
                    for (var i in fields) {
                        var field = fields[i];
                        $scope.serieForm[field].$setPristine();
                        $scope.serieForm[field].$setDirty();
                        $scope.serieForm[field].$setUntouched();
                    }
                }, function(response) { // no se ha guardado
                    $scope.error = "Error al guardar la serie";
                }
            );
        };
    }]
);