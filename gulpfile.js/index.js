const gulp = require('gulp');
const {origin, destination} = require("./constants");

const builder = require('./builder');
const browserSync = require('./browserSync');

module.exports = 
{
    default: gulp.series(
        gulp.parallel(
            builder.html,
            builder.js,
            builder.css,
            builder.img
        ),
        browserSync.watchAll
    ),

    build: gulp.parallel(
        builder.html,
        builder.js,
        builder.css,
        builder.img
    ),

    dev: gulp.series(
        gulp.parallel(
            builder.html,
            builder.js,
            builder.css,
            builder.img
        ),
        browserSync.watchAll
    )
}