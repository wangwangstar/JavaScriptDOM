/**
 * Created by wangwangstar on 2016/5/3.
 */
//showPic是一个函数，whichpic是函数的参数名，whichpic代表一个元素节点
function showPic(whichpic) {
    //找到whichpic节点的href属性对应的 值，也就是图片路径
    if (!document.getElementById("placeholder")) {
        return false;
    }
    var source = whichpic.getAttribute("href");
    // 找到占位符 图片标签
    var placeholder = document.getElementById("placeholder");
    //将占位符 图片标签的src属性，改成 whichpic节点href属性的值，也就是上面的source
    placeholder.setAttribute("src", source);
    //当图片库页面上的某个图片链接被点击时，这个链接的title属性值将被提取并保存到text变量中
    if (!document.getElementById("description")) 
        return false;
        if (!whichpic.getAttribute("title")) {
            var text = "";
        } else {
            var text = whichpic.getAttribute("title");
        }
        // 引用id为description的文本段落，并保存到变量description中
        var description;
        description = document.getElementById("description");
        if (description.firstChild.nodeType == 3) {
            //把description对象的第一个子节点的nodeValue属性值给变量text
            description.firstChild.nodeValue = text;
        }
        return false;
    }
    function prepareGallery() {
        //测试浏览器是否支持getElementsByTagName的DOM方法
        if (!document.getElementsByTagName) return false;
        if (!document.getElementById) return false;
        if (!document.getElementById("imagegallery")) return false;
        //把document.getElementById("imagegallery")赋值给变量gallery
        var gallery = document.getElementById("imagegallery");
        var links = gallery.getElementsByTagName("a");
        //用for循环遍历处理links数组里的各个元素
        for (var i = 0; i < links.length; i++) {
            links[i].onclick = function () {
                return showPic(this);
            }
            links[i].onkeypress = links[i].onclick;
        }
    }
    //在页面加载完毕时执行的函数
    function addLoadEvent(func) {
        //把现有的window.onload事件处理函数的值存入变量oldonload
        var oldonload = window.onload;
        //判断在这个处理函数上是否绑定了任何函数
        if (typeof window.onload != 'function') {
            window.onload = func;
        } else {
            window.onload = function () {
                oldonload();
                func();
            }
        }
    }
    //把函数添加到addLoadEvent里去
    addLoadEvent(prepareGallery);
    addLoadEvent(preparePlaceholder);
//这个函数有两个参数，一个是将被插入的新元素，另一个是目标元素
function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}
function preparePlaceholder() {
    //测试浏览器是否支持createElement的DOM方法
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById) return false;
    //创建一个img元素节点
    var placehoder = document.createElement("img");
    //设置img元素节点的id属性
    placehoder.setAttribute("id","placeholder");
     //设置img元素节点的src属性
     placehoder.setAttribute("src","../images/placeholder.gif");
     //设置img元素节点的alt属性
     placehoder.setAttribute("alt","my image gallery");
    //创建一个P元素节点
    var description = document.createElement("p");
    //设置P元素节点的id属性
    description.setAttribute("id","description");
    //创建一个文本节点
    var desctext = document.createTextNode("Choose an image");
    //把这个文本节点追加到P元素上
    description.appendChild(desctext);
    //得到图片清单
    var gallery = document.getElementById("imagegallery");
    //把placehoder插入到gallery的后面
    insertAfter(placehoder,gallery);
    //把description插入到placehoder的后面
    insertAfter(description,placehoder);
}



