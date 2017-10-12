# 安装webpack

[npm](https://www.npmjs.com/package/webpack)

类似gulp全局安装

```js
npm install webpack
```

# 配置

新建一个`webpack.config.js`文件去配置

1. entry 配置入口
2. output 配置出口
3. module 加载器
```
var webpack = require("webpack");
//require.js gulp
module.exports = {
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
		},{
			test: /\.html$/,
			loader: 'html-loader'
		}]
	}
}
```

# 加载器

1. style-loader!css-loader引入css样式

2. html-loader引入html资源

3. url-loader引入图片资源 像素图

4. file-loader引入字体图标等格式 ttf eot svg woff 矢量图

5. sass-loader要配合node-sass模块使用

6. less-loader要配合less模块使用

7. babel-loader把jsx或者es6,es7转为es5