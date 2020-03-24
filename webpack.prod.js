const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/lib/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    filename: 'index.js',
		libraryTarget: 'umd'
	},
	externals: {
    react: {
			root: 'React',
			commonjs2: 'react',
			commonjs: 'react',
			amd: 'react'
		},
		'react-dom': {
			root: 'ReactDOM',
			commonjs2: 'react-dom',
			commonjs: 'react-dom',
			amd: 'react-dom'
		},
		'react-router-dom': {
			root: 'ReactRouterDOM',
			commonjs2: 'react-router-dom',
			commonjs: 'react-router-dom',
			amd: 'react-router-dom'
		}
	},
	plugins: [
    // 清除
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: path.resolve(__dirname, 'dist')
		}),

	],
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
  resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		alias: {
			react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
		}
  },
  optimization: {
    namedModules: true,
		splitChunks: {
			chunks: "all",
			minSize: 30000,
			minChunks: 3,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			name: true,
			cacheGroups: {
				// default: {
				// 	minChunks: 2,
				// 	priority: -20,
				// 	reuseExistingChunk: true,
        // },
				// vendors: {
				// 	test: /[\\/]node_modules[\\/]/,
        //   chunks: "initial",
        //   name: "vendor",
        //   priority: 10,
        //   enforce: true,
        // },
        // commons: {
        //   name: 'vendors',
        //   chunks: 'all',
				// 	minChunks: 2,
				// 	maxInitialRequests: 5, // The default limit is too small to showcase the effect
				// 	minSize: 0 // This is example is too small to create commons chunks
				// }
			}
		},
		minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        }
      }),
    ],
	}
}