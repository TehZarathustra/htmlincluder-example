var gulp = require('gulp'),
    includer = require('gulp-htmlincluder');
 
gulp.task('htmlIncluder', function() {
    gulp.src('files/*.html')
    	.pipe(includer())
        .pipe(gulp.dest('./app'));
});
 
 
gulp.task('default', ['htmlIncluder']);
 
 
gulp.task('watch', function() {
    gulp.watch(['files/*.html'], function(event) {
      gulp.start('default');
    });
});
