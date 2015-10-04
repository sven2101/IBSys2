var gulp = require('gulp'),
    path = require('./gulp.path').path;

gulp.task('assets', ['js'], function () {
});

gulp.task('js', function () {
    gulp.src(path.assets.x2js.src)
        .pipe(gulp.dest(path.assets.x2js.dst));
});