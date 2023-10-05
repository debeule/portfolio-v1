const gulp = require('gulp');
const {origin, destination} = require("./constants");

const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');
const cleanCss = require('gulp-clean-css');


const html = function() {
    gulp.src(`${origin}/index.html`)
    .pipe(gulp.dest(destination));

    return gulp.src(`${origin}/pages/*.html`)
    .pipe(gulp.dest(`${destination}/pages`));
};

const js = function() {
    return gulp.src(`${origin}/assets/js/*.js`)
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(`${destination}/assets/js`));
};

const css = function() {
    return gulp.src([`${origin}/theme/main.scss`])
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(cleanCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(`${destination}/assets/css`));
};

const img = function() {
    return gulp.src(`${origin}/assets/img/**/*.*`)
    .pipe(webp())
    .pipe(imagemin())
    .pipe(gulp.dest(`${destination}/assets/images`));
};


module.exports.html = html;
module.exports.js = js;
module.exports.css = css;
module.exports.img = img;