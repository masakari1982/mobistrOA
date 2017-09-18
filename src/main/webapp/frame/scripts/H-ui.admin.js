var num = 0, oUl = $("#min_title_list"), hide_nav = $("#Hui-tabNav");

/*获取顶部选项卡总长度*/
function tabNavallwidth() {
    var taballwidth = 0,
        $tabNav = hide_nav.find(".acrossTab"),
        $tabNavWp = hide_nav.find(".Hui-tabNav-wp"),
        $tabNavitem = hide_nav.find(".acrossTab li"),
        $tabNavmore = hide_nav.find(".Hui-tabNav-more");
    if (!$tabNav[0]) {
        return
    }
    $tabNavitem.each(function (index, element) {
        taballwidth += Number(parseFloat($(this).width() + 60))
    });
    $tabNav.width(taballwidth + 25);
    var w = $tabNavWp.width();
    if (taballwidth + 25 > w) {
        $tabNavmore.show();
    }
    else {
        $tabNavmore.hide();
        $tabNav.css({left: 0});
    }
}

/*左侧菜单响应式*/
function Huiasidedisplay() {
    if ($(window).width() >= 768) {
        $(".Hui-aside").show();
    }
}

/*获取cookie*/
// function getcookie(){
// 	var v = $.cookie("你想获取的COOKIE名");
// }
/*菜单导航*/
function Hui_admin_tab(obj) {
    var bStop = false,
        bStopIndex = 0,
        href = $(obj).attr('data-href'),
        title = $(obj).attr("data-title"),
        topWindow = $(window.parent.document),
        show_navLi = topWindow.find("#min_title_list li"),
        iframe_box = topWindow.find("#iframe_box");
    //console.log(topWindow);
    if (!href || href == "") {
        alert("data-href不存在，请设置data-href属性");
        return false;
    }
    if (!title) {
        alert("请设置data-title属性");
        return false;
    }
    if (title == "") {
        alert("data-title属性不能为空");
        return false;
    }
    show_navLi.each(function () {
        if ($(this).find('span').attr("data-href") == href) {
            bStop = true;
            bStopIndex = show_navLi.index($(this));
            return false;
        }
    });
    if (!bStop) {
        creatIframe(href, title);
        min_titleList();
    }
    else {
        show_navLi.removeClass("active").eq(bStopIndex).addClass("active");
        iframe_box.find(".show_iframe").hide().eq(bStopIndex).show().find("iframe").attr("src", href);
    }
}

/*最新tab标题栏列表*/
function min_titleList() {
    var topWindow = $(window.parent.document),
        show_nav = topWindow.find("#min_title_list"),
        aLi = show_nav.find("li");
}

/*创建iframe*/
function creatIframe(href, titleName) {
    var topWindow = $(window.parent.document),
        show_nav = topWindow.find('#min_title_list'),
        iframe_box = topWindow.find('#iframe_box'),
        iframeBox = iframe_box.find('.show_iframe');
    //     $tabNav = topWindow.find(".acrossTab"),
    //     $tabNavWp = topWindow.find(".Hui-tabNav-wp"),
    //     $tabNavmore = topWindow.find(".Hui-tabNav-more"),
    //     $tabNavitem = topWindow.find(".acrossTab li");
    // var taballwidth = 0;
    show_nav.find('li').removeClass("active");
    show_nav.append('<li class="active"><span title="' + titleName + '" data-href="' + href + '">' + titleName + '</span><i></i></li>');
    tabNavallwidth();
    if ('function' == typeof $('#min_title_list li').contextMenu) {
        $("#min_title_list li").contextMenu('simuRightButton', {
            bindings: {
                'closeThis': function (t) {
                    var $t = $(t);
                    if ($t.find("i")) {
                        $t.find("i").trigger("click");
                    }
                },
                'closeAll': function (t) {
                    $("#min_title_list li i").trigger("click");
                },
            }
        });
    } else {
        $('div.simuRightButton').hide();
    }

    // if (!$tabNav[0]) {
    //     return
    // }
    // $tabNavitem.each(function (index, element) {
    //     taballwidth += Number(parseFloat($(this).width() + 60))
    // });
    // $tabNav.width(taballwidth + 25);
    // var w = $tabNavWp.width();
    // if (taballwidth + 25 > w) {
    //     $tabNavmore.show()
    // }
    // else {
    //     $tabNavmore.hide();
    //     $tabNav.css({left: 0})
    // }
    iframeBox.hide();
    iframe_box.append('<div class="show_iframe"><div class="butterbar active"><span class="bar"></span></div><iframe frameborder="0" src=' + href + '></iframe></div>');
    var showBox = iframe_box.find('.show_iframe:visible');
    $(showBox).find('iframe').on('load', function () {
        $(showBox).find('iframe').animate({opacity: 1, top: 0,}, 300);
        $(showBox).find('.butterbar').removeClass('active').addClass('hide');
    });
}

/*独立的COLOSE LOADING*/
function closeButterbar() {
    var showBox = $(window.parent.document).find('#iframe_box').find('.show_iframe:visible');
    showBox.find('.butterbar').removeClass('active').addClass('hide');
}

/*关闭iframe*/
function removeIframe() {
    var topWindow = $(window.parent.document),
        iframe = topWindow.find('#iframe_box .show_iframe'),
        tab = topWindow.find(".acrossTab li"),
        showTab = topWindow.find(".acrossTab li.active"),
        showBox = topWindow.find('.show_iframe:visible'),
        i = showTab.index();
    tab.eq(i - 1).addClass("active");
    tab.eq(i).remove();
    iframe.eq(i - 1).show();
    iframe.eq(i).remove();
}

