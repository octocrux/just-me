var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('html', function () {
    return gulp.src('index.jade')
        .pipe(jade())
        .pipe(gulp.dest('./build'));
});
