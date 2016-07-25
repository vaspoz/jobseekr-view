'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');
var babel = require('gulp-babel');
var watch = require('gulp-watch');

// Update this list when you add new import in your source
var vendors = [
    'react',
    'react-dom',
    'material-ui/styles/MuiThemeProvider',
    'material-ui/RaisedButton/RaisedButton',
    'react-tap-event-plugin'
];

var appBundle = browserify('./src/webapp/render.js');

gulp.task('index:copy', function () {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('bundle:vendors', function () {
    var stream = browserify({
        require: vendors
    })
        .bundle()
        .pipe(source('vendors.js'))
        .pipe(gulp.dest('./dist/'));

    vendors.forEach(function (dep) {
        appBundle.external(dep);
    });

    return stream;
});

gulp.task('bundle', function () {
    return appBundle
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('connect', function () {
    "use strict";
    connect.server({
        root: './dist',
        port: 3000
    });
});

gulp.task('reload', ['bundle'], function () {
    connect.reload();
});

gulp.task('default', ['index:copy', 'bundle:vendors', 'bundle', 'connect'], function () {
    gulp.watch('./src/**/*.js', ['bundle', 'reload'])
        .on('change', function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});


// This part for development
gulp.task('serve', function() {
    connect.server({
        root: '.',
        port: 3000
    });

    gulp.src('./src/**/*.js*')
        .pipe(watch('./src/**/*.js*', {usePolling: true}))
        .pipe(babel())
        .pipe(gulp.dest('.tmp'))
        .pipe(connect.reload());

    gulp.src('index.html')
        .pipe(watch('index.html', {usePolling: true}))
        .pipe(connect.reload());

});