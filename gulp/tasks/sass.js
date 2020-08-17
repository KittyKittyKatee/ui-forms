module.exports = function () {
  $.gulp.task('sass', function () {
    return $.gulp.src('sass/**/*.scss')
        .pipe($.gp.sass())
        .pipe($.gp.autoprefixer({
          browsers: ['last 2 versions']
        }))
        .pipe($.gulp.dest('build/css'))
        .pipe($.browserSync.stream());
  });
};