var gulp = require('gulp'),
	requireDir = require('require-dir');
	
requireDir('./gulp');

gulp.task('default', [
	'assets',
	'minify-index',
	'minify-components-view',
	'angular',
	'watch-angular',
	'start-server',
	'browser-sync'
	], function () { });