const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: '[name].jsx',
    libraryTarget: 'umd'
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
  resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
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
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,
        },
				vendors: {
					test: /[\\/]node_modules[\\/]/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true,
        },
        commons: {
          name: 'vendors',
          chunks: 'all',
					minChunks: 2,
					maxInitialRequests: 5, // The default limit is too small to showcase the effect
					minSize: 0 // This is example is too small to create commons chunks
				}
			}
    },
    runtimeChunk: "single"
	}
}