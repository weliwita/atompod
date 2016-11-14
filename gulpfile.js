"use strict"

var gulp = require('gulp');
var run = require('gulp-run');
var connect = require('gulp-connect');
var open = require('gulp-open');
var browserify = require('browserify'); // Bundles JS
var reactify = require('reactify');  // Transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat'); //Concatenates files
var lint = require('gulp-eslint'); //Lint JS files, including JSX

var config ={
    paths:{
        html:'./src/**/*.html',
		js: './src/**/*.js',
		css: [
      		'node_modules/bootstrap/dist/css/bootstrap.min.css',
      		'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
    	],
		dist:'./src',
    	//mainJs: './src/main.js'
    }
}

gulp.task('css', function() {
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/styles'));
});

gulp.task("run", function () {
    return run('electron .').exec();
});

gulp.task('default', ['css','run']);