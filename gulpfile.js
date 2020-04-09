const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

gulp.task('default', () => browserify('./source/app.jsx', { extensions: ['.jsx'] })
  .transform(babelify)
  .bundle()
  .pipe(source('snapterest.js'))
  .pipe(gulp.dest('./build/')));
