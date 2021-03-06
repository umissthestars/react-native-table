var fs = require('fs');
var util = require('util');

var gulp = require('gulp');
var webpack = require('gulp-webpack'); 
var jsdoc = require('gulp-jsdoc3');

var config = Object.create(require('./webpack.config.js'));

gulp.task('jsdoc', function (){

    gulp.src(['../src/js/*.{js,jsx}'], {read: false})
        .pipe(jsdoc());

});

gulp.task('webpack', function (){
	return gulp.src('../src/js/table.jsx')
		.pipe(webpack(config))
		.pipe(gulp.dest('../dist/'));
})


gulp.task('default', ['jsdoc', 'webpack'], function (){
        
});