/* 
    To start live watching:
        1) In new project terminal do: npm i --save-dev gulp gulp-sass browser-sync
        2) In terminal do: gulp watch
*/

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style () {
    return gulp.src('./styles/scss/**/styles.scss') /* indicate where the .scss file is stored */
            .pipe(sass())
            .pipe(gulp.dest('./styles/css/'))
            .pipe(browserSync.stream())
}

function watch () {
    browserSync.init ({
        server: {
            baseDir: "./"
        }
    })
    gulp.watch ('./styles/scss/**/*.scss', style);
    gulp.watch ('**/*.html').on('change', browserSync.reload);

}

exports.style = style;
exports.watch = watch;