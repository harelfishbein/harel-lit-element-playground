const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const TsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const PnpWebpackPlugin = require(`pnp-webpack-plugin`);

const babelOptions = {
  presets: [
    ['@babel/preset-typescript', { targets: "defaults" }]
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { "decoratorsBeforeExport": true }],
    "@babel/plugin-proposal-class-properties"
  ],
  sourceMaps: "both"
}

/*
const tsCheckOptions = {
  async: process.env.NODE_ENV !== "production",
  mode: "write-references",
  typescript: {
    build: true,
    configFile: resolve(__dirname, "./tsconfig.json"),
    mode: "write-tsbuildinfo",
    profile: process.env.NODE_ENV !== "production",
    diagnosticOptions: {
      semantic: true,
      syntactic: true,
    },
  },
}
*/

module.exports = {
	mode: process.env.NODE_ENV === "production" ? "production" : "development",
	node: { __dirname: true },
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
	target: "async-node",
	plugins: [
//	  new HtmlWebpackPlugin(),
//    new TsCheckerPlugin(tsCheckOptions),
	],
	devServer: {
	  contentBase: path.join(__dirname, 'dist'),
	  compress: false,
	  port: 5001
	}
}
