var gulp = require('gulp'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    path = require('./gulp.path.js').path;
	
gulp.task('angular', function () {
    gulp.src(path.angular.src)
        .pipe(concat('angular.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.angular.dst));
});

gulp.task('watch-angular', function () {
    watch(path.angular.src, function (events, done) {
        gulp.start('angular');
    });
});