module.exports = function(grunt) {

    grunt.initConfig({
        less: { // configuración de LESS
            build: {
                files: { // archivos a procesar
                    "css/style.css": "less/style.less"
                }
            }
        },
        watch: { // configuracion de Watch
            styles: {
                files: ["less/*.less"], // archivos a observar
                tasks: ["less", "postcss"], // ejecuta la tarea less
            },
            options: {
                spawn: false // detecta los cambios más rápido
            }
        },
        postcss: {
            dist: {
                src: "css/*.css"
            }
        }
    });

    // cargar los módulos
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-postcss");

    // registrar la tarea
    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("compilarless", ["less"]);
};