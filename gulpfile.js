var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('copyHtml', function() {
    gulp.src('src/html/*.html')
        .pipe(gulp.dest('dist/html'));
});

gulp.task('cssmin', function() {
    gulp.src(['src/css/*.css', '!src/css/*.min.css'])
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'));
    gulp.src('src/css/*.min.css')
        .pipe(gulp.dest('dist/css'));
});

gulp.task('uglify', function() {
    gulp.src(['src/js/*.js', '!src/js/*.min.js'])
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js'));
    gulp.src('src/js/*.min.js')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copyPhp', function() {
    gulp.src('src/php/*.php').pipe(gulp.dest('dist/php'));
});

gulp.task('default', ['copyHtml', 'cssmin', 'uglify', 'copyPhp']);