/*关闭所有iframe*/
function removeIframeAll() {
    var topWindow = $(window.parent.document),
        iframe = topWindow.find('#iframe_box .show_iframe'),
        tab = topWindow.find(".acrossTab li");
    for (var i = 0; i < tab.length; i++) {
        if (tab.eq(i).find("i").length > 0) {
            tab.eq(i).remove();
            iframe.eq(i).remove();
        }
    }
}

/*弹出层*/

/*
	参数解释：
	title	标题
	url		请求的url
	id		需要操作的数据id
	w		弹出层宽度（缺省调默认值）
	h		弹出层高度（缺省调默认值）
*/
function layer_show(title, url, w, h) {
    if (title == null || title == '') {
        title = false;
    }
    ;
    if (url == null || url == '') {
        url = "404.html";
    }
    ;
    if (w == null || w == '') {
        w = 800;
    }
    ;
    if (h == null || h == '') {
        h = ($(window).height() - 50);
    }
    ;
    layer.open({
        type: 2,
        area: [w + 'px', h + 'px'],
        fix: false, //不固定
        maxmin: true,
        shade: 0.4,
        title: title,
        content: url
    });
}

/*关闭弹出框口*/
function layer_close() {
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
}

/*时间*/
function getHTMLDate(obj) {
    var d = new Date();
    var weekday = new Array(7);
    var _mm = "";
    var _dd = "";
    var _ww = "";
    weekday[0] = "星期日";
    weekday[1] = "星期一";
    weekday[2] = "星期二";
    weekday[3] = "星期三";
    weekday[4] = "星期四";
    weekday[5] = "星期五";
    weekday[6] = "星期六";
    _yy = d.getFullYear();
    _mm = d.getMonth() + 1;
    _dd = d.getDate();
    _ww = weekday[d.getDay()];
    obj.html(_yy + "年" + _mm + "月" + _dd + "日 " + _ww);
};

/*回到桌面*/
function backToDesktop() {
    $(document).find('.show_iframe:eq(0)').show();
    $(document).find('.show_iframe:not(:eq(0))').hide();
    if ($(window).width() < 768) {
        $('.nav-toggle').removeClass('open');
        var mask = $('.Hui-article-box').find('div.ngMobMask');
        $('.Hui-article-box').stop().animate({'left': '0px'}, 150);
        $('aside').stop().animate({'left': '-305px'}, 150);
        $('.Hui-article-box').removeClass('ngFixed');
        $('.Hui-article').removeClass('ngBlur');
        $(mask).fadeOut(function () {
            $(mask).remove();
        });
    }
}

$(function () {
    getHTMLDate($("#top_time"));
    //layer.config({extend: 'extend/layer.ext.js'});
    Huiasidedisplay();
    var resizeID;
    $(window).resize(function () {
        clearTimeout(resizeID);
        resizeID = setTimeout(function () {
            Huiasidedisplay();
        }, 500);
    });

    $(".nav-toggle").click(function () {
        mobdisplaynavbar(this);
    });

    $(".Hui-aside").on("click", ".menu_dropdown dd li a", function () {
        if ($(window).width() < 768) {
            $('.nav-toggle').removeClass('open');
            var mask = $('.Hui-article-box').find('div.ngMobMask');
            $('.Hui-article-box').stop().animate({'left': '0px'}, 150);
            $('aside').stop().animate({'left': '-305px'}, 150);
            $('.Hui-article-box').removeClass('ngFixed');
            $('.Hui-article').removeClass('ngBlur');
            $(mask).fadeOut(function () {
                $(mask).remove();
            });
        }
    });

    /*左侧菜单*/
    $(".Hui-aside").Huifold({
        titCell: '.menu_dropdown dl dt',
        mainCell: '.menu_dropdown dl dd',
        type: 3,
        speed: 100,
    });

    /*选项卡导航*/
    $(".Hui-aside").on("click", ".menu_dropdown a", function () {
        Hui_admin_tab(this);
    });

    $(document).on("click", "#min_title_list li", function () {
        var bStopIndex = $(this).index();
        var iframe_box = $("#iframe_box");
        $("#min_title_list li").removeClass("active").eq(bStopIndex).addClass("active");
        iframe_box.find(".show_iframe").hide().eq(bStopIndex).show();
    });
    $(document).on("click", "#min_title_list li i", function () {
        var aCloseIndex = $(this).parents("li").index();
        $(this).parent().remove();
        $('#iframe_box').find('.show_iframe').eq(aCloseIndex).remove();
        num == 0 ? num = 0 : num--;
        tabNavallwidth();
    });
    $(document).on("dblclick", "#min_title_list li", function () {
        var aCloseIndex = $(this).index();
        var iframe_box = $("#iframe_box");
        if (aCloseIndex > 0) {
            $(this).remove();
            $('#iframe_box').find('.show_iframe').eq(aCloseIndex).remove();
            num == 0 ? num = 0 : num--;
            $("#min_title_list li").removeClass("active").eq(aCloseIndex - 1).addClass("active");
            iframe_box.find(".show_iframe").hide().eq(aCloseIndex - 1).show();
            tabNavallwidth();
        } else {
            return false;
        }
    });
    tabNavallwidth();

    $('#js-tabNav-next').click(function () {
        num == oUl.find('li').length - 1 ? num = oUl.find('li').length - 1 : num++;
        toNavPos();
    });
    $('#js-tabNav-prev').click(function () {
        num == 0 ? num = 0 : num--;
        toNavPos();
    });

    function toNavPos() {
        oUl.stop().animate({'left': -num * 110}, 400);
    }
}); 
