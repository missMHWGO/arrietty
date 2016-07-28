var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

gulp.task('styles', function() {
    return sass('static/scss/index.scss')
        .on('error', sass.logError)
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(notify({ message: 'styles task complete' }));
});

gulp.task('scripts', function() {
    return gulp.src('static/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('index.js'))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('images', function() {
    return gulp.src('static/img/*')
        .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
        .pipe(gulp.dest('dist/assets/img'))
        .pipe(notify({ message: 'Images task complete' }));
});

// gulp.task('clean', function(cb) {
//     del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], cb)
// });

gulp.task('default', function() {
    gulp.run('styles', 'scripts', 'images');

    gulp.watch('static/scss/*.scss', ['styles']);
    // Watch .js files
    gulp.watch('static/js/*.js', ['scripts']);
    // Watch image files
    gulp.watch('static/img/*', ['images']);

    // Create LiveReload server
    livereload.listen();
    // Watch any files in dist/, reload on change
    gulp.watch(['dist/**']).on('change', livereload.changed);
});

// gulp.task('watch', function() {
//     // Watch .scss files
//     gulp.watch('static/scss/*.scss', ['styles']);
//     // Watch .js files
//     gulp.watch('static/js/*.js', ['scripts']);
//     // Watch image files
//     gulp.watch('static/img/*', ['images']);

//     // Create LiveReload server
//     livereload.listen();
//     // Watch any files in dist/, reload on change
//     gulp.watch(['dist/**']).on('change', livereload.changed);
// });
