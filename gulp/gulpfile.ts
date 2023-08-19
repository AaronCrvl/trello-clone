const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');
const sourcemaps = require('gulp-sourcemaps');

function convert () {    
    return gulp.src('src/components/*.tsx')
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['es2015','react']
    }))    
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('gulp/build'));
}

function minifyTs(cb : Function) {

    gulp.src('src/components/*')
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('gulp/build/'))
    
    cb()   
}

function minifyCss(cb : Function) {
    console.log('Css minified.')
    cb()   
}

function enhanceImagesSize(cb : Function) {
    console.log('Images enhanced.')
    cb()   
}

exports.default = gulp.series(
    convert,
    minifyTs,
    gulp.parallel(minifyCss, enhanceImagesSize)
)