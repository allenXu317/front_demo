# day4

## 1.[html] 第4天 HTML5的文件离线储存怎么使用，工作原理是什么？
*可参考博客链接*

## 2.[css] CSS选择器有哪些？哪些属性可以继承？

### css选择器：
* id选择器
* 子选择器
* 类选择器
* 元素选择器
* 通配选择器
* 后代选择器
* 属性选择器
* 组合选择器
    * 后代选择器
    * 直接子代选择器
    * 一般兄弟选择器
    * 紧邻兄弟选择器
    * 列组合器
* 伪选择器
    * 伪类选择器
    * 伪元素选择器<br>
   
### 哪些属性可以继承:
* 字体系列属性
    * font : 组合字体
    * font-family: 字体的系列
    * font-size: 字体尺寸
    * font-style: 字体风格
    * font-weight: 字体粗细
    * font-variant: 字体放大或者缩小
* 文本系列属性
    * text-indent: 文本缩进
    * text-align: 文本对齐
    * line-height: 行高
    * word-spacing: 增加或减少单词间的空格
    * letter-spacing: 增加或减少字符间的空格
    * text-transform: 控制文本的大小写
    * direction: 文本的书写方向
    * color: 文本的颜色
* 元素可见性
    * visibility: 可见性
* 表格布局属性
    * caption-side: 定位表格标题位置
    * border-collaps: 合并表格边框
    * border-spacing: 设置相邻单元格边框间的距离
    * empty-cells: 单元格边框的出现与消失
    * table-layout: 表格的宽度由什么决定
* 列表布局属性
    * list-style-type: 列表的样式
    * list-style-position: 列表样式的位置
    * list-style : 以上样式可通过此属性组合定义
* 引用属性
    * quotes: 定义嵌套引用的引号类型
* 光标
    * cursor：箭头可以变成定义的形状

### 不可继承的属性:
* display
* 部分文本属性:
    * vertical-align : 垂直文本对齐属性
    * text-decoration: 文本修饰样式
    * text-shadow: 文本阴影效果
    * white-space: 空白符的处理
* background 属性
* 盒子属性
* 定位属性


## 3.[js] 写一个方法把下划线命名转成大驼峰命名
``` javascript
//写一个方法把下划线命名转成大驼峰命名
function modifyTheName(str) {
    let res = "";
    let flag = 0;
    str = str.toLowerCase();
    for (c of str) {
        if (c == "_") {
            flag = 1;
            continue;
        }
        if (flag > 0){
            c = c.toUpperCase();
            flag = 0;
        }
        res += c;
    }
    return res;
}


test = "ttt_aasDDFSdsad_Sadasd";
res = modifyTheName(test);
console.log(res);

```
***<br>
#### 好的博客:
1.[离线web应用 HTML5的离线储存怎么使用，解释工作原理](https://www.jianshu.com/p/aaa8971cd6c8)
2.[HTML5的文件离线存储怎么使用,工作原理?](https://juejin.cn/post/6844903902727372807)
