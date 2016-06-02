var fs = require('fs');

var gulp = require('gulp');
var webpack = require('webpack'); 

var config = Object.create(require('./webpack.config.js'));

gulp.task('default', function () {
    webpack(config);    
});