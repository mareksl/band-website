const gulp = require('gulp');
const sass = require('gulp-sass');
const bs = require('browser-sync').create();

gulp.task('sass', () => {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'))
    .pipe(bs.stream());
});

gulp.task('bs', ['sass'], () => {
  bs.init({
    server: {
      baseDir: './src/'
    }
  });

  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch('./src/*.html').on('change', bs.reload);
});

gulp.task('build', ['sass'], () => {
  return gulp
    .src(
      [
        './src/*.html',
        './src/css/*.css',
        './src/img/*.*',
        './src/fonts/*.*',
        './src/js/*.js'
      ],
      { base: './src' }
    )
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['bs']);
