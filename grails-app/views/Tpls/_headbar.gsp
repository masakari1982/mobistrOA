<nav class="nav navbar-nav pull-left hidden-xs">
    <ul class="cl">
        <li>
            <a id="switchAside" href="javascript:;" class="dropDown_A" onClick="displaynavbar(this)"><i class="fa fa-dedent"></i></a>
        </li>
    </ul>
</nav>

<nav class="nav navbar-nav hidden-xs">
    <ul class="cl">
        <li class="dropDown dropDown_hover">
            <a href="javascript:;" class="dropDown_A">新增 <span class="caret"></span></a>
            <ul class="dropDown-menu menu radius">
                <li><a href="javascript:;" onclick="article_add('添加资讯','article-add.html')">工作日志</a></li>
                <li><a href="javascript:;" onclick="picture_add('添加资讯','picture-add.html')">图片</a></li>
                <li><a href="javascript:;" onclick="product_add('添加资讯','product-add.html')">产品</a></li>
                <li><a href="javascript:;" onclick="member_add('添加用户','member-add.html','','510')">用户</a></li>
            </ul>
        </li>
    </ul>
</nav>

<nav id="Hui-userbar" class="nav navbar-nav navbar-userbar hidden-xs">
    <ul class="cl">
        <li id="Hui-msg">
            <a href="#" title="消息">
                <i class="fa fa-bell"></i>
                <span class="badge badge-sm up bg-danger pull-right-xs">9</span>
            </a>
        </li>
        <li class="dropDown dropDown_hover">
            <a>超级管理员 <span class="caret"></span> <i class="fa fa-user-circle-o"></i></a>
            <ul class="dropDown-menu menu radius">
                <li><a href="javascript:;" onClick="myselfinfo()">个人信息</a></li>
                <li><a href="#">切换账户</a></li>
                <li><a href="#">退出</a></li>
            </ul>
        </li>
    </ul>
</nav>