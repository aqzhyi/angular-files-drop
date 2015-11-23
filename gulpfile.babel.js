import gulp from 'gulp'
import babel from 'gulp-babel'
import sourcemaps from 'gulp-sourcemaps'
import plumberNotifier from 'gulp-plumber-notifier'
import uglify from 'gulp-uglify'
import del from 'del'

gulp.task('clean', () => del('./dist'))

gulp.task('watch', () => {
  gulp.watch('./src/**/*.js', ['build'])
})

gulp.task('build', () => {
  return gulp.src('./src/**/*.js')
  .pipe(plumberNotifier())
  .pipe(sourcemaps.init())
    .pipe(babel({
      presets: 'es2015',
      plugins: ['transform-runtime', 'transform-es2015-modules-umd'],
    }))
    .pipe(uglify())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./dist'))
})
