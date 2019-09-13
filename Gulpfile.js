const cleancss = require('gulp-clean-css')
const concat = require('gulp-concat')
const exec = require('child_process').exec
const gulp = require('gulp')
const uglify = require('gulp-uglify-es').default

gulp.task('dist-css', () => {
  return gulp.src([
    'css/utility/reset.css',
    'css/component/*.css',
  ]).pipe(
    concat('max-terra.min.css')
  ).pipe(
    cleancss()
  ).pipe(
    gulp.dest('dist')
  )
})

gulp.task('dist-js', () => {
  return gulp.src([
    'js/m3.js',
    'js/utility/array.js',
    'js/utility/dom.js',
    'js/utility/fn.js',
    'js/utility/matrix.js',
    'js/utility/pubsub.js',
    'js/m3/utility/adjacency.js',
    'js/m3/utility/component.js',
    'js/m3/utility/crawler.js',
    'js/m3/utility/map.js',
    'js/m3/utility/match.js',
    'js/m3/utility/model.js',
    'js/m3/component/base.js',
    'js/m3/component/cell.js',
    'js/m3/component/map.js',
    'js/m3/component/minimap.js',
    'js/m3/component/scoreboard.js',
    'js/m3/component/scoreboardPlayer.js',
    'js/m3/component/tilePicker.js',
    'js/m3/component/tilePickerOption.js',
    'js/m3/model/base.js',
    'js/m3/model/cell.js',
    'js/m3/model/game.js',
    'js/m3/model/map.js',
    'js/m3/model/mapSlice.js',
    'js/m3/model/player.js',
    'js/m3/model/tile.js',
    'js/m3/model/turn.js'
  ]).pipe(
    concat('max-terra.min.js')
  ).pipe(
    gulp.dest('dist')
  ).pipe(
    uglify()
  ).pipe(
    gulp.dest('dist')
  )
})

gulp.task('dist', gulp.series('dist-css', 'dist-js'))

gulp.task('docs', () => {
  return exec('jsdoc -c jsdoc.conf')
})
