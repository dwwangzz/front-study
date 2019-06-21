# 前端学习笔记
### 1. html+css
> 学习地址： 

> https://ke.qq.com/course/231570?term_id=100273162&taid=2955805083273362

# div
#### 1. div水平居中 设置margin:0 auto兼容各大浏览器让div水平居中

#### 2. div中的元素居中 内部元素增加 margin: auto 属性就可以
如：
```html
<div>
    <table style="margin: auto">
        <tr>
            <td>1</td>
            <td>2</td>
        </tr>
    </table>
</div>
```


# a标签
a 标签的四种样式

在支持 CSS 的浏览器中，链接的不同状态都可以不同的方式显示，这些状态包括：活动状态，已被访问状态，未被访问状态，和鼠标悬停状态。分别如下设置：

```css
　　a:link {color: red} /* 未访问的链接 */
　　a:visited {color: green}	/* 已访问的链接 */
　　a:hover {color: black}	/* 鼠标移动到链接上 */
　　a:active {color: yellow}	/* 选定的链接，即鼠标按下去的时候不松开显示的状态 */
```
注意：有时候我们发现设置了上面的属性但是没有效果，这是因为他们是有顺序的

1、a:hover 必须被置于 a:link 和 a:visited 之后，才是有效的。

2、a:active 必须被置于 a:hover 之后，才是有效的。

总结来说就是 link、visited、hover、active。实际编写当中我们很容易不按顺序来写，这里需要特别注意

# 元素自动转为 inline-block
- position: absolute 
- float: left/right 

上面两个属性可以，自动设置display=inline-block

# line-height 知识点
> 微软雅黑默认行高： 1.32

> 宋体默认行高： 1.41
- 子元素继承：
    - 数值方式：line-height: 1.5;可以直接被子元素继承
    - 其他方式：%、em、px 子元素都是继承的多少像素，继承计算后的值
```css
{
    line-height: normal;
    /*使用数字作为值，子元素可以继承1.5这个值，而不是计算后的多少像素*/
    line-height: 1.5;
    /*下面子元素继承的是计算后的值，??px*/
    line-height: 200%;
    line-height: 5em;
    line-height: 50px;
}
```

# line-family
```css
* {
    /*宋体的三种写法*/
    font-family: '宋体';
    font-family: SimSun;
    /*\u5b8b\u4f53 宋体的Unicode编码去掉u*/
    font-family: '\5b8b\4f53';
}
```

# @规则
```
@charset    设置样式表的编码
@import     导入其他样式文件
@meida      媒体查询
@font-face  自定义字体
```

# base标签
<base href="http://www.baidu.com" target="_blank">
a标签默认的前缀地址，和打开方式

# inline-block 元素换行符问题
如两个image标签换行，后面会有个空格，这个空格的大小是font-size控制的，可以用font-size=0的方式来去除这个空格

# h标签使用场景
- h1：标题，一个页面中h1标签只能出现一次，如果没有合适的，可以以图换字，logo
- h2：副标题，如：小标题导航栏
- h3：页面中的版块标题
- h4：版块内列表的小标题
- h5、h6：版块内在嵌套版块、标题

# 盒模型
```
    1. 标准盒模型
        总宽度 = border（左右） + width + padding（左右）
        总高度 = border（上下） + height + padding（上下）
    2. IE盒模型（怪异盒模型） box-sizing: border-box;
        总宽度 = width
        总高度 = height
```
