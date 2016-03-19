var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync');
var surge = require('gulp-surge');
var autoprefixer = require('gulp-autoprefixer');

function onError (error) {
  console.log(error);
  this.emit('end');
}

gulp.task('html', function () {
  return gulp.src('index.jade')
    .pipe(jade())
    .on('error', onError)
    .pipe(gulp.dest('./build'));
});

gulp.task('css', function () {
  return gulp.src('index.styl')
    .pipe(stylus({ compress: true }))
    .pipe(autoprefixer())
    .on('error', onError)
    .pipe(gulp.dest('./build'));
});

gulp.task('images', function () {
  return gulp.src('images/*')
    .on('error', onError)
    .pipe(gulp.dest('./build'));
});

gulp.task('browser-sync', ['html', 'css', 'images'], function () {
  browserSync.init({
    server: {
      baseDir: './build'
    }
  });

  gulp.watch('index.jade', ['html']);
  gulp.watch('index.styl', ['css']);
  gulp.watch('images/*', ['images']);
  gulp.watch('./build/*', browserSync.reload);
});

gulp.task('deploy', ['html', 'css', 'images'], function () {
  return surge({
    project: './build',
    domain: 'just-me.surge.sh'
  });
});

gulp.task('default', ['browser-sync']);
