var gulp = require('gulp'),
	requireDir = require('require-dir');
	
requireDir('./gulp');

gulp.task('default', [
	'assets',
	'minify-index',
	'start-server',
	'browser-sync'], function () { });