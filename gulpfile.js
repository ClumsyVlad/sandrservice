const gulp = require('gulp');
const rigger = require('gulp-rigger');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const prefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css')

gulp.task('imagemin', function imagemin () {
    return gulp.src('./imgs/*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 85, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest('dist/imgs/'))
}
);

gulp.task ('rigger-html', function rigger() {
    gulp.src('./src/partials/**/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('./dist'))
}
);

gulp.task ('sass', function style () {
    return gulp.src('./src/styles/scss/**/styles.scss') /* indicate where the .scss file is stored */
        .pipe(sass())
        .pipe(gulp.dest('./src/styles/css/'))
        .pipe(browserSync.stream())
}
);

gulp.task ('prefixer', function prefixer () {
    return gulp.src('./src/styles/css/*.css')
        .pipe(autoprefixer({
            browserslist: ['> 0.5%, last 2 versions, Firefox ESR, not dead'],
            cascade: true
        }))
        .pipe(gulp.dest('./dist/css/'))
}
);

gulp.task ('minify-css', function cleanCSS () {
    return gulp.src('./dist/css/*.css')
        .pipe(cleanCSS({
            compatibility: '*'
        }))
        .pipe(gulp.dest('./dist/css'))
});

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
