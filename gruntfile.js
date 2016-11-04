module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["src/scripts/lib/*"],
        copy: {
            main: {
                expand: true,
                cwd: 'bower_components/bootstrap/dist/js',
                src: 'bootstrap.min.js',
                dest: 'src/scripts/lib/',
            },
        },
    });

    // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  // Default task(s).
  grunt.registerTask('default', ['copy']);
};