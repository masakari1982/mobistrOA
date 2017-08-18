Welcome

<script>
    var $$ = window.parent.$; //指定调用父页面的Jquery

    var showBox = $$(window.parent.document).find('#iframe_box').find('.show_iframe:visible');
    var frameContent = $$(showBox).find('iframe');
    $$(frameContent).on('load', function () {
        $$(showBox).find('iframe').animate({opacity: 1, top: 0,},300);
        $$(showBox).find('.butterbar').removeClass('active').addClass('hide');
    })
</script>