var gulp = require('gulp'),
    minifyHTML = require('gulp-minify-html'),
    watch = require('gulp-watch'),
    path = require('./gulp.path').path;
	
var opts = {
    comments: false
};

gulp.task('minify-index', function () {
    gulp.src(path.indexSrc)
        .pipe(watch(path.indexSrc))
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest(path.indexDst));
});