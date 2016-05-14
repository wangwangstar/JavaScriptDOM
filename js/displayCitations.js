/**
 * Created by wangwangstar on 2016/5/10.
 */
function displayCitations() {
    if (!document.getElementsByTagName ||!document.createElement||!document.createTextNode) return false;
    //使用getElementsByTagName方法完成查找，并把找到的节点集合保存为变量quotes
    var quotes = document.getElementsByTagName("blockquote");
    // 遍历这个集合
    for (var i=0;i<quotes.length;i++){
        //如果没有cite属性，继续这个循环
        if (!quotes[i].getAttribute("cite")) continue;
        //得到当前blockquote元素的cite属性值并把它存入变量url;
        var url = quotes[i].getAttribute("cite");
        //取得引用中的所有元素节点
        var quoteChildren = quotes[i].getAttribute("cite");
        // 如果没有元素节点，继续循环
        if (quoteChildren.length < 1) continue;
        //取得引用中的最后一个元素节点
        var elem = quoteChildren[quoteChildren.length - 1];
        //创建标记
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        //把标记添加到引用中的最后一个元素节点
        elem.appendChild(superscript);
    }

}
    addLoadEvent(displayCitations);