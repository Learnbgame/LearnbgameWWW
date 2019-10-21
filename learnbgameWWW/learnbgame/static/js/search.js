
var searchMsg = document.getElementById("searchMsg");
var list = document.getElementById("list");
var btn = document.getElementById("btn");



//监听输入框的keuup事件，
searchMsg.onkeyup = function() {
    if (this.value) {
        show(list);
        // 动态创建script标签，使用百度提供的接口，将查询字符串编码后，写到src当中
        var s = document.createElement('script');
        s.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + encodeURI(this.value.trim()) + '&json=1&p=3&sid=1457_21105_17001_22158&req=2&csor=1&pwd=7&cb=fn';
        // 插入到文档后获取jsonp格式的数据，然后调用callback函数，将data数据以参数的形式传入
        document.body.appendChild(s);
    } else {
        hide(list);
    }
}

//点击li标签后把输入框的信息填入到文本框
list.onclick = function(e) {
    var e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.nodeName == "LI") {
        searchMsg.value = target.innerHTML;
    }
    hide(list)
}

//点击百度一下按钮跳转到相应的页面
btn.onclick = function() {
    location.href = "http://www.baidu.com/s?wd=" + searchMsg.value
}


function fn(data) {
    var lis = document.querySelectorAll('li');
    //这时候遍历查询到的信息，放到li标签当中
    data.s.forEach(function(item, index) {
        lis[index].innerHTML = item;
    });

    // 获取到数据后，把脚本删除
    var s = document.querySelectorAll('script');
    for (var i = 1, len = s.length; i < len; i++) {
        document.body.removeChild(s[i]);
    }
}

function hide(obj) {
    obj.style.display = "none"
}

function show(obj) {
    obj.style.display = "block"
}
