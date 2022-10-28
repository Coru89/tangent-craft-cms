const gulp = require('gulp');
var browserSync = require('browser-sync').create();
const { src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass')); // This is different from the video since gulp-sass no longer includes a default compiler. Install sass as a dev dependency `npm i -D sass` and change this line from the video.
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const typescript = require('gulp-typescript');
// const imagemin = require('gulp-imagemin');
// const imagewebp = require('gulp-webp');

// functions

// watch
function watchTask(){
	browserSync.init({
		proxy: {
			target: "https://tangent.ddev.site/"
    	}
	});

	watch('templates/**/*.twig').on('change', browserSync.reload);
	watch('source/styles/**/*.scss', scss); // change to your source directory
	watch('source/scripts/*.ts', ts); // change to your source directory
	// watch('src/images/*', optimizeimg); // change to your source directory
	// watch('dist/images/*.{jpg,png}', webpImage); // change to your source directory
}

//compile, prefix, and min scss
function scss() {
	return src('./source/styles/**/*.scss') // change to your source directory
	  .pipe(sass())
	  .pipe(prefix('last 2 versions'))
	  .pipe(minify())
	  .pipe(dest('./web/assets/styles')) // change to your final/public directory
	  .pipe(browserSync.stream());
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


//compile ts and minify
function ts() {
    return src('./source/scripts/*.ts')
    .pipe(typescript())
    .pipe(uglify())
    .pipe(dest('./web/assets/scripts'))
	.pipe(browserSync.stream());
}

exports.watchTask = watchTask;
exports.ts = ts;
exports.scss = scss;
// Default Gulp task 
exports.default = series(
	scss,
	ts,
	// optimizeimg,
	// webpImage,
	watchTask
);
