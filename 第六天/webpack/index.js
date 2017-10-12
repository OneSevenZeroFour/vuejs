/*//自定模块
var obj = require("./tool/tool.js")
console.log(obj)
console.log(obj.add(8,9))

//第三方模块
var $ = require("jquery")

//引入自定义css
require("./css/index.css")
//引入图片资源
var html = require("./html/index.html")
var img = document.createElement("img");
img.src = require("./img/1.jpg");
document.body.appendChild(img)

var img2 = document.createElement("img");
img2.src = require("./img/2.png");
document.body.appendChild(img2)

//引入svg
var embed = document.createElement("embed")
embed.src = require("./svg/1.svg")
embed.type = "image/svg+xml"
document.body.appendChild(embed)

$("#demo").html(html)

//引入第三方css
require("weui")
//引入scss
require("./sass/index.scss")
//引入less
require("./less/index.less")*/
import "jquery"
var a = ()=>{
	console.log("a")
}
//require("./sass/index.scss")
//require("./css/index.css")

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

const b = 1
