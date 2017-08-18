<script type="text/javascript">
    window.onload =function()
        {
            var linkList=window.parent.document.getElementsByTagName("link");//获取父窗口link标签对象列表
            var head=document.getElementsByTagName("head").item(0);//外联样式
            for(var i=0;i<linkList.length;i++)
            {
                var l=document.createElement("link");
                l.rel = 'stylesheet'
                l.type = 'text/css';
                l.href=linkList[i].href;
                head.appendChild(l);
            }
        }
</script>

<div class="row">
    Dashboard

    <a class="btn btn-default">default</a>
</div>


<script>
    var $$ = window.parent.$; //指定调用父页面的Jquery
</script>