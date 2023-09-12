const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
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
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				use: {
					loader: "@svgr/webpack",
					options: {
						typescript: true,
						ext: "tsx",
					}
				},
				generator: {
					filename: path.join('icons', '[name].[contenthash][ext]'),
				},
			},
			 {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
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
			name: 'todo',
			filename: 'todo.js',
			remotes: {
				core: "core@http://localhost:3001/core.js",
			},
			exposes: {
				'./Todo': path.join(__dirname, 'src', 'components', 'pages', 'Todo', 'Todo'),
			},
			shared: {
				react: { singleton: true },
				'react-dom': { singleton: true },
			},
		}),
	],
	devServer: {
		watchFiles: path.join(__dirname, 'src'),
		port: 3002,
	},
	optimization: {
		minimizer: [
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: [
							['gifsicle', { interlaced: true }],
							['jpegtran', { progressive: true }],
							['optipng', { optimizationLevel: 5 }],
							['svgo', { name: 'preset-default' }],
						],
					},
				},
			}),
		],
	},
};
