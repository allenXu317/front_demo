# day2

## 1.(html) html的元素有哪些？(包括h5)
*看如下博客链接* 



## 2.(css) css3有哪些新增的特性？
*看如下博客链接*



## 3.(js) 写一个方法去掉字符串中的空格
***代码***
```javascript
function myTrim(str) {

    let res="";

    for (let i of str) {
        if (i!=" ") {
            res += i
        }
    }

    return res;
}


let str = "    sada asdad asd ad asd a d d  asd   ";
let test = myTrim(str);
console.log(test)
```

***
## 比较好的博客资料
1. [关于html元素类型的详细解析](https://juejin.im/post/6844903634384191495)
2. [MDN的HTML元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)
3. [MDN的H5元素](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5/HTML5_element_list)
4. [H5的新增元素](https://www.w3school.com.cn/html/html5_new_elements.asp)
5. [CSS3新增特性](https://juejin.im/entry/6844903486618861575)
6. [深入理解css3新特性](https://developer.ibm.com/zh/articles/1202-zhouxiang-css3/)
7. [css3新增特性](https://leohxj.gitbooks.io/front-end-database/content/html-and-css-basic/css3-news.html)