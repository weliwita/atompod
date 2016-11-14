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
        html:'./src/views/**/*.html',
		js: './src/scripts/**/*.js',
		css: [
      		'node_modules/bootstrap/dist/css/bootstrap.min.css',
      		'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
    	],
		dist:'./src',
    	mainReactJs: './src/scripts/react-main.js'
    }
}

gulp.task('css', function() {
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist));		
});

gulp.task('js', function() {
	browserify(config.paths.mainReactJs)
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist));		
});

// gulp.task('lint', function() {
// 	return gulp.src(config.paths.js)
// 		.pipe(lint({config: 'eslintrc.json'}))
// 		.pipe(lint.format());
// });

gulp.task('watch', function() {	
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js']);
});

gulp.task("run", function () {
    return run('electron .').exec();
});

gulp.task('default', ['css','js','run','watch']);