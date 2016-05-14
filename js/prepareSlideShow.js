/**
 * Created by wangwangstar on 2016/5/14.
 */



function prepareSlideShow() {

//1 创建img标签，append至它的容器div，append至ol标签
    var haha = document.createElement("img");
    haha.setAttribute("src", "../images/topics.gif");
    haha.setAttribute("id", "placeholder");

    var box = document.createElement("div");
    box.appendChild(haha);


    var linklist = document.getElementById("linklist");
    // linklist.appendChild(box);
    insertAfter(box,linklist);

//2 提取a标签，添加动画，当mouseover event事件触发，
    var links = document.getElementsByTagName("a");
    /*for (var i=0;i<links.length;i++) {
        links[i].onmouseover = function () {
            moveElement("placeholder",(i + 1) * (-100),0,10);
        }
    }*/
    links[0].onmouseover = function() {
        moveElement("placeholder",-100,0,6);
    }
    links[1].onmouseover = function() {
        moveElement("placeholder",-200,0,6);
    }
    links[2].onmouseover = function() {
        moveElement("placeholder",-300,0,6);
    }

}
addLoadEvent(prepareSlideShow);