//code for minify and compile code by Giovani Soave - 2017

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');


gulp.task('sass', function () {
    return gulp.src('./source/scss/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('minify', function() {
    gulp.src('./source/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'))
});

gulp.task('watch', function () {
    gulp.watch('./source/scss/**/*.scss', ['sass']);
    gulp.watch('./source/*.html', ['minify']);
});