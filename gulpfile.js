var gulp = require('gulp');
var wiredep = require('wiredep').stream;	
var del = require('del');

var $ = require('gulp-load-plugins')();

gulp.task('bower', function() {
	return $.bower();
});

gulp.task('clean', function() {
	return del('dist/');
});

gulp.task('default', ['clean', 'bower'], function() {
	return gulp.src('src/index.html')
		.pipe(wiredep({ exclude: /jquery/ }))
		.pipe($.inject(gulp.src('src/app/*.*'), { relative: true }))
		.pipe(gulp.dest('src/'))
		.pipe($.useref())
		.pipe(gulp.dest('dist/'));
});