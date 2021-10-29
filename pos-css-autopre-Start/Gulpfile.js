var postcss = require("gulp-postcss");
var gulp = require('gulp');

const autoprefixer = require("autoprefixer")({ grid: "autoplace", overrideBrowserslist: [">1%"] });


gulp.task("styles", function () {
  return gulp
    .src("css/style.css")
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest('path'));
});

// ins local and glob gulp
// npm i -g gulp
// npm i gulp
// ins local postcss
// ins local autoprefixer
// ins local gulp-postcss