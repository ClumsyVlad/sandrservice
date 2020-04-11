const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
// const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

gulp.task('imagemin', function() {
    exports.default = () => (
        gulp.src('./imgs/*')
            .pipe(imagemin())
            .pipe(gulp.dest('./imgs/'))
)}
);

function style () {
    return gulp.src('./styles/scss/**/styles.scss') /* indicate where the .scss file is stored */
            .pipe(sass())
            .pipe(gulp.dest('./styles/css/'))
            .pipe(browserSync.stream())
};

/*gulp.task ('autoprefixer' ,function () {
    return gulp.src('./styles/css/*.css')
        .pipe(autoprefixer({
            browsers: ['> 0.5%, last 2 versions, Firefox ESR, not dead'],
            cascade: true
        }))
        .pipe(gulp.dest('app/css/'))
}
);*/

function watch () {
    browserSync.init ({
        server: {
            baseDir: "./"
        }
    })
    gulp.watch ('./styles/scss/**/*.scss', style);
    gulp.watch ('**/*.html').on('change', browserSync.reload);

};

exports.style = style;
exports.watch = watch;
