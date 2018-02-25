var gulp 			= require("gulp"), //brings in the gulp files
	postcss			= require("gulp-postcss"),//postcss
	autoprefixer	= require("autoprefixer"),//autoprefixer
	cssvars			= require("postcss-simple-vars"), //simple vars script in
	nested			= require("postcss-nested"),
	cssImport		= require("postcss-import"),
	mixins			= require("postcss-mixins");
	hexrgba			= require("postcss-hexrgba");



gulp.task("styles", function(){
	return gulp.src("./app/assets/styles/styles.css")
		.pipe(postcss([cssImport, mixins, nested, cssvars, hexrgba, autoprefixer]))
		.on("error", function(err){
			console.log(err);
			this.emit("end");
		})
		.pipe(gulp.dest("./app/temp/styles"));
});

