const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const webpack = require('webpack');
const { ModuleFederationPlugin } = webpack.container;

module.exports = {
	entry: path.join(__dirname, 'src', 'index.ts'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.[contenthash].js',
		assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
		publicPath: 'auto',
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: '/node_modules/',
			},
			{
				test: /\.(png|jpg|jpeg|git)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.svg$/,
				type: 'asset/resource',
				generator: {
					filename: path.join('icons', '[name].[contenthash][ext]'),
				},
			},
		],
	},
	resolve: {
		extensions: ['.*', '.ts', '.tsx', '.js', '.jsx'],
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
			favicon: path.join(__dirname, 'public', 'favicon.ico'),
			filename: 'index.html',
		}),
		new FileManagerPlugin({
			events: {
				onStart: {
					delete: ['dist'],
				},
			},
		}),
		new ModuleFederationPlugin({
			name: 'host',
			remotes: {
				todo: 'todo@http://localhost:3002/todo.js',
			},
			shared: {
				react: { singleton: true },
				'react-dom': { singleton: true },
			},
		}),
	],
	devServer: {
		watchFiles: path.join(__dirname, 'src'),
		port: 3000,
	},
};
