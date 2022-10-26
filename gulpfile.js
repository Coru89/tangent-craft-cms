const gulp = require('gulp')
const { src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass')); // This is different from the video since gulp-sass no longer includes a default compiler. Install sass as a dev dependency `npm i -D sass` and change this line from the video.
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
// const terser = require('gulp-terser');
// const imagemin = require('gulp-imagemin');
// const imagewebp = require('gulp-webp');

// functions

// watch
function watchTask(){
	watch('source/styles/**/*.scss', scss); // change to your source directory
	// watch('src/js/*.js', jsmin); // change to your source directory
	// watch('src/images/*', optimizeimg); // change to your source directory
	// watch('dist/images/*.{jpg,png}', webpImage); // change to your source directory
}

//compile, prefix, and min scss
function scss() {
	return src('./source/styles/**/*.scss') // change to your source directory
	  .pipe(sass())
	  .pipe(prefix('last 2 versions'))
	  .pipe(minify())
	  .pipe(dest('./web/assets/css')) // change to your final/public directory
  };

//optimize and move images
// function optimizeimg() {
//   return src('src/images/*.{jpg,png}') // change to your source directory
//     .pipe(imagemin([
//       imagemin.mozjpeg({ quality: 80, progressive: true }),
//       imagemin.optipng({ optimizationLevel: 2 }),
//     ]))
//     .pipe(dest('dist/images')) // change to your final/public directory
// };

//optimize and move images
// function webpImage() {
//   return src('dist/images/*.{jpg,png}') // change to your source directory
//     .pipe(imagewebp())
//     .pipe(dest('dist/images')) // change to your final/public directory
// };


// minify js
// function jsmin(){
//   return src('src/js/*.js') // change to your source directory
//     .pipe(terser())
//     .pipe(dest('dist/js')); // change to your final/public directory
// }

//gulp.task('default', gulp.series('scss', 'watchTask'));

exports.scss = scss;
// Default Gulp task 
exports.default = series(
	scss,
	// jsmin,
	// optimizeimg,
	// webpImage,
	watchTask
);
