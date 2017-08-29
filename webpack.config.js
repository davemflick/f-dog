var webpack = require('webpack');

module.exports = {
	entry: [
	'./src/app.js'
	],
	output: {
		filename: 'public/build/bundle.js',
		sourceMapFilename: 'public/build/bundle.map'
	},
	module: {
		loaders: [
		{test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ["react", "es2015"]}},
		{ test: /\.css$/, loader: "style-loader!css-loader?importLoaders=1" },
		{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
		]
	},
}