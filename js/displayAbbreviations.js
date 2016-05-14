/**
 * Created by wangwangstar on 2016/5/9.
 */
function displayAbbreviations() {
    if (!document.getElementsByTagName ||!document.createElement||!document.createTextNode) return false;
    //遍历文档里的所有abbr元素，并把节点集合构成的数组保到变量abbreviations里
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) return false;
    var defs = new Array();
    //遍历所有缩略词
    for (var i = 0; i < abbreviations.length; i++) {
        var current_abbr = abbreviations[i]
        //保证displayAbbreviations函数在ＩＥ中能够平稳退化
        if (current_abbr.childNodes.length < 1) continue;
        //用getAttribute()方法得到title属性，并把值存入到变量definition中
        var definition = current_abbr.getAttribute("title");
        //得到文本节点的nodeValue属性值并把它赋值给变量key
        var key = current_abbr.lastChild.nodeValue;
        //把变量key 和definition的值保存到defs数组里
        defs[key] = definition;
    }
    //用createElement方法创建这个定义列表，并把这个新创建的元素赋值给变量dlist
    var dlist = document.createElement("dl");
    //用一个for/in循环对defs数组进行遍历定义
    for (key in defs) {
        //defa关联数组里的每个键，把它的值赋给变量key
        var definition = defs[key];
        //创建相应的文本节点并分别把它们添加到新创建的DT和DD元素，元素节点赋值给变量dtitle
        var dtitle = document.createElement("dt");
        //新创建的文本节点赋值给变量dtitle_text
        var dtitle_text = document.createTextNode(key);
        //使用appendChild（）方法把dtitle_text文本节点添加到 dtitle元素节点
        dtitle.appendChild(dtitle_text);
        //创建定义描述
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        //把它们添加到定义列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
        if (dlist.childNodes.length < 1) return false;
        //创建标题
        var header = document.createElement("h2");
        var header_text = document.createTextNode("Abbreviation");
        header.appendChild(header_text);
        //把标题添加到页面主体
        document.body.appendChild(header);
        //把定义列表添加到页面主体
        document.body.appendChild(dlist);
}
        addLoadEvent(displayAbbreviations);