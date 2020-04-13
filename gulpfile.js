const gulp = require('gulp');
const { series } = require('gulp');
const imagemin = require('gulp-imagemin');
const rigger = require('gulp-rigger');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

gulp.task('imagemin', function () {
    return gulp.src('./src/imgs/*')
        .pipe(imagemin([
            imagemin.mozjpeg({quality: 85, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest('./dist/images/'))
    // console.log('task "imagemin" started')
});

gulp.task ('rigger', function () {
    return gulp.src('./src/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('./dist'))
    // console.log('task "rigger" started')
});

gulp.task ('uglify', function () {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
    // console.log('task "uglify" started')
});

gulp.task ('sass', function () {
    return gulp.src('./src/styles/scss/**/styles.scss') /* indicate where the .scss file is stored */
        .pipe(sass())
        .pipe(gulp.dest('./src/styles/css/'))
        .pipe(browserSync.stream())
    // console.log('task "sass" started')
});

gulp.task ('prefix-min', function () {
    return gulp.src('./src/styles/css/*.css')
        .pipe(autoprefixer({
            // browserslist: ['> 0.5%, last 2 versions, Firefox ESR, not dead'],
            cascade: true
        }))
        .pipe(cleanCSS({
            compatibility: '*'
        }))
        .pipe(gulp.dest('./dist/css/'))
    // console.log('task "prefix-min" started')
});

// gulp.task ('minify-css', function () {
//     return gulp.src('./dist/css/*.css')
//         .pipe(cleanCSS({
//             compatibility: '*'
//         }))
//         .pipe(gulp.dest('./dist/css/styles.css'))
// });



// function watch () {
//     browserSync.init ({
//         server: {
//             baseDir: "./dist/"
//         }
//     })
//     gulp.watch ('./**/*.scss', style);
//     gulp.watch ('./**/*.css', style);
//     gulp.watch ('**/*.html').on('change', browserSync.reload);
// };

// gulp.task('watch', function () {
//     gulp.watch (('./dist/**/*'), function(event, cb) {
//         gulp.start('build');
//     });
// });

// gulp.task('webserver', function () {
//     browserSync.init ({
//         server: {
//             baseDir: "./dist/"
//         }
//     })
// });

// gulp.task('build', ['imagemin', 'rigger', 'uglify', 'sass', 'prefix-min']
// , function(){}
// );
exports.build = series(imagemin, rigger, uglify, sass, prefix-min);
// exports.style = style;
// exports.watch = watch;
