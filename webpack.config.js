'use strict'

module.exports={
	/*entry:'./dev/js/2.js',*/
	devtool:'source-map',
	output:{
		path:__dirname+'/build/js',
		filename:'common.js'
	},
	module:{
		preloaders:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader:'jshint-loader'
			}
		],
		loaders: [
		  {
		    test: /\.jsx?$/,
		    exclude: /(node_modules|bower_components)/,
		    loader: 'babel', // 'babel-loader' is also a legal name to reference 
		    query: {
		      presets: ['react', 'es2015','stage-0'],
		      plugins:['react-html-attrs']
		    }
		  }
		]
	},
	resolve: {
	    alias: {
	      $:"./dev/js/jquery.js"
	    }
	},
	externals:{
		jquery:true
	}
}