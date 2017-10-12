var webpack = require("webpack");
//require.js gulp
module.exports = {
	//入口起点 引引入index.js文件，一会经过处理并输出新的处理文件
	entry: './index.js',
	//输出结束点
	output: {
		//输出后的文件名
		filename: 'abc.js',
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
			options: {
				presets: ['env']
			},
			loader: 'babel-loader'
		}]
	},
	watch: true,
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000
	}
	/*plugins: [
		new webpack.optimize.UglifyJsPlugin(),
	]*/
}