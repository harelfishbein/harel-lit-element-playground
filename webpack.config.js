const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PnpWebpackPlugin = require(`pnp-webpack-plugin`);

babelOptions = {
  presets: [
    ['@babel/preset-typescript', { targets: "defaults" }]
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { "decoratorsBeforeExport": true }],
    "@babel/plugin-proposal-class-properties"
  ],
  sourceMaps: "both"
}

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	module: {
	  rules: [{
	    exclude: /node_modules/,
	    use: {
	      loader: 'babel-loader',
	      options: babelOptions
	    }
	  }]
	},
	resolve: {
	  conditionNames: ['development'],
	  extensions: ['.ts', '.js'],
	  plugins: [ PnpWebpackPlugin ]
	},
	resolveLoader: { plugins: [ PnpWebpackPlugin.moduleLoader(module) ] },
	plugins: [ new HtmlWebpackPlugin() ],
	devServer: {
	  contentBase: path.join(__dirname, 'dist'),
	  compress: false,
	  port: 5001
	}
}
