var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync');

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

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './build'
    }
  });

  gulp.watch('index.jade', ['html']);
  gulp.watch('index.styl', ['css']);
  gulp.watch('./build/*', browserSync.reload);
});
