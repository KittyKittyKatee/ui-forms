module.exports = function () {
  $.gulp.task('html', function () {
    return $.gulp.src('**/*.html')
        .pipe($.fileinclude({
          prefix:'@@'
        }))
        .pipe($.gulp.dest('build'))
        .on('end', $.browserSync.reload);
  });
};