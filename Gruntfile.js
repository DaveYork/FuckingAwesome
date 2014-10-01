/*!
 * Fucking Awsome GruntFile
 * @author David York, Andrew Acree
 */
 
'use strict';
 
/**
 * Grunt Module
 */
module.exports = function(grunt) {

	/**
	 * Configuration
	 */
	grunt.initConfig({

		/**
		 * Get package meta data
		 */
		pkg: grunt.file.readJSON('package.json'),

		/**
		 * Set project object
		 */
		project: {
		  app: 'c:/Front-End/FuckingAwesome',
		  assets: '<%= project.app %>/assets',
		  css: [
		    '<%= project.app %>/sass/style.scss'
		  ],
		  js: [
		    '<%= project.app %>/js/*.js'
		  ]
		},

		/**
		 * Project banner
		 */
		tag: {
		  banner: '/*!\n' +
		          ' * <%= pkg.name %>\n' +
		          ' * <%= pkg.title %>\n' +
		          ' * <%= pkg.url %>\n' +
		          ' * @author <%= pkg.author %>\n' +
		          ' * @version <%= pkg.version %>\n' +
		          ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
		          ' */\n'
		},

		/**
		 * Sass
		 */
		sass: {
		  dev: {
		    options: {
		      style: 'expanded',
		      banner: '<%= tag.banner %>',
		      compass: true
		    },
		    files: {
		      '<%= project.app %>/css/style.css': '<%= project.css %>'
		    }
		  },
		  dist: {
		    options: {
		      style: 'compressed',
		      compass: true
		    },
		    files: {
		      '<%= project.assets %>/css/style.css': '<%= project.css %>'
		    }
		  }
		},

		/**
		 * Watch
		 */
		watch: {
		  sass: {
		    files: '<%= project.app %>/sass/{,*/}*.{scss,sass}',
		    tasks: ['sass:dev']
		  }
		},

		/**
		 * Compass
		 */
        compass: {
            dev: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    imagesPath: 'assets/img',
                    noLineComments: false,
                    outputStyle: 'compressed'
                }
            }
        }

	});

	/**
	 * Load Grunt plugins that start with grunt
	 */
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	
	/**
	 * Default task
	 * Run `grunt` on the command line
	 */
	grunt.registerTask('default', [
	  'sass:dev',
	  'watch'
	]);
};



