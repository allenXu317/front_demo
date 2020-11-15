# day1

## 1(css html )在引入 css 样式时，link 和 @import 有什么区别？html 引入 css 样式的方法有几种？

### 解答：

_区别_
1）兼容性和性质不一样： link 是 xhtml 的标签，不存在兼容性问题，而 @import 是 css2.1 引入的 css 代码，对于低版本浏览器存在兼容性问题；<br>
2）引入的内容不一样：link 除了可以引入 css 代码还可以引入 rss 内容，而@import 只能引入 css 代码；<br>
3）引入的方式和时机不一样：link 是在网页加载时和 html 页面一起引入，而@import 则是在页面加载完毕后再引入；<br>
4）支持 js 通过操作 DOM 进行修改：link 可以支持 js 通过 dom 进行修改，而@import 不行。<br>
_Html 引入 css 的四种方式：_<br>
1）内联：在标签中加入 style=””属性；<br>
2）内嵌：通过在 head 标签中加入`<style></style>`标签进行引入；<br>
3）Link 引入：`<link rel=”” type=”” href=””>` <br>
4）@import 引入。<br>

## <br>2(css） 谈谈圣杯布局 和 双飞翼 布局的理解 和 区别 ， 并用代码实现：

### 解答 ：

_区别:_<br>
双飞翼布局是针对圣杯布局可能会出现的bug提出的。<br>
两者的主要区别在于:<br>
1.圣杯使用了相对定位，双飞翼没有使用;<br>
2.双飞翼在圣杯原有的middle外面又加了一层dom，通过这层dom来控制middle的宽度;<br>
<br>
<br>_代码实现:_<br>

#### 圣杯布局 传统的 float 实现

```css
      body {
        margin: 0;
        padding: 0;
      }
      .main {
        overflow: hidden;
        /* width: 100%; */
        height: 100px;
        /* 设置左右内边距 */
        /* middle继承的是父元素的内容区的宽度，让 left 和 right 填充左右，middle只在内容区中展示 */
        padding: 0 50px 0 50px;
      }
      /* .main::after {
          content: "";
          clear: both;
      } */

      .middle,
      .left,
      .right {
        float: left;
      }

      .middle {
        position: relative;
        width: 100%;
        height: 50px;
      }

      .left {
        position: relative;
        width: 50px;
        height: 50px;
        /* 根据浮动原理，当浮动的元素遇到浏览器边界或另一个浮动元素时就会暂时停止漂浮（但是脱离了文档流） */
        /* 对于left块来说，left的左边紧挨着middle的右边，要想让left移到左边去 */
        /* 首先设置一个 mrigin-left:-100%;   margin-left 的百分比是相对父元素而言的，而middle 的 width也被设置成了100%,所以和父级元素同宽 */
        /* 那么这样设置后（由上文可知，left 的左边 和 middle 的右边是紧挨着的），left块会以左边为基准，长度为middle块的长度，向左移动，因为浮动是脱离文档流的，所以left会向上走，覆盖到midlle上面 */
        /* 此时 left 的左边 和 middle 的左边是对齐的（left覆盖在middle上面） */
        margin-left: -100%;
        /* 再通过相对定位，将left块往左拉它自己的宽度，使left的右边界紧挨 middle的左边界，并且可以挤压middle */
        left: -50px;
      }

      .right {
        position: relative;
        width: 50px;
        height: 50px;
        /* right块也是同理，因为之前的left块被移走了，所以此时right块的左边紧挨着middle块的右边 */
        /* 先利用margin-left -right块的宽度，将right块拉回到middle上，并使其右边与middle块的右边平齐 */
        /* 再利用定位属性将right块向右拉，使right块在middle的右边 */
        right:-50px ;
        margin-left: -50px;
      }
      /* 将两个块放好后，因为浮动块之间是会产生挤压的，所以左右固定宽度的块不会变化，中间相对宽度的middle会发生变化 */

      /* 设置样式方便查看效果 */
      .middle {
        background-color: red;
      }
      .left {
        background-color: gray;
      }
      .right {
        background-color: green;
      }
```

```html
<div class="main">
  <div class="middle">middle</div>
  <div class="left">left</div>
  <div class="right">right</div>
</div>
```

#### 圣杯布局 flex 实现
```css
.main {
    width:100%;
    display:flex;
}
.right,
.left {
    width:100px;
    height:100px;
}
.middle {
    width:100%;
    height:100px;
}
/* 设置一些标记样式 */
.right {
    background-color:yellow;
}
.middle {
    background-color:red;
}
.left {
    background-color:green;
}
```
```html
<div class="main">
    <div class="middle">middle</div>
    <div class="left">left</div>
    <div class="right">right</div>
</div>
```

### 双飞翼布局 
```css
        .main {
            overflow: hidden;
            padding: 0;
        }
        .col {
            float: left;
        }
        .main-middle {
            width: 100%;
            height:100px;
        }
        .middle {
            background-color: red;
            width: 100%;
            height: 100px;
            margin: 0 100px 0 100px;
        }
        .right {
            width: 100px;
            height: 100px;
            background-color:yellow;
            margin-left: -100%;
        }
        .left {
            width: 100px;
            height: 100px;
            background-color: green;
            margin-left: -100px;
        }
```

```html
    <div class="main">
        <div class="col main-middle">
            <div class="middle"> middle</div>
        </div>
        <div class="col left">left</div>
        <div class="col right">right</div>
    </div>
```

### <br>3(js/算法) 用递归算法实现，数组长度为 5 且元素的随机数在 2-32 间不重复的值：

### 实现:

```javascript
function generateRandomArray(res) {
  // 是否满足生成数组的长度条件
  if (res.length < 5) {
    let k = 0;
    for (; true; ) {
      k = getRandomNum();
      if (find(res, k)) {
        continue;
      } else {
        res.push(k);
        break;
      }
    }
    res = generateRandomArray(res);
  }

  return res;
}

// 判断随机数target是否已经存在于数组中
function find(array, target) {
  for (const i of array) {
    if (i == target) {
      return true;
    }
  }
  return false;
}

// 生成2-32之间的随机数
function getRandomNum() {
  let k = 0;
  for (; true; ) {
    k = Math.ceil(Math.random() * 32);
    if (k < 2 || k > 32) {
      continue;
    } else {
      return k;
    }
  }
}

//测试
let res = [];
let l = 5;
let test = generateRandomArray(res);
console.log(test);
```

## <br> 比较好的博文：
### 1.[CSS 布局经典问题初步整理](https://brianway.github.io/2017/05/18/css-layout-classical-problems/)
### 2.[【布局】聊聊为什么淘宝要提出「双飞翼」布局](https://github.com/zwwill/blog/issues/11)
### 3.[width: 100%是相对于谁的？](https://www.jianshu.com/p/0628464fc739)
### 4.[圣杯布局和双飞翼布局（前端面试必看）](https://www.jianshu.com/p/f9bcddb0e8b4)
### 5.[深入理解圣杯布局和双飞翼布局](https://juejin.im/post/6844903817104850952#comment)
