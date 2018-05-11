const gulp = require('gulp');
const sass = require('gulp-sass');
const bs = require('browser-sync').create();

const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');
const del = require('del');

gulp.task('ts', () => {
  return browserify({
    basedir: '.',
    debug: true,
    entries: ['src/ts/app.ts'],
    cache: {},
    packageCache: {}
  })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('ts-build', () => {
  return browserify({
    basedir: '.',
    debug: false,
    entries: ['src/ts/app.ts'],
    cache: {},
    packageCache: {}
  })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('sass', () => {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
    .pipe(bs.stream());
});

gulp.task('bs', ['sass', 'ts'], () => {
  bs.init({
    server: {
      baseDir: './dist/'
    }
  });

  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch('./src/*.html', ['html']);
  gulp.watch('./dist/*.html').on('change', bs.reload);
  gulp.watch('./src/ts/**/*.ts', ['ts']);
  gulp.watch('./dist/js/bundle.js').on('change', bs.reload);
});

gulp.task('build', ['sass', 'ts-build'], () => {
  return gulp
    .src(['./src/*.html', './src/img/*.*', './src/fonts/*.*'], {
      base: './src'
    })
    .pipe(gulp.dest('./dist'));
});

gulp.task('html', () => {
  return gulp
    .src('./src/*.html', {
      base: './src'
    })
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['bs']);
