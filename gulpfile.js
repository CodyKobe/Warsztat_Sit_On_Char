var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-ruby-sass');
var functionSass = require('gulp-sass');
var rename = require("gulp-rename");
var sourcemaps = require('gulp-sourcemaps');

var Files = {
    html : './index.html',
    css_dest : './css',
    scss : './scss/main.scss'
};

gulp.task('sass', function(){

    return gulp.src(Files.scss)
        .on('error', sass.logError)
        .pipe(sourcemaps.init())

        .pipe(functionSass({outputStyle:'expanded'}).on('error', functionSass.logError))

        .pipe(sourcemaps.write())
        .pipe(rename('style.css'))
        .pipe(gulp.dest(Files.css_dest))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('default', ['sass'], function(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch(Files.html, browserSync.reload);
});
