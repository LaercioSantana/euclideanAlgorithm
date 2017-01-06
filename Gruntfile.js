module.exports = function( grunt ) {

  grunt.initConfig({

    uglify : {
      options : {
        mangle : false
      },
      build_minify : {
        files : {
          'dist/euclideanAlgorithm.min.js' : [ 'src/js/euclideanAlgorithm.js']
        }
      },
      build : {
        options: {
          beautify: true
        },
        files : {
          'dist/euclideanAlgorithm.js' : [ 'src/js/euclideanAlgorithm.js']
     	}
      }
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1,
      },
      target: {
        files: {
          'dist/euclideanAlgorithm.min.css': ['src/css/euclideanAlgorithm.css']
        }
      }
    },
    
    concat: {
        dist: {
          files: {
            'dist/euclideanAlgorithm.css' : ['src/css/euclideanAlgorithm.css']
          }
        }
    },

    watch: {
      css: {
        files: ['src/css/*.css'],
        tasks: ['concat', 'cssmin']
      },
      js: {
        files: ['src/js/*.js'],
        tasks: ['uglify:build']
      }
    }

  });

  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask( 'default', [ 'uglify', "cssmin", "concat"] );

};
