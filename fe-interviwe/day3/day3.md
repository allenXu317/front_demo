# day3

## 1.[html] HTML全局属性(global attribute)有哪些（包含H5）？


## 2.[css] 在页面上隐藏元素的方法有哪些？


## 3.(js) 
```javascript
function findLast(str,target) {
    let loc = 0;
    let j = 0;
    for (i of str) {
        // console.log(i,target,j);
        j++;
        if (i == target) {
            loc = j;
        }
    }
    return loc;
}

function myDel(str,target) {
    let loc = findLast(str,target);
    // console.log(loc);
    let res = "";
    let j = 0;
    for (i of str) {
        if (j == loc-1) {
            j++;
            continue;
        }
        res += i;
        j++;
    }
    return res;
}


let str = "sadasdadasdasd";
let target = "s";
let res = myDel(str,target);
console.log(str);
console.log(res);
```


## 比较好的博客链接：
### 1.[HTML全局属性列表大全-张鑫旭](https://www.zhangxinxu.com/wordpress/2020/01/html-global-attributes/#attrAccesskeyz)
### 2.[CSS隐藏元素的8种方法](https://juejin.im/post/6844903456545701901)
### 3.[CSS隐藏元素的方法](https://www.cnblogs.com/xiaoyucoding/p/12552017.html)