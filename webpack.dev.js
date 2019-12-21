const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const resolve = function (dir) {
	return path.resolve(__dirname, dir);
}

const BUILD_DIR = path.resolve(__dirname, "./build/");

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	output : {
		path : BUILD_DIR,
		filename : "[name] bundle.js",
	},
  
  module: {
    rules: [
			{
				test: /\.(c)ss$/,
				use:[
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					}
				]
			},
      {
				test: /\.less$/,
				use:[
					{
						loader: 'css-loader'
					},
					{
						loader: 'less-loader'
					}
				]
      },
      
      {
				test: /\.(js|jsx)$/,
				use: {
					loader: 'babel-loader',
				}
      },
      
      {
				test: /\.(ts|tsx)$/,
				use: [
					// {loader: 'babel-loader'},
					{
						loader: 'ts-loader',
						options: {
							// 加快编译速度
							transpileOnly: true,
							// 指定特定的ts编译配置，为了区分脚本的ts配置
							configFile: path.resolve(__dirname, './tsconfig.json')
						}
					}
				],
			},
    ] 
	},
	
	plugins: [
		new HtmlWebpackPlugin ({
			filename: 'index.html',
			template: 'index.html',
			inject: true,
			title: "code diff",
			minify: {
				removeComments: true
			}
		})
	],

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	}
}