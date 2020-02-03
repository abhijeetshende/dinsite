"use strict";

// Load plugins
const autoprefixer = require("gulp-autoprefixer");
const browsersync = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");
const del = require("del");
const gulp = require("gulp");
const header = require("gulp-header");
const merge = require("merge-stream");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const gulpCopy = require("gulp-copy");
const uglify = require("gulp-uglify");
var concat = require('gulp-concat');
const runsequence = require("run-sequence");

// Load package.json for banner
const pkg = require('./package.json');

// Set the banner content
const banner = ['/*!\n',
  ' * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
  ' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' * Licensed under <%= pkg.license %> (https://github.com/BlackrockDigital/<%= pkg.name %>/blob/master/LICENSE)\n',
  ' */\n',
  '\n'
].join('');

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  });
  done();
}

// BrowserSync reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Clean dist
function clean() {
  return del(["./dist/"]);
}

// Bring third party dependencies from node_modules into dist directory
function modules() {
  // Bootstrap JS
  var bootstrapJS = gulp.src('./node_modules/bootstrap/dist/js/*')
    .pipe(gulp.dest('./dist/bootstrap/js'));
  // Bootstrap SCSS
  var bootstrapSCSS = gulp.src('./node_modules/bootstrap/scss/**/*')
    .pipe(gulp.dest('./dist/bootstrap/scss'));
  // ChartJS
  var chartJS = gulp.src('./node_modules/chart.js/dist/*.js')
    .pipe(gulp.dest('./dist/chart.js'));
  // dataTables
  var dataTables = gulp.src([
    './node_modules/datatables.net/js/*.js',
    './node_modules/datatables.net-bs4/js/*.js',
    './node_modules/datatables.net-bs4/css/*.css'
  ])
    .pipe(gulp.dest('./dist/datatables'));
  // Font Awesome
  var fontAwesome = gulp.src('./node_modules/@fortawesome/**/*')
    .pipe(gulp.dest('./dist'));
  // jQuery Easing
  var jqueryEasing = gulp.src('./node_modules/jquery.easing/*.js')
    .pipe(gulp.dest('./dist/jquery-easing'));
  // jQuery
  var jquery = gulp.src([
    './node_modules/jquery/dist/*',
    '!./node_modules/jquery/dist/core.js'
  ])
    .pipe(gulp.dest('./dist/jquery'));

  var angularjs = gulp.src('./node_modules/angular/angular.*')
    .pipe(gulp.dest('./dist/angular'));
  var angular_ui_router = gulp.src('./node_modules/angular-ui-router/release/angular-ui-router.js')
    .pipe(gulp.dest('./dist/angular-ui-router'));
  return merge(bootstrapJS, bootstrapSCSS, chartJS, dataTables, fontAwesome, jquery, jqueryEasing, angularjs, angular_ui_router);
}



// CSS task
function css() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass({
      outputStyle: "expanded",
      includePaths: "./node_modules",
    }))
    .on("error", sass.logError)
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest("./css"))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./css"))
    .pipe(browsersync.stream());
}

// JS task
function js() {
  return gulp
    .src([
      './js/*.js',
      '!./js/*.min.js',
    ])
    .pipe(uglify())
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./js'))
    .pipe(browsersync.stream());
}

// Watch files
function watchFiles() {
  gulp.watch("./scss/**/*", css);
  gulp.watch(["./js/**/*", "!./js/**/*.min.js"], js);
  gulp.watch(["./templates/**/*", "!./js/**/*.min.js"], concat_js_and_reload);

  var htmlwatchfiles= ["./templates/**/*.html","./index.html","!./production/**/*.html"]
  gulp.watch(htmlwatchfiles,copy_templates_and_reload);
}

var prod_file = [
  "dist/**/*.*",
  "js/**/*.*",
  "css/**/*.*",
  "index.html",
  "index.php"
];

const copydir = function () {
  return gulp.src(prod_file, { base: "." })
    .pipe(gulp.dest("./production"));
};

const concat_js = function () {
  var all_js = [
    "./templates/main-controller.js",
    "./templates/**/*.js"
  ];
  return gulp.src(all_js)
    .pipe(concat('data_insite.js'))
    .pipe(gulp.dest('./js/'))
   
};

const copy_templates = function () {
  var all_html = [
    
    "./templates/**/*",
    "!./templates/**/*.js",
    "!./templates/**/*.scss"
  ];
  return gulp.src(all_html)
    .pipe(gulp.dest('./production/templates/'))
};


function data_insite_css() {
return  gulp.src(['./templates/**/*.scss'])
  .pipe(concat({ path: 'data_insite.scss'}))
  .pipe(gulp.dest('./css'));
}
// Define complex tasks
const dist = gulp.series(clean, modules);


const build = gulp.series(dist, copydir,copy_templates,concat_js, gulp.parallel(css, js));
const watch = gulp.series(build, gulp.parallel(watchFiles, browserSync));
const concat_js_and_reload = gulp.series(concat_js,browserSyncReload);
const copy_templates_and_reload = gulp.series(copy_templates,browserSyncReload);
// Export tasks
exports.css = css;
exports.js = js;
exports.clean = clean;
exports.dist = dist;
exports.build = build;
exports.watch = watch;
exports.default = build;
exports.data_insite_css = data_insite_css;
