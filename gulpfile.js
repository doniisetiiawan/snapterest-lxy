const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

gulp.task('default', function () {
  return browserify('./source/app.js')
    .transform(babelify)
    .bundle()
    .pipe(source('snapterest.js'))
    .pipe(gulp.dest('./build/'));
});
