module.exports = function (grunt) {

    grunt.initConfig({
        jade: {
            serve: {
                files: {
                    'app/index.html': 'dev/index.jade'
                },
                options: {
                    pretty: true
                }
            },
            build: {
                files: {
                    'dist/index.html': 'dev/index.jade'
                }
            }
        },
        stylus: {
            serve: {
                files: {
                    'app/styles/main.css': ['dev/styles/**/*.styl']
                },
                options: {
                    compress: false
                }
            },
            build: {
                files: {
                    'dist/styles/main.css': ['dev/styles/**/*.styl']
                }
            }

        },
        coffee: {
            serve: {
                files: {
                    'app/scripts/main.js': ['dev/scripts/**/*.coffee']
                },
                options: {
                    pretty: true
                }
            },
            build: {
                files: {
                    'dist/scripts/main.js': ['dev/scripts/**/*.coffee']
                }
            }
        },
        jshint: {
            serve: ['Gruntfile.js', 'app/scripts/**/*.js'],
            build: ['dist/scripts/main.js']
        },
        connect: {
            options: {
                port: 9578,
                livereload: 35729,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        'app'
                    ]
                }
            }
        },
        copy: {
            serve: {
                files: [
                    { expand: true, cwd: 'dev/images/', src: ['*.*'], dest: 'app/images' }
                ]
            },
            build: {
                files: [
                    { expand: true, cwd: 'dev/images/', src: ['*.*'], dest: 'dist/images' }
                ]
            }
        },
        csslint: {
            app: ['dist/styles/**/*.css']
        },
        uglify: {
            build: {
                files: {
                    'dist/scripts/main.js': ['dist/scripts/main.js']
                }
            }
        },
        watch: {
            coffee: {
                files: ['dev/scripts/**/*.coffee'],
                tasks: ['coffee'],
                options: {
                    livereload: true
                }
            },
            jade: {
                files: ['dev/index.jade'],
                tasks: ['jade'],
                options: {
                    livereload: true
                }
            },
            stylus: {
                files: ['dev/styles/**/*.styl'],
                tasks: ['stylus'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['Gruntfile.js', '.app/scripts/**/*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            livereload: {
                options: {
                    livereload: 'connect.options.livereload'
                },
                files: [
                    'app/**/*.html',
                    'app/**/*.css',
                    'app/**/*.js'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('Serve', ['jade:serve', 'stylus:serve', 'coffee:serve', 'jshint:serve', 'copy:serve', 'connect', 'watch']);
    grunt.registerTask('Build', ['jade:build', 'stylus:build', 'csslint', 'coffee:build', 'jshint:build', 'uglify', 'copy:build']);
};