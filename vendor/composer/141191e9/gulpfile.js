var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('css', function () {
    return gulp.src('./assets/sass/andradedev.scss')
            .pipe(sass({style: 'compressed'}))
//            .pipe(autoprefixer('last 15 versions'))
            .pipe(gulp.dest('./assets/css'))
            .pipe(notify({message: 'All done, master!'}));
});

gulp.task('default', function () {
    gulp.run('css');

    gulp.watch('./assets/sass/**/*.scss', function () {
        gulp.run('css');
    });
});
