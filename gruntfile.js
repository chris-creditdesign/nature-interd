// Generated on 2015-09-09 using generator-polopoly-widget 0.0.0
module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	var autoprefixer = require('autoprefixer-core');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			build: {
				options: {
					style: 'expanded'
				},
				files: {
					'assets/css/index.css': 'assets/sass/index.scss'
				}
			}
		},

		postcss: {
			options: {
				processors: [
				  autoprefixer({ browsers: ['> 1%'] }).postcss
				]
			},
			dist: { src: 'assets/css/*.css' }
		},

		jshint: {
			files: {
				src : ['assets/js/*.js','assets/js/**/*.js']
			},
		},

		concat: {
			buildIndex: {
				src: [	
						'assets/concat/polopoly-header.html',
						'assets/concat/style-open.txt',
						'assets/css/index.css',
						'assets/concat/style-close.txt',
						'assets/widget.html',
						'assets/concat/script-open.txt',
						'assets/js/init/*.js',
						'assets/js/build/*.js',
						'assets/js/*.js',
						'assets/concat/script-close.txt',
						'assets/concat/polopoly-footer.html'
						],
				dest: 'build/index.html'
			},
			distIndex: {
				src: [	
						'assets/concat/style-open.txt',
						'assets/css/index.css',
						'assets/concat/style-close.txt',
						'assets/widget.html',
						'assets/concat/script-open.txt',
						'assets/js/init/*.js',
						'assets/js/build/*.js',
						'assets/js/*.js',
						'assets/concat/script-close.txt',
						],
				dest: 'dist/index.html'
			}
		},

		watch: {
		    css: {
		        files: ['assets/sass/**/*.scss'],
		        tasks: ['buildcss','concat']
		    },
			js: {
				files: ['assets/js/*.js','assets/js/**/*.js'],
				tasks: ['jshint','concat']
			},
			concat: {
				files: ['assets/*'],
				tasks: ['concat']
			}
		}

	});

	grunt.registerTask('default', ['watch']);
	// use build css for the final dist css
	grunt.registerTask('buildcss',  ['sass', 'postcss']);

};