var gulp = require('gulp'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    path = require('./gulp.path.js').path,
    typescript = require('gulp-tsc');

gulp.task('angular', function () {
    gulp.src(path.angular.src)
        .pipe(concat('angular.js'))
        .pipe(gulp.dest(path.angular.dst));
});

gulp.task('typescript', function () {
    gulp.src(path.typescript.src)
        .pipe(typescript())
        .pipe(gulp.dest(path.typescript.dst));
});

gulp.task('watch-angular', function () {
    watch(path.angular.src, function (vinyl) {
        gulp.start('angular');
    });
});

var filePathToCompile = '';

gulp.task('watch-typescript', function () {
    watch(path.typescript.src, function (vinyl) {
        filePathToCompile = vinyl.path;
        gulp.start('compile-ts-after-change');
    });
});

gulp.task('compile-ts-after-change',function(){
    gulp.src(filePathToCompile)
        .pipe(typescript())
        .pipe(gulp.dest(path.typescript.dst));
});