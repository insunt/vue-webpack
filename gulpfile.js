var gulp = require('gulp');
var webpack = require('webpack-stream');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var connect = require('gulp-connect');
var copy = require('gulp-copy');

gulp.task('webpack', function() {

    return gulp.src('src/main.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/bundle/'))
        .pipe(connect.reload());
});

gulp.task('webserver', function() {

    connect.server({
        port: '8000',
        livereload: true,
        root: 'dist'
    });
});

gulp.task('build.index', function() {

    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['webpack', 'webserver', 'build.index']);