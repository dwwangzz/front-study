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
