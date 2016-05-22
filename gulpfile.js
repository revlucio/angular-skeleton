var gulp = require('gulp');
var wiredep = require('wiredep').stream;	
var del = require('del');

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var $ = require('gulp-load-plugins')();

gulp.task('clean', function() {
	return del('dist/');
});

gulp.task('js', ['clean'], function() {
	var b = browserify({
	    entries: './src/app/app.module.js',
	    debug: true,
  	});

	return b.bundle()
		.pipe(source('bundle.js'))
	    .pipe(buffer())
	    .pipe($.sourcemaps.write('./'))
		.pipe(gulp.dest('dist/'));
});

gulp.task('default', ['js'], function() {
	return gulp.src('src/index.html')
		.pipe(gulp.dest('dist/'));
});