var webpack = require("webpack");
//require.js gulp
module.exports = {
	//devtool: "source-map",
	//入口起点 引引入index.js文件，一会经过处理并输出新的处理文件
	entry: './index.js',
	//输出结束点
	output: {
		//输出后的文件名
		filename: 'bundle.js',
		//输出之后的文件路径 必须是绝对路径
		path: __dirname + '/public'
	},
	//配置加载器 加载器就是处理非js类型的文件，把它通通转化为js文件类型
	module: {
		loaders: [{
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.html$/,
			loader: 'html-loader'
		}, {
			test: /\.(jpg|png|gif|jpeg)$/,
			loader: 'url-loader'
		}, {
			test: /\.(ttf|woff|eot|svg)$/,
			loader: 'file-loader'
		}, {
			test: /\.scss$/,
			loader: 'style-loader!css-loader!sass-loader'
		}, {
			test: /\.less$/,
			loader: 'style-loader!css-loader!less-loader'
		}, {
			//vue-template-compiler vue-loader
			test: /\.vue$/,
			loader: 'vue-loader'
		}, {
			test: /\.js$/,
			/*options: {
				presets: ['env']
			},*/
			exclude: /(node_modules)/,
			loader: 'babel-loader'
		}]
	},
	//vue2.0加上这一句
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		},
	},
	//启用 Watch模式,webpack 可以监听文件变化，当它们修改后会重新编译
	watch: true,
	//插件
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
		//new HtmlWebpackPlugin({template: './src/index.html'})
	],
	//配置server 用webpack-dev-server来启动
	devServer: {
		contentBase: "./public",
		compress: true,
		port: 9000
	}
}