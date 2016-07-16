var gulp = require('gulp');
var babel = require('gulp-babel');
var watch = require('gulp-watch');
var connect = require('gulp-connect');

gulp.task('connect', function () {
    "use strict";
    connect.server({
        root: 'target',
        port: 3000
    });
});

// If html change, copy it to 'target'
gulp.task('html-watch', function () {
    "use strict";
    gulp.src('src/*.html')
        .pipe(watch('src/*.html', {usePolling: true}))
        .pipe(gulp.dest('target'))
        .pipe(connect.reload());
});

// If js change, compile it using babel:
// 1. ES6 -> ES5
// 2. JSX -> JS
gulp.task('js-watch', function () {
    "use strict";
    return gulp.src('src/**/*.js*')
        .pipe(watch('src/**/*.js*', {usePolling: true}))
        .pipe(babel())
        .pipe(gulp.dest('target'))
        .pipe(connect.reload());
});

gulp.task('default', ['connect', 'html-watch', 'js-watch']);