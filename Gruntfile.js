module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks
  require('time-grunt')(grunt);
  grunt.initConfig({
    //load 'package.json'file 
    pkg: grunt.file.readJSON('package.json'),
    config: {
      appUrl: 'app/',
      distUrl: 'dist/'
    },
    meta: {
        version: '0.1.0',
        banner: '/*! PROJECT_NAME - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '* author <%= pkg.author %>\n' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
            'Licensed MIT */'
    },
    // compile sass files into css
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
            '<%=config.appUrl %>css/main.css': '<%=config.appUrl %>sass/main.scss'
        }
      }
    },

    // CSS minify
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/css/main.css': ['app/css/main.css']
        }
      }
    },
    // create suitable prefix for all browsers
    autoprefixer: {
      options: {
        browsers: ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie 8', 'ie 9']
      },
      dist:{
        files:{
          '<%=config.appUrl %>css/main.css':'<%=config.appUrl %>css/main.css',
          //'.temp/concat/css/main.css':'.temp/concat/css/main.css'
        }
      }
    },

    // concatenating all js file
    concat: {
      basic_and_extras: {
        files: {
          'app/javascripts/controllers.js': 'app/js/controllers/*.js',
          'app/javascripts/directives.js': 'app/js/directives/*.js',
          'app/javascripts/services.js': 'app/js/services/*.js',
          'app/javascripts/filters.js': 'app/js/filters/*.js',
          'app/javascripts/app.js': 'app/js/app.js'
        }
      }
    },

    // build node js server 
    connect: {
      target: {
        options: {
          port: 9001,
          open: true,
          livereload: 35729,
          hostname: '127.0.0.1',
          middleware : function (connect) {
            return [
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static('./app')
            ];
          }
        }
      }
    },
    // watch files for changes and do proper action
    watch: {
      js: {
        files: ['<%=config.appUrl %>js/{,*/}*.js'],
        tasks: ['concat'],
        options: {
          livereload: '<%= connect.target.options.livereload %>'
        }
      },
      sass: {
        files: ['<%=config.appUrl %>sass/{,*/}*.{scss,sass}'],
        tasks: ['sass','autoprefixer'],
        options: {
          livereload: '<%= connect.target.options.livereload %>'
        }
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.target.options.livereload %>'
        },
        files: [
          '<%=config.appUrl %>**/*.html',
          '<%=config.appUrl %>images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      },
      options: {
        livereload: true
      }
    },
    // minify css and javascript files
    useminPrepare: {
      html: '<%=config.appUrl %>index.html'
    },
    // replace all javascript and css files with minfy one in html
    usemin: {
      html: "dist/index.html", 
    },
    // copy necessary files to dist folder
    copy: {
      develop: {
        files:[
          {
            cwd: 'bower_components/bootstrap-sass-rtl/dist/fonts',  // set working folder / root to copy
            src: '**/*',           // copy all files and subfolders
            dest: '<%=config.appUrl %>fonts',    // destination folder
            expand: true           // required when using cwd
          }
        ] 
      }
    },
    // clean unwanted folders
    clean: {
      build: {
        src: ["dist/*",'.tmp/*']
      }
    },
    // validate all javascript files by jshint
    jshint: {
      serve: {
        options: {
          "globals": {
            "$": false,
            "angular": false
          },
          ignores: ['<%=config.appUrl %>js/vendor/*js']
        },
        src: [
          '<%=config.appUrl %>js/**/*.js'
        ]
      }
    }
  });

  grunt.registerTask('build:server',[
    'concat',
    'copy:develop',
    'sass',
    'autoprefixer',
    'jshint:serve'
  ]);

  grunt.registerTask('serve', [
    'concat',
    'build:server',
    'connect:target',
    'watch'
  ]);
}