var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');

gulp.task('html', function () {
  return gulp.src('index.jade')
    .pipe(jade())
    .pipe(gulp.dest('./build'));
});

gulp.task('css', function () {
  return gulp.src('index.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./build'));
});
