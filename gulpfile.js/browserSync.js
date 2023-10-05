const gulp = require('gulp');
const {origin, destination} = require("./constants");
const builder = require('./builder');

const browserSync = require('browser-sync').create();


const watchAll = function() {
    browserSync.init({
        server: `${destination}`
    });

    //browsersync.reload blijft vasthangen ==> dit is een cheat
    function reload(done) {
        browserSync.reload();
        done();
    }
    //

    gulp.watch(`${origin}/index.html`, gulp.series(builder.html, reload));

    gulp.watch(`${origin}/theme/js/**/*.js`, gulp.series(builder.js, reload));
    gulp.watch(`${origin}/theme/main.js`, gulp.series(builder.js, reload));

    gulp.watch(`${origin}/theme/**/*.scss`, gulp.series(builder.css, reload));
    gulp.watch(`${origin}/assets/img/**/*.*`, gulp.series(builder.img, reload));
};

module.exports.watchAll = watchAll;