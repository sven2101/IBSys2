var gulp = require('gulp'),
    minifyHTML = require('gulp-minify-html'),
    watch = require('gulp-watch'),
    path = require('./gulp.path').path;
	
var opts = {
    comments: false
};

gulp.task('minify-index', function () {
    gulp.src(path.index.src)
        .pipe(watch(path.index.src))
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest(path.index.dst));
});