// Massive thanks to Declan and Traversy Media for explaining tooling!
// https://www.youtube.com/watch?v=1rw9MfIleEg

const gulp = require("gulp");
const imageMin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const cleanCSS = require('gulp-clean-css');


// Message Logging
gulp.task("message", function() {
  return console.log("Gulp is running...");
});

// Maak alle afbeeldingen een kleiner formaat (in bestandsgrootte
gulp.task("imageMin", () =>
  gulp
    .src("public/images/**")
    .pipe(imageMin())
    .pipe(gulp.dest("dist/images"))
);

// Kopieer alle html bestanden naar de dist folder
gulp.task("copyHTML", function() {
  gulp
  .src("public/*.html")
  .pipe(gulp.dest("dist"));
});

// Compile JavaScript. Javascript bestanden concatenaten en minifyen, en export naar dist
gulp.task("scripts", function() {
  gulp
    .src("public/js/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
});

// Minify CSS en export naar dist
gulp.task('minify-css', () => {
    return gulp.src('public/stylesheets/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist/stylesheet'));
  });

gulp.task(
  "default",
  gulp.parallel(["message", "copyHTML", "imageMin", "scripts", "minify-css"])
);

gulp.task("watch", function() {
  gulp.watch("public/js/*.js", gulp.series('scripts')),
  gulp.watch("public/images/*",gulp.series('imageMin')),
  gulp.watch("public/*.html", gulp.series('copyHTML')),
 gulp.watch('public/stylesheets/*.css', gulp.series('minify-css'))
  });
