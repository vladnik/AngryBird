// Generated on 2014-03-31 using generator-webapp 0.4.8
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({
    watch: {
      scripts: {
        files: ['Resources/src/*.js'],
        options: {
          livereload: true
        },
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          livereload: true,
          open: 'http://localhost:8000/Resources'
        }
      }
    }
  });

  grunt.registerTask('server', [
    'connect',
    'watch'
  ]);
}
