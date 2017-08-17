var gulp 				 = require('gulp'),
		mixins 			 = require('postcss-mixins'),
		nested 			 = require('postcss-nested'),
		postcss 		 = require('gulp-postcss'),
		cssvars 		 = require('postcss-simple-vars'),
		hexrgba 		 = require('postcss-hexrgba'),
		cssImport 	 = require('postcss-import'),
		autoprefixer = require('autoprefixer');

gulp.task('styles', function(){
	return gulp.src(['./app/assets/styles/styles.css', './app/assets/styles/alertify.css'])
		.pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
    .on('error', function(errorInfo){
      console.log(errorInfo.toString());
      this.emit('end');
    })
		.pipe(gulp.dest('./app/temp/styles/'));
});
