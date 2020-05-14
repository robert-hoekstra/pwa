// Massive thanks to Declan and Traversy Media for explaining tooling!
// https://www.youtube.com/watch?v=1rw9MfIleEg

const gulp = require("gulp");
const imageMin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const cleanCSS = require('gulp-clean-css');


// Message Logging
gulp.task("message", async function() {
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
gulp.task("copyHTML", async function() {
  gulp
  .src("public/*.html")
  .pipe(gulp.dest("dist"));
});

// Compile JavaScript. Javascript bestanden concatenaten en minifyen, en export naar dist
gulp.task("scripts", async function() {
  gulp
    .src("public/js/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
});

gulp.task("service-worker", async function(){
  gulp 
    .src("public/service-worker.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist"))
})


// Minify CSS en export naar dist
gulp.task('minify-css', () => {
    return gulp.src('public/stylesheets/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist/stylesheet'));
  });

  gulp.task('generate-service-worker', async function(callback) {
    var path = require('path');
    var swPrecache = require('sw-precache');
    var rootDir = 'dist';
  
    swPrecache.write(path.join(rootDir, 'service-worker.js'), {
      staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,json}'],
      stripPrefix: rootDir
    }, callback);
    
  });


gulp.task(
  "default",
  gulp.parallel(["message", "copyHTML", "imageMin", "scripts", "minify-css", "generate-service-worker"])
);


gulp.task("watch", function() {
  gulp.watch("public/service-worker.js", gulp.series('service-worker'))
  gulp.watch("public/js/*.js", gulp.series('scripts')),
  gulp.watch("public/images/*",gulp.series('imageMin')),
  gulp.watch("public/*.html", gulp.series('copyHTML')),
 gulp.watch('public/stylesheets/*.css', gulp.series('minify-css'))
  });
