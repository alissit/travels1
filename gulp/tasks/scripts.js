var gulp = require("gulp"),
	webpack = require("webpack");


gulp.task("scripts", ["modernizr"], function(callback){
	webpack(require("../../webpack.config.js"), function(err, stats){
		if(err){
			console.log(err.toString())
		} else {
			console.log(stats.toString());
			callback();
		}

	});
	/*webpack needs help to find the webpack,config file*/
});