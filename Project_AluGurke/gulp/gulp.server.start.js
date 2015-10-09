var gulp = require('gulp'),
	shell = require('gulp-shell');

gulp.task('start-server', shell.task(['node server.js']));