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
const runsequence = require("gulp4-run-sequence");


var js_files = [
  "./master_controller.js",
  "./child_views/**/*.js"
];
var scss_files = [

  "./master_style.scss",
  "./child_views/**/*.scss"
]

//var child_views_templates = ["./child_views/**/*.html"];
var child_views_templates = [
  "index.html",
  "./child_views/**/*.html",
  "./child_views/**/*.json",
  "./child_views/components/*.html",
  "./child_views/components/*.json"
];
var index_templates = ["index.html"];
// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./prod/"
    },
    port: 3000
  });
  done();
}
function clean() {
  return del(["./prod/"]);
}
function thirdPartyDeps() {



  var angularchartjs = gulp.src('./node_modules/angular-chart.js/dist/**/*')
    .pipe(gulp.dest('./prod/dist/angular-chart.js/'));

  var bootstrapJS = gulp.src('./node_modules/bootstrap/dist/js/*')
  .pipe(gulp.dest('./prod/dist/bootstrap/js'));
  var bootstrapSCSS = gulp.src('./node_modules/bootstrap/scss/**/*')
    .pipe(gulp.dest('./prod/dist/bootstrap/scss'));
  var chartJS = gulp.src('./node_modules/chart.js/dist/*.js')
    .pipe(gulp.dest('./prod/dist/chart.js'));
  var dataTables = gulp.src([
    './node_modules/datatables.net/js/*.js',
    './node_modules/datatables.net-bs4/js/*.js',
    './node_modules/datatables.net-bs4/css/*.css'
  ])
    .pipe(gulp.dest('./prod/dist/datatables'));
  var fontAwesome = gulp.src('./node_modules/@fortawesome/**/*')
    .pipe(gulp.dest('./prod/dist'));
  var jqueryEasing = gulp.src('./node_modules/jquery.easing/*.js')
    .pipe(gulp.dest('./prod/dist/jquery-easing'));
  var jquery = gulp.src([
    './node_modules/jquery/dist/*',
    '!./node_modules/jquery/dist/core.js'
  ])
    .pipe(gulp.dest('./prod/dist/jquery'));

    var angulardatatable = gulp.src([
      './node_modules/angular-datatables/**/*',
    ])
      .pipe(gulp.dest('./prod/dist/angular-datatables'));

  var angularjs = gulp.src('./node_modules/angular/angular.*')
    .pipe(gulp.dest('./prod/dist/angular'));
  var angular_ui_router = gulp.src('./node_modules/angular-ui-router/release/angular-ui-router.js')
    .pipe(gulp.dest('./prod/dist/angular-ui-router'));


  var theme_src = gulp.src('./theme_src/**/*')
    .pipe(gulp.dest('./prod/dist/'));
 

  return merge(angularchartjs,bootstrapJS, bootstrapSCSS, chartJS, dataTables, fontAwesome, jquery, jqueryEasing, angularjs, angular_ui_router,theme_src,angulardatatable);
}






function data_insite_deps() {
  var index_html = gulp.src('./index.html')
    .pipe(gulp.dest('./prod'));


  var child_views = gulp.src(child_views_templates)
    .pipe(gulp.dest('./prod/dist/child_views'))
  // var js_files = [
  //   "./master_controller.js",
  //   "./child_views/**/*.js"
  // ];
  var data_insite_js = gulp.src(js_files)
    .pipe(concat('data_insite.js'))
    .pipe(gulp.dest('./prod/dist/js'))

  // var scss_files = [
  //   "./master_style.scss",
  //   "./child_views/**/*.scss"
  // ]
  var data_insite_css = gulp.src(scss_files)
    .pipe(concat('data_insite.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./prod/dist/css'))


  return merge(index_html, child_views, data_insite_js, data_insite_css);
}

function runwatch() {

  return runsequence(data_insite_deps, browsersync.reload)
}

function watchFiles() {

  gulp.watch(child_views_templates).on('change', runwatch);
}
const deps = gulp.series(clean, thirdPartyDeps, data_insite_deps);
const watch = gulp.series(deps, gulp.parallel(watchFiles, browserSync));

// Export tasks
exports.thirdPartyDeps = thirdPartyDeps;
exports.clean = clean;
exports.deps = deps;

exports.watch = watch;
