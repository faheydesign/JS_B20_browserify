// add test mocha

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['dist/'],
    browserify: {
        './app/js/package.js' : [ './app/js/main.js' ]
    },
    jshint: {
      // define the files to lint
      files: ['Gruntfile.js', 'app/js/*.js', 'test/**/*.js', '!app/js/package.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
        // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'browserify'],
      options: {
      livereload: true,
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');



  grunt.registerTask('default', ['jshint', 'browserify']);
  grunt.registerTask('prod', ['jshint', 'clean', 'browserify' ]);
};
