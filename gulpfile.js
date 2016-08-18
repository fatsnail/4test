var gulp = require('gulp'),
	os = require('os'),
	open = require('gulp-open'),
	sass = require('gulp-sass'),
	args = require('yargs').argv,
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	connect = require('gulp-connect'),
	webpack = require('gulp-webpack'),
	webpackConfig = require('./webpack.config');

'use strict'
var host={
	path:'build',
	port:args.port || 2222,
	html:'1.html'
}

//mac chrome: "Google chrome", 
var browser = os.platform() === 'linux' ? 'Google chrome' : (
  os.platform() === 'darwin' ? 'Google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox'));

gulp.task('css',function(){
	gulp.src(['./dev/sass/*.scss','./public/stylesheets/*.css'])
	.pipe(sass({style:'expanded'}))
	//sass(['./dev/sass/*.scss','./public/stylesheets/*.css'],{style:'expanded'})
	.pipe(concat('style.css'))
	.pipe(gulp.dest('./build/stylesheets'))
});

gulp.task('js',function(){
	gulp.src('./dev/js/*.js')
	.pipe(webpack(webpackConfig))
	//.pipe(sass({style:'expanded'}))
	//sass(['./dev/sass/*.scss','./public/stylesheets/*.css'],{style:'expanded'})
	//.pipe(concat('style.css'))
	.pipe(gulp.dest('./build/js'))
});

gulp.task('connect', function () {
    console.log('connect------------');
    connect.server({
    	root:host.path,
        port: host.port,
        livereload: true
    });
});
gulp.task('cp:html',function(){
	gulp.src('./dev/*.html')
	.pipe(gulp.dest('./build'))
	.pipe(connect.reload())
});

gulp.task('open', function (done) {
    gulp.src('')
    .pipe(open({
        app: browser,
        uri: 'http://localhost:'+host.port+'/1.html'
    }))
    .on('end', done);
});

gulp.task('watch',function(){
	gulp.watch(['./dev/sass/*.scss','./dev/js/**/*.js'],['css','js','cp:html'])
});

gulp.task('default',['connect','css','js','cp:html','open','watch']);