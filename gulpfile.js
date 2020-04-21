const gulp = require('gulp');
const { series } = require('gulp');
const imagemin = require('gulp-imagemin');
const rigger = require('gulp-rigger');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');

function images() {
    return gulp.src('./src/imgs/*')
        .pipe(imagemin([
            imagemin.mozjpeg({quality: 85, progressive: true}),
            imagemin.optipng({optimizationLevel: 6}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest('./dist/images/'))
};

function htmlBuild() {
    return gulp.src('./src/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream())
};

function scriptsBuild() {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
        .pipe(browserSync.stream())
};

function sassBuild() {
    return gulp.src('./src/styles/scss/**/styles.scss') /* indicate where the .scss file is stored */
        .pipe(sass())
        .pipe(gulp.dest('./src/styles/css/'))
        .pipe(browserSync.stream())
};

function prefixMin() {
    return gulp.src('./src/styles/css/*.css')
        .pipe(autoprefixer({
            overrideBrowserslist: ['> 0.5%, last 2 versions, Firefox ESR, not dead'],
            cascade: true
        }))
        .pipe(cleanCSS({
            compatibility: '*'
        }))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browserSync.stream())
};

function watch () {
    browserSync.init ({
        server: {
            baseDir: "./dist/"
        }
    })
    gulp.watch ('./src/**/*.scss', series (sassBuild, prefixMin));
    gulp.watch ('./src/**/*.css', prefixMin);
    gulp.watch ('./src/**/*.html', htmlBuild);
    gulp.watch ('./src/**/*.js', scriptsBuild);
    gulp.watch ('./src/imgs/*', images);
};

function cleangit () {
    return gulp.src('docs/*', {read: false})
        .pipe(clean());
};

function buildgit () {
    return gulp.src('./dist/**/*.*')
        .pipe(gulp.dest('docs'))
}

exports.images = images;
exports.htmlBuild = htmlBuild;
exports.scriptsBuild = scriptsBuild;
exports.sassBuild = sassBuild;
exports.prefixMin = prefixMin;

exports.mediaBuild = series(images);
exports.styleBuild = series (sassBuild, prefixMin);
exports.build = series(images, htmlBuild, scriptsBuild, sassBuild, prefixMin);
exports.watch = watch;
exports.buildandwatch = series(images, htmlBuild, scriptsBuild, sassBuild, prefixMin, watch);

exports.cleangit = cleangit;
exports.buildgit = buildgit;
exports.demogit = series(cleangit, buildgit);