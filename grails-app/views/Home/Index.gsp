<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <meta name="renderer" content="webkit|ie-comp|ie-stand">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    %{--禁止百度耍流氓转码--}%
    <meta http-equiv="Cache-Control" content="no-siteapp" />

    <link rel="Bookmark" href="/favicon.ico" >
    <link rel="Shortcut Icon" href="/favicon.ico" />
    <g:include view="/layouts/styling.gsp" /><g:include view="/layouts/styling.gsp" />

    <title>MobistrOA</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
</head>
<body>

<div id="mobLoading">
    <div id="mobLoadingText">读取中...</div>
    <div class="butterbar active"><span class="bar"></span>
    </div>
</div>

<header class="navbar-wrapper">
    <div class="navbar navbar-fixed-top">
        <div class="container-fluid cl">
            <a class="logo navbar-logo f-l hidden-xs" href="/"><img src="${imagesPath}/moblogo.png" style="height: 80%; width: auto;" /></a>
            <a class="logo navbar-logo-m f-l visible-xs" href="/"><img src="${imagesPath}/moblogo.png" style="height: 80%; width: auto;" /></a>
            <div style="position: absolute; right:0">
                <a aria-hidden="false" class="setting-toggle visible-xs" href="javascript:;"><i class="fa fa-cog"></i></a>
                <a aria-hidden="false" class="nav-toggle visible-xs" href="javascript:;"><i class="fa fa-align-justify"></i></a>
            </div>
            <g:include view="/Tpls/_headbar.gsp" />
        </div>
    </div>
</header>

<aside class="Hui-aside bg-light dker">
<g:include view="/Tpls/_aside.gsp" />
</aside>

%{--<div class="dislpayArrow hidden-xs"><a class="pngfix" href="javascript:void(0);" onClick="displaynavbar(this)"></a></div>--}%

<section class="Hui-article-box">
    <div id="Hui-tabNav" class="Hui-tabNav hidden-xs">
        <div class="Hui-tabNav-wp">
            <ul id="min_title_list" class="acrossTab cl">
                <li class="active"><span title="我的桌面" data-href="welcome.html">我的桌面</span></li>
            </ul>
            <div class="Hui-tabNav-more btn-group">
                <a id="js-tabNav-prev" class="btn btn-default" href="javascript:;">
                    <i class="fa fa-angle-left"></i>
                </a>
                <a id="js-tabNav-next" class="btn btn-default" href="javascript:;">
                    <i class="fa fa-angle-right"></i>
                </a>
            </div>
        </div>


    </div>

    <div id="iframe_box" class="Hui-article">
        <div class="show_iframe">
            <div class="butterbar active"><span class="bar"></span></div>
            <iframe scrolling="yes" frameborder="0" src="/Home/welcome"></iframe>
        </div>
    </div>


</section>

<div class="contextMenu" id="simuRightButton">
    <ul>
        <li id="reloadThis">刷新</li>
        <li id="colseThis">关闭</li>
        <li id="closeOther">关闭其他</li>
        <li id="closeAll">关闭全部</li>
    </ul>
</div>

<g:include view="/layouts/scripting.gsp" />

<!--页面业务相关脚本-->
<script type="text/javascript" src="${vendorPath}/jquery.contextmenu/jquery.contextmenu.r2.js"></script>

<script type="text/javascript">
    $(window).on('load', function () {
        $('#mobLoading').fadeOut(600, function () {
            $('#mobLoading').remove();
        });
    })

    /*个人信息*/
    function myselfinfo(){
        layer.open({
            type: 1,
            area: ['300px','200px'],
            fix: false, //不固定
            maxmin: true,
            shade:0.4,
            title: '查看信息',
            content: '<div>管理员信息</div>'
        });
    }

    /*资讯-添加*/
    function article_add(title,url){
        var index = layer.open({
            type: 2,
            title: title,
            content: url
        });
        layer.full(index);
    }
    /*图片-添加*/
    function picture_add(title,url){
        var index = layer.open({
            type: 2,
            title: title,
            content: url
        });
        layer.full(index);
    }
    /*产品-添加*/
    function product_add(title,url){
        var index = layer.open({
            type: 2,
            title: title,
            content: url
        });
        layer.full(index);
    }
    /*用户-添加*/
    function member_add(title,url,w,h){
        layer_show(title,url,w,h);
    }


</script>

</body>
</html>