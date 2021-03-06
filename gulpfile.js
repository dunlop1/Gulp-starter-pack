const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


//COMPILE SASS INTO CSS

function style() {
  // 1.Where is my scss
  return gulp.src('./scss/**/*.scss')
  // 2.Pass that file through sass compiler
   .pipe(sass().on('error', sass.logError))
  // 3.where do I save the compiled css?
   .pipe(gulp.dest('./css'))
  //  4. stream changes to all browser
  .pipe(browserSync.stream());
}

function watch(){
  browserSync.init({
    server:{
      baseDir: './'
    }
  });
  gulp.watch('./scss/**/*.scss',style);
  gulp.watch('./*.html').on('change',browserSync.reload);
  gulp.watch('./js/**/*.js').on('change',browserSync.reload);
}

exports.style = style;
exports.watch = watch